import CartWidget from "../CartWidget/CartWidget"
import {NavLink ,Link} from 'react-router-dom' 

const Nav = ( ) => {
     return (
        <nav className="nav">
            <div className="dropdown">
                <a className="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                   Categorias
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li className="dropdown-item"><NavLink to='/categoria/Remeras' className={({isActive}) => isActive ? 'unaClase' : 'otraClase'}> Remeras </NavLink> </li>
                    {/* <li className="dropdown-item"><NavLink to='/categoria/Pantalones' className={({isActive}) => isActive ? 'unaClase' : 'otraClase'}> Pantalones </NavLink></li> */}
                    <li className="dropdown-item"><NavLink to='/categoria/Zapatillas' className={({isActive}) => isActive ? 'unaClase' : 'otraClase'}> Zapatillas </NavLink></li>
                </ul>
            </div>
            <Link to='/carrito'>
                <a href="#" className="nav__link"><CartWidget/></a>
            </Link>
            
            <a href="#" className="nav__link">Login</a>  
            
        </nav>
    ) 
    
}

export default Nav