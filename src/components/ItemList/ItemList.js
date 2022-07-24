import { useEffect, useState, useContext } from "react"
import React from 'react'
import Item from "../Item/Item"
import {ItemsContext} from '../CartContext/CartContext'

function ItemList({producto}) {
  
  const [items, setItems] = useContext(ItemsContext)

  console.log(items)
  return (
    <>
        { producto.map((prod)=>{
          //console.log(producto,indice)
          return <Item  Items= {prod} key={prod.id} /> 
        })}
    </>
  )
}

export default ItemList