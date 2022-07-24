import { useEffect, useState } from "react"
import { dataBase } from "../../helpers/dBase"
import { useParams } from 'react-router-dom'  
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState (true)
  const { categoriaId } = useParams()

  useEffect(() => {
    if (categoriaId) {
      dataBase//simular llamado una api, tambien cambia el estado de productos q empieza en vacio y termina con los productos
      .then(resp => setProductos(resp.filter( prod => prod.categoria === categoriaId)))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    } else {
      dataBase//simular llamado una api, tambien cambia el estado de productos q empieza en vacio y termina con los productos
      .then(resp => setProductos(resp))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }
  }, [categoriaId])

  //console.log(categoriaId)

  return (
    <section className="ItemListContainer">
      {loading ? <div id="loader-out">
                  <div id="loader-container">
                    <p id="loading-text">Cargando</p>
                  </div>
                </div> : 
                        <ItemList producto={productos}/> }
    </section>
  )
}

export default ItemListContainer

/*  {count}  */



/* <button onClick={aumentar} className= "material-icons">add</button> 
<button onClick={restar} className= "material-icons">remove</button> */
/*  const [count, setCount] = useState(0)
 const [tope, setTope] = useState(5)

//let count = 0;
console.log(count)
const aumentar = () => {
  /* count++
  console.log(count); 
  if (count < tope) {
    setCount(count + 1)
  }
}
const restar = () => {
  if (count > 0){
      setCount(count - 1)
  }
}  */