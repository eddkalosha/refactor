
import {HashString} from './types'
export const defaultHashLength = 10;
 const defaultCountItems = 20; 

export const generateHash = (hashLength = defaultHashLength):HashString=>{
    var result = '';
    const hashSymbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const hashSymbolsLen = hashSymbols.length;
    for (let i = 0; i < hashLength; i++) {
        result += hashSymbols.charAt(Math.floor(Math.random() * hashSymbolsLen));
    }
    return result;
}


export const getNewItems = ()=>[...Array(defaultCountItems)].map((_,id)=>({
    id,title:generateHash()
}));