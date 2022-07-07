import Nav from "./NavBar/NavBar"
import Logo from "./Logo/sabertooth.png"

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