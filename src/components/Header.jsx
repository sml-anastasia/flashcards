import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Header(props) {
    return(
        <header className="header">
            <nav className="header__nav">
                <li className="header__nav__link header__nav__logo">
                    <img src={logo} alt="logo" className="logo" />
                    <Link className="head-title" to="/main">flashcards</Link>
                </li>
                <li className="header__nav__link">
                    <Link className="header__nav__link" to="/main">main page</Link>
                </li>
                <li className="header__nav__link">
                    <Link className="header__nav__link" to="/cards">cards</Link>
                </li>
                <li className="header__nav__link">
                    <Link className="header__nav__link" to="/game">game</Link>
                </li>
            </nav>
        </header>
    );
}
export default Header;