import CartWidget from "./CartWidget"


const Nav = ( ) => {
     return (
        <nav className="nav">
            <div className="dropdown">
                <a className="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                   Categorias
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Remeras</a></li>
                    <li><a className="dropdown-item" href="#">Pantalones</a></li>
                    <li><a className="dropdown-item" href="#">Camperas</a></li>
                </ul>
            </div>
            <a href="#" className="nav__link"><CartWidget/></a>
            <a href="#" className="nav__link">Login</a>  
            
        </nav>
    ) 
    
}

export default Nav