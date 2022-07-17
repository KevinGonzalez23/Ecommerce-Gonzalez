import Cart from "./components/cart/Cart.js"
import Header from "./components/Header/Header"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"


const App = () => {


    return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index path = '/' element={<ItemListContainer/>}/>
          <Route path = '/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path = '/detalle/:id' element={<ItemDetailContainer/>}/>
          <Route path = '/carrito' element={<Cart/>}/> 

          <Route path='*' element={ <Navigate to= '/' />}/>         
        </Routes>
      </BrowserRouter>  
    )
  }

export default App