import Header from "./components/Header/Header"
import ItemDetail from "./components/ItemDetail/ItemDetail"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"


const App = () => {

  fetch('www.google.com')

    return (
      <>
        <Header/>
        <ItemListContainer/>
        <ItemDetail/>
      </>  
    )
  }

export default App