import React from 'react';
import logo from './logo.svg';
import './App.css';
 
import {Header} from './Header'
import {AppItem} from './AppItem'
import {AddItemsArea} from './AddItemsArea'
import {ItemsArea} from './ItemsArea'
import {HashString,ItemType} from './types'
 
 
const App = ():JSX.Element =>{
    const defaultHashLength = 10;
    const defaultCountItems = 20; 
    // items - List of items that can be updated with new additional items when the button is pressed
    const [items, setItems] = React.useState<ItemType[]>([]); 
    React.useEffect(()=>{
        fillItems(); // Fills the List onmount
    },[])    
    const generateHash = (hashLength = defaultHashLength):HashString=>{
        var result = '';
        const hashSymbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const hashSymbolsLen = hashSymbols.length;
        for (let i = 0; i < hashLength; i++) {
            result += hashSymbols.charAt(Math.floor(Math.random() * hashSymbolsLen));
        }
        return result;
    }
    const fillItems = ():void=>{ 
        const newItems = [...Array(defaultCountItems)].map((_,id)=>({
            id,title:generateHash()
        }));
        setItems(items.length>0? [...items,...newItems]:newItems);
    }  
    const appItems = items.map(el=><AppItem title={el.title}/>);
    
    return(
        <div className="App">
            <Header logo={logo} alt={'App logo'}/>
            <AddItemsArea onAdd={fillItems}/>
            <ItemsArea> {appItems} </ItemsArea>
        </div>
    )
}
 
export default App;
