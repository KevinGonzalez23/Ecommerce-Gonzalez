import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {
   
  let count = 0;

  const aumentar = () => {
    count++
    console.log(count);
  }

  return (
    <>
      {count}
      {/* {greeting} */}
      <ItemList/>
      <button onClick={aumentar}>aumentar</button>
    </>
  )
}

export default ItemListContainer



