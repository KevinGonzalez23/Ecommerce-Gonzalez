import { useEffect, useState } from "react"
import React from 'react'
import Producto from "../Item/Item"


function ItemList({producto}) {
  
  return (
    <>
        { producto.map((prod)=>{
          //console.log(producto,indice)
          return <Producto  Items= {prod} key={prod.id} /> 
        })}
    </>
  )
}

export default ItemList