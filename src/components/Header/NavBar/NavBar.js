import { useContext } from "react"
import React from 'react'
import CartWidget from "../CartWidget/CartWidget"
import {NavLink ,Link} from 'react-router-dom' 
import { ItemsContext } from "../../CartContext/CartContext"


const Nav = ( ) => {
    const [items] = useContext(ItemsContext);
    console.log(items)
     return (
        <nav className="nav">
            <div className="dropdown">
                <a className="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                   Categorias
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li className="dropdown-item"><NavLink to='/categoria/Remeras'> Remeras </NavLink> </li>
                    {/* <li className="dropdown-item"><NavLink to='/categoria/Pantalones' className={({isActive}) => isActive ? 'unaClase' : 'otraClase'}> Pantalones </NavLink></li> */}
                    <li className="dropdown-item"><NavLink to='/categoria/Zapatillas' > Zapatillas </NavLink></li>
                </ul>
            </div>
            <Link to='/carrito'>
                <a href="#" className="nav__link"><CartWidget/></a>
            </Link>
            <label> productos: { items.length }  </label>
            <a href="#" className="nav__link">Login</a>  
            
        </nav>
    ) 
    
}

export default Nav