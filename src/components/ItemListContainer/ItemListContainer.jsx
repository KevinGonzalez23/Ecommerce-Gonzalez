import { useEffect, useState } from "react"
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
    precio: 300
    

  }
]

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  setTimeout(() => {
      
    console.log("Recibo Productos!")
    //console.log(productosIniciales)
    setProductos(productosDeBaseDeDatos)
  }, 2000)

  const onAdd = () => {
      
  }
  return (
    <>
      <Producto/>
      <ul>
        {productos.map((producto)=>{
          //console.log(producto,indice)
          return <li key={producto.id} > {producto.img} {producto.nombre} ${producto.precio}</li>
        })}
      </ul>
    </>
  )
}

export default ItemListContainer



