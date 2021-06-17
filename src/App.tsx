import React from 'react';
import logo from './logo.svg';
import './App.css';
 
import {Header} from './Header'
import {AppItemList} from './AppItemList'
import {AddItemsArea} from './AddItemsArea'
import {ItemsArea} from './ItemsArea'
import {AppItemsList} from './AppItemList/types'
import {getNewItems} from './tools'
 
 
const App:React.FC = () =>{ 
    const [items, setItems] = React.useState<AppItemsList>(getNewItems);  
    const addItems = ():void=>{ 
        const newItems = getNewItems();
        setItems(items.length>0? [...items,...newItems]:newItems);
    } 
    return(
        <div className="App">
            <Header logo={logo} alt={'App logo'}/>
            <AddItemsArea onAdd={addItems}/>
            <ItemsArea> 
                <AppItemList items={items} /> 
            </ItemsArea>
        </div>
    )
}
 
export default App;
