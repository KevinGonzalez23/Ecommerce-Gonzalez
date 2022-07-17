import Nav from "./NavBar/NavBar"
import Logo from "./Logo/sabertooth.png"
import './header.css'
import {NavLink} from 'react-router-dom'

const Header = () => {
   return (
      <header className="header">
         <NavLink to='/'>
            <div className="header__logo">
               <a href="#"><img src={Logo} /></a>
               <a href="#"><h1>Ice-Sabertooth</h1></a>
            </div>
         </NavLink>
         <Nav/>
      </header>
    )
}

export default Header