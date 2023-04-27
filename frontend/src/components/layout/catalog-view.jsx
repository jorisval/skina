import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../utils/hooks";
import { CatalogViewContainer, SkeletonLoader } from "../styles/Catalog-view";
function CatalogView() {
    const { data, dataIsLoading } = useFetch('http://localhost:3000/api/catalog');
    const [catalogViewData, setCatalogViewData] = useState([]);
    const [activeProduct, setActiveProduct] = useState(0);

    useEffect(() => {
        if (data && Array.isArray(data) && data.length > 0) {
        setCatalogViewData(data.slice(0, 3));
        }
    }, [data]);

    const handleMouseEnter = (index) => {
        setActiveProduct(index);
    };

    return (
        <CatalogViewContainer className="services-section">
                <div className="services">
                    <div className="presentation">
                    <h2>Crafted with excellent material.</h2>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link to='/catalog' className="cta-button">Explore</Link>
                </div>
                { dataIsLoading ? 
                    Array.from({ length : 3 }).map((_, i) => <SkeletonLoader key={i} />)
                    : (catalogViewData.map((product, index) => {
                        return(
                            <div className="service" 
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            >
                                <Link to={`/product/${product._id}`}>
                                    <div className="service__content">
                                        <img src={product.images[0]} alt=""/>
                                        <p>{product.name}</p>
                                        <span>${product.price}</span>
                                    </div>
                                    <div className={`service__background ${
                                        activeProduct === index ? "active" : ""
                                    }`}>
                                        <span className="add-product">+</span>
                                    </div>
                                </Link>
                            </div>
                        )
                    }))
                }
            </div>
        </CatalogViewContainer>
    );
}

export default CatalogView;
