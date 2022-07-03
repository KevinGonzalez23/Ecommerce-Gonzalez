import Nav from "./NavBar"
import Logo from "../Img/sabertooth.png"

const Header = () => {
   return (
      <header className="header">
         <div className="header__logo">
            <a href="#"><img src={Logo} /></a>
            <a href="#"><h1>Ice-Sabertooth</h1></a>
         </div>
         <Nav/>
      </header>
    )
}

export default Header