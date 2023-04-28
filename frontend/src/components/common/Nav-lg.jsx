import { Link } from "react-router-dom";
import { useContext } from "react";
import { HeaderContext } from "../utils/context";

function NavLg() {
    const {activePage} = useContext(HeaderContext);
    return (
        <div className="nav-lg">
            <nav>
                <ul className="">
                    <li className={ activePage === "home" ? "active" : "" }><Link to="/">Home</Link></li>
                    <li className={ activePage === "catalog" ? "active" : "" }><Link to="/catalog">Products</Link></li>
                    <li className={ activePage === "about" ? "active" : "" }><Link to="/faq">About</Link></li>
                    <li className={ activePage === "faq" ? "active" : "" }><Link to="/faq">FAQ</Link></li>
                    <li className={ activePage === "contact" ? "active" : "" }><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavLg;