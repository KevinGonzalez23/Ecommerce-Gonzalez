import { useEffect, useState } from "react"
import React from 'react'
import Producto from "../Item/Item"

const productosDeBaseDeDatos = [
    {
      id: 1,
      nombre: "Jordan 1 Blue",
      precio: 100
    },
    {
      id: 2,
      nombre: "Jordan 1 retro",
      precio: 200
    },
    {
      id: 3,
      nombre: "Yezzy Boost 350 v2",
      description: "",
      precio: 300
    }
  ]
function ItemList() {
    const [productos, setProductos] = useState([])
    
    setTimeout(() => {
        console.log("Recibo Productos!")
        //console.log(productosIniciales)
        setProductos(productosDeBaseDeDatos)
    }, 2000)
  return (
    <>
    <Producto/>
    <ul>
      {productos.map((producto)=>{
        //console.log(producto,indice)
        return <li key={producto.id} > {producto.nombre} ${producto.precio}</li>
      })}
    </ul>
    </>
  )
}

export default ItemList