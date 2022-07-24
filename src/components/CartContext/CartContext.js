import React, { createContext, useState} from 'react'
import { dataBase }  from '../../helpers/dBase'

export const ItemsContext = createContext();

//state q le paso al useState
const initialState = dataBase;

export const ItemsProvider = ({ children}) => {
    const [items, setItems] = useState(initialState)

    return(
        <ItemsContext.Provider value={[items, setItems]}>
            { children }
        </ItemsContext.Provider>
    )
};