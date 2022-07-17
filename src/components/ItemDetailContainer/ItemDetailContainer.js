import React, { useEffect ,useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { dataBase } from '../../helpers/dBase'


function ItemDetailContainer() {
  const [productoDetail, setProductosDetail] = useState([])
  const [loading, setLoading] = useState (true)
  const { id } = useParams();
  

  useEffect(() => {
    if (id) {
      dataBase//simular llamado una api, tambien cambia el estado de productos q empieza en vacio y termina con los productos
      .then(resp => setProductosDetail(resp.find( prod => prod.id === Number(id))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    } else {
      dataBase//simular llamado una api, tambien cambia el estado de productos q empieza en vacio y termina con los productos
      .then(resp => setProductosDetail(resp))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }
  }, [id])
  
  /* products.find((product) => product.id === id) */

  return (
    <>
      {loading ? <div id="loader-out">
                  <div id="loader-container">
                    <p id="loading-text">Cargando</p>
                  </div>
                </div> : 
                        <ItemDetail Item={productoDetail}/> }
    </>
  )
}


export default ItemDetailContainer