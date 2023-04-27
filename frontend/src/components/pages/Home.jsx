import { useContext, useEffect } from "react";
import CatalogView from "../layout/catalog-view";
import { HeaderContext } from "../utils/context";
import Hero from "../../assets/images/hero_image.png";
import BeneFirst from "../../assets/images/benefits1-large.png";
import BeneSecond from "../../assets/images/benefits2-large.png";
import PostImage1 from "../../assets/images/nordic.png";
import PostImage2 from "../../assets/images/kruzo.png";
import PostImage3 from "../../assets/images/ergonomic.png";
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
                    <h1>Modern Interior Design Studio</h1>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="cta-row">
                        <Link to='#catalogView' className="cta-button view">Shop Now</Link>
                        <Link to='/catalog' className="cta-button">Explore</Link>
                    </div>
                </div>
                <div className="hero__image">
                    <img src={Hero} alt=""/>
                </div>
            </div>
            <CatalogView id="catalogView"/>
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
            <div className="benefits-two">
                <div className="benefits-two__image">
                    <img src={BeneSecond} alt=""/>
                </div>
                <div className="benefits-two__text">
                    <h2>We Help You Make Modern Interior Design</h2>
                    <p>Recherche de produits, recherche de marchés inexploités, copywriting, boutique shopify, 
                        vidéos pour Facebook ads et Tiktok ads etc... Nous nous occupons de tout pour vous.</p>
                    <div className="four-benefits">
                        <div className="four-benefits__first">
                            <span className="bi bi-check2-circle"></span>
                            <p>Recherche produits, recherche de marchés</p>
                        </div>
                        <div className="four-benefits__second">
                            <span className="bi bi-check2-circle"></span>
                            <p>Recherche produits, recherche de marchés</p>
                        </div>
                        <div className="four-benefits__third">
                            <span className="bi bi-check2-circle"></span>
                            <p>Recherche produits, recherche de marchés</p>
                        </div>
                        <div className="four-benefits__fourth">
                            <span className="bi bi-check2-circle"></span>
                            <p>Recherche produits, recherche de marchés</p>
                        </div>
                    </div>
                    <Link to='/catalog' className="cta-button">Explore</Link>
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
            </div>
        </HomeContainer>
    )
}

export default Home