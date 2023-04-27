import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContext } from "../utils/context";
import ThankYouPopup from "./Thank-you-contact";
import { ContactContainer } from "../styles/Contact";

function Contact() {
    const [showThankYouPopup, setShowThankYouPopup] = useState(false);
    const { setActivePage } = useContext(HeaderContext);
    const navigate = useNavigate();
    useEffect(() => {
        setActivePage("contact");
    }, [setActivePage]);
    
    async function handleSubmit(event) {
        event.preventDefault();
      
        const formData = new FormData(event.target);
        const searchParams = new URLSearchParams();
      
        for (const [key, value] of formData.entries()) {
          searchParams.append(key, value);
        }
      
        try {
            await fetch("http://localhost:3000/api/contact/comment/", {
                method: "POST",
                body: searchParams,
                headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            // Reset the form
            event.target.reset();
            
            //Redirect to the home page
            setShowThankYouPopup(true);
        } catch (error) {
            console.error("Error:", error);
        }
    }
    
    const handleCloseThankYouPopup = () => {
        setShowThankYouPopup(false);
        navigate('/contact');
      };

    return(
        <ContactContainer className="contact">
            <div className="pages-title">
                <h1>Contact us<span className="bi bi-chevron-double-right"></span></h1>
            </div>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <div><input type="text" name="name" id="name" placeholder="Name"/></div>
                    <div><input type="email" name="email" id="email" placeholder="Email"/></div>
                    <div><textarea name="comment" id="comment" rows="6" placeholder="Comment..."></textarea></div>
                    <div className="checkbox"><input type="checkbox" name="agree" id="agree"/><label for="">For the purpose of my personal request via the form, I agree that my data will be used to contact me. Your information will not be kept for commercial purposes.</label></div>
                    <div><input type="submit" value="Send"/></div>
                </form>
            </div>
            {showThankYouPopup && (
                <ThankYouPopup onClose={handleCloseThankYouPopup} />
            )}

        </ContactContainer>
    );
}

export default Contact;