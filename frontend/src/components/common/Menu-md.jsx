import { useContext } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../utils/context";

function MenuMd() {
    const {activePage} = useContext(HeaderContext);
    
    const handleMenuMd = () => {
        const menuHide = document.querySelector('.menu-md__hide');
        const menuIcon = document.querySelector('.menu-md__icon');
        
        menuHide.classList.toggle('show');
        menuIcon.classList.toggle('active');
    };

    const handleMenuMdLink = () => {
        const menuHide = document.querySelector('.menu-md__hide');
        const menuIcon = document.querySelector('.menu-md__icon');
        
        menuHide.classList.remove('show');
        menuIcon.classList.remove('active');
    };

    return (
        <div className="menu-md">
            <div className="menu-md__icon" onClick={handleMenuMd}>
                <div id="icon-bar-one"></div>
                <div id="icon-bar-two"></div>
                <div id="icon-bar-three"></div>
            </div>
            <div className="menu-md__hide">
                <nav>
                    <ul className="">
                        <li className={ activePage === "home" ? "active" : "" }><Link to="/" onClick={handleMenuMdLink}>Home</Link></li>
                        <li className={ activePage === "faq" ? "active" : "" }><Link to="/faq" onClick={handleMenuMdLink}>About us</Link></li>
                        <li className={ activePage === "catalog" ? "active" : "" }><Link to="/catalog" onClick={handleMenuMdLink}>Catalogue</Link></li>
                        <li className={ activePage === "blog" ? "active" : "" }><Link to="/blog" onClick={handleMenuMdLink}>Blog</Link></li>
                        <li className={ activePage === "contact" ? "active" : "" }><Link to="/contact" onClick={handleMenuMdLink}>Contact us</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

  
export default MenuMd;