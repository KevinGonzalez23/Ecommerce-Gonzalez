import React, { useEffect, useState } from 'react'
import { gFetchProductos } from "../../helpers/dBase"
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemList from '../ItemList/ItemList';



function ItemDetailContainer() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState (true)


 //Quise filtrar por id 
  /* useEffect(() => {
    gFetchProductos
      .then((resp) => {
        setProductos(resp.filter((item) => item.id === id));
      })
      .catch((rej) => console.log(rej))
      .finally(() => setLoading(false));
  }, []); */
  return (
    <>
      <ItemList Item= {productos}
    </>
  )
}

export default ItemDetailContainer