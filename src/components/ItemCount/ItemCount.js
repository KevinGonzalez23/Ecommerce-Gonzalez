import { useState } from "react"

export const ItemCount = ({stock, onAdd, initial}) => {
    const [count, setCount] = useState(initial);




    return(
        <>
            <span> - </span>
            <span> {count} </span>  
            <span> + </span>
            <button> Agregar Al Carrito</button>
        </>

    )
}