import { useContext, useEffect } from "react";
import CatalogView from "../layout/catalog-view";
import { HeaderContext } from "../utils/context";
import Hero from "../../assets/images/hero_image.png";
import SectionOneImage from "../../assets/images/benefits-image-1.png";
import SectionTwoImage from "../../assets/images/benefits-image-2.png";
import PeopleIcon1 from "../../assets/images/people1.png";
import PeopleIcon2 from "../../assets/images/people2.png";
import { Link } from "react-router-dom";
import { HomeContainer } from "../styles/Home";


function Home() {
    const { setActivePage } = useContext(HeaderContext);
    useEffect(() => {
        setActivePage('home');
    }, [setActivePage]);
    return(
        <HomeContainer className="home">
            <div className="hero">
                <div className="hero__text">
                    <h1>Upgrade Your Skin Care Routine</h1>
                    <p className="subtitle">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    <div className="cta-row">
                        <Link to='#catalogView' className="cta-button">GET STARTED</Link>
                        <Link to='/catalog' className="cta-button view">ORDER NOW</Link>
                    </div>
                </div>
                <div className="hero__image">
                    <img src={Hero} alt=""/>
                </div>
            </div>
            <div className="section-one">
                <h2>INGREDIENTS</h2>
                <div className="section-one__part2">
                    <div className="section-one-2-part1">
                        <h4>Organic Cotton</h4>
                        <p>The PorchCam options to select programs for your PorchCam's behavior don't appear sometimes when you're coming from the recorded videos tab</p>
                        <h4>Hydrating Serum</h4>
                        <p>User reports that some of their video thumbnails rotated 90 degrees counter-clockwise, but the videos themselves are fine</p>
                    </div>
                    <div className="section-one-2-part2">
                        <img src={SectionOneImage} alt="" />
                    </div>
                    <div className="section-one-2-part3">
                        <h4>Carbon Active</h4>
                        <p>Past recorded videos have to sometimes be tapped twice to open on the Android app (though single-tap works most of the time)</p>
                        <h4>Oil Control Essence</h4>
                        <p>The PorchCam siren will sometimes go off for about 2-5 seconds when there isn't anything that's triggering the alarm (no motion detected, etc.)</p>
                    </div>
                </div>
                <div>
                    <h4>15 minutes a week, All your skin needs, Hydratation, Purity, Oil control.</h4>
                    <p>User is receiving duplicates for each alert message, ranging from 2-5 additional messages on top of the original (and correct) alert to both email and text</p>
                </div>
            </div>
            <div className="section-two">
                <div className="section-two__image">
                    <img src={SectionTwoImage} alt=""/>
                </div>
                <div className="section-two__text">
                    <h3>EARLY BIRDS : AN UNMISSABLE OFFER</h3>
                    <p>What do you want to do when you grow up?</p>
                    <Link to='/catalog' className="cta-button">ORDER NOW</Link>
                </div>
            </div>
            <CatalogView className="products" id="catalogView" />
            <div className="why">
                <h2>PEOPLE LOVE US</h2>
                <div className="why__elements">
                    <div className="why__element">
                        <img src={PeopleIcon1} alt=""/>
                        <h4>Nguyen, Shane</h4>
                        <span>Johnson & Johnson</span>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</p>
                    </div>
                    <div className="why__element">
                        <img src={PeopleIcon2} alt=""/>
                        <h4>Theresa Webb</h4>
                        <span>Louis Vuitton</span>
                        <p>Duis sit amet purus sed elit molestie accumsan a a enim. Maecenas vel rhoncus tortor, ac tristique nibh.</p>
                    </div>
                </div>
            </div>
        </HomeContainer>
    )
}

export default Home