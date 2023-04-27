import { useState } from "react";
import Logo from "../../assets/images/logo-colored.png";
import ThankYouPopup from "../pages/Thank-you-newsletter";

function Footer() {
    const [showThankYouPopup, setShowThankYouPopup] = useState(false);
    async function handleSubmit(event) {
        event.preventDefault();
      
        const formData = new FormData(event.target);
        const searchParams = new URLSearchParams();
      
        for (const [key, value] of formData.entries()) {
          searchParams.append(key, value);
        }
    
        try {
            const response = await fetch("http://localhost:3000/api/newsletter", {
                method: "POST",
                body: searchParams,
                headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                },
            });
      
            const data = await response.json();
            console.log(data);

            // Reset the form
            event.target.reset();

            // Show thank you popup
            setShowThankYouPopup(true);

        } catch (error) {
            console.error("Error:", error);
        }
    }

    const handleCloseThankYouPopup = () => {
        setShowThankYouPopup(false);
      };

    return (
        <div className="footer">
            {showThankYouPopup && (
                <ThankYouPopup onClose={handleCloseThankYouPopup} />
            )}
            <div className="footer__part-1">
                <div className="media">
                    <img src={Logo} alt=""/>
                    <ul>
                        <li><a href="#b"><i className="bi bi-instagram"></i> Instagram</a></li>
                        <li><a href="#b"><i className="bi bi-whatsapp"></i> Whatsapp</a></li>
                    </ul>
                </div>
                <div className="support">
                    <h3>Contact & Support</h3>
                    <ul>
                        <li><a href="#b"><i className="bi"></i>+33 7 80 70 82 87</a></li>
                        <li><a href="#b"><i className="bi"></i>info@homi.com</a></li>
                        <li><a href="#b"><i className="bi"></i>Lun-Ven 9H00-18H00</a></li>
                    </ul>
                </div>
                <div className="legal">
                    <h3>Legal information</h3>
                    <ul>
                        <li><a href="#b"><i className="bi"></i>General Sales Conditions</a></li>
                        <li><a href="#b"><i className="bi"></i>Privacy Policy</a></li>
                        <li><a href="#b"><i className="bi"></i>Return & Fund Policy</a></li>
                    </ul>
                </div>
                <div className="newsletter">
                    <h3>Newsleter</h3>
                    <p>Subscribe to our newsletter and receive your welcome offer !</p>
                    <form onSubmit={handleSubmit}>
                        <input type="email" id="email" name="email" placeholder="Email"/>
                        <input type="submit" value="Sign up"/>
                    </form>
                </div>
            </div>
            <div className="footer__part-2">
                <p>© 2023 Homi | All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;