import {AppItem} from '../AppItem'
import {AppItemsListPorps} from './types'

export const AppItemList:React.FC<AppItemsListPorps> =({items})=>(
    <>
        {items.map((el,i)=><AppItem key={i} title={el.title}/>)}
    </>
);
