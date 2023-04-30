import { useContext, useEffect } from "react";
import CatalogView from "../layout/catalog-view";
import { HeaderContext } from "../utils/context";
import Hero from "../../assets/images/hero_image.png";
import SectionOneImage from "../../assets/images/benefits-image-1.png";
import SectionTwoImage from "../../assets/images/benefits-image-2.png";
//import PostImage1 from "../../assets/images/nordic.png";
//import PostImage2 from "../../assets/images/kruzo.png";
//import PostImage3 from "../../assets/images/ergonomic.png";
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
            <CatalogView className="products" id="catalogView"/>
            {/*
            <div className="benefits-one">
                <div className="benefits-one__image">
                    <img src={BeneFirst} alt=""/>
                </div>
                <div className="benefits-one__text">
                    <h2>blog Choose Us</h2>
                    <p>Recherche de produits, recherche de marchés inexploités, copywriting, boutique shopify, vidéos pour Facebook ads et Tiktok ads etc... Nous nous occupons de tout pour vous.
                    Notre objectif est de vous décharger de toutes ces tâches pour vous laisser vous occuper de l'essentiel et ainsi faire exploser votre business. </p>
                    <div className="four-benefits">
                        <div className="four-benefits__first">
                            <span className="bi bi-stopwatch"></span>
                            <h4>Fast & Free Shiping</h4>
                            <p>Recherche produits, recherche de marchés inexploités, copywriting, boutique shopify</p>
                        </div>
                        <div className="four-benefits__second">
                            <span className="bi bi-bag-fill"></span>
                            <h4>Easy to shop</h4>
                            <p>Recherche produits, recherche de marchés inexploités, copywriting, boutique shopify</p>
                        </div>
                        <div className="four-benefits__third">
                            <span className="bi bi-wechat"></span>
                            <h4>24/7 Support</h4>
                            <p>Recherche produits, recherche de marchés inexploités, copywriting, boutique shopify</p>
                        </div>
                        <div className="four-benefits__fourth">
                            <span className="bi bi-arrow-repeat"></span>
                            <h4>Hassle Free Returns</h4>
                            <p>Recherche produits, recherche de marchés inexploités, copywriting, boutique shopify</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog">
                <div className="blog__posts">
                    <div className="blog__post">
                        <div className="image">
                            <img src={PostImage1} alt=""/>
                        </div>
                        <div>
                        <h4>Nordic Chair</h4>
                        <p>Nous maîtrisons les meilleurs process et les meilleures stratégies des tops du domaine</p>
                            <Link to='/blog'>Read more</Link>
                        </div>
                    </div>
                    <div className="blog__post">
                    <div className="image">
                            <img src={PostImage2} alt=""/>
                        </div>
                        <div>
                            <h4>Kurozo Aero Chair</h4>
                        <p>Nous maîtrisons les meilleurs process et les meilleures stratégies des tops du domaine</p>
                            <Link to='/blog'>Read more</Link>
                        </div>
                    </div>
                    <div className="blog__post">
                    <div className="image">
                            <img src={PostImage3} alt=""/>
                        </div>
                        <div>
                        <h4>Ergonomic Chair</h4>
                        <p>Nous maîtrisons les meilleurs process et les meilleures stratégies des tops du domaine</p>
                            <Link to='/blog'>Read more</Link>
                        </div>
                    </div>
                </div>
            </div>*/}
        </HomeContainer>
    )
}

export default Home