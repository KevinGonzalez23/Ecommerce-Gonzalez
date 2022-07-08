import { useState } from "react"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {
  
  return (
    <>

      {greeting} 
      <ItemList/>
    </>
  )
}

export default ItemListContainer

{/*  {count}  */}



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