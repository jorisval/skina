import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../utils/hooks";
import { CatalogViewContainer, SkeletonLoader } from "../styles/Catalog-view";
import ProductSoon from "../../assets/images/product-1-5-1.png";
function CatalogView() {
    const { data, dataIsLoading } = useFetch('http://localhost:3000/api/catalog');
    const [catalogViewData, setCatalogViewData] = useState([]);
    const [activeProduct, setActiveProduct] = useState(0);

    const handleMouseEnter = (index) => {
        setActiveProduct(index);
    };

    const handleMouseLeave = () => {
        setActiveProduct(-1);
    };


    useEffect(() => {
        if (data && Array.isArray(data) && data.length > 0) {
        setCatalogViewData(data.slice(0, 3));
        }
    }, [data]);

    return (
        <CatalogViewContainer className="services-section">
            <h2>PRODUCTS</h2>
            <div className="services">
                { dataIsLoading ? 
                    Array.from({ length : 2 }).map((_, i) => <SkeletonLoader key={i} />)
                    : (catalogViewData.map((product, index) => {
                        return(
                            <div className="service"
                                key={index}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link to={`/product/${product._id}`}>
                                    <div className="service__image">
                                        <img src={product.images.length > 2 ? product.images[1] : product.images[0]} alt=""/>
                                    </div>
                                    <p>{product.name}</p>
                                </Link>
                            </div>
                        )
                    }))
                }
                <div className="service"
                    onMouseEnter={() => handleMouseEnter("soon")}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="service__image">
                        <img src={ProductSoon} alt=""/>
                    </div>
                    <p>Coming Soon</p>
                </div>
            </div>
            <div className="product-selected-circles">
                {data && Array.isArray(data) && data.map(( _, index) => {
                    console.log('Product selected circles:', data && Array.isArray(data) && data.length);
                    return(
                        <div className={activeProduct === index ? "product-selected-circle active" : "product-selected-circle"}
                            key={index}
                        >
                        </div>
                    )
                })}
                <div 
                className={activeProduct === "soon" ? "product-selected-circle active" : "product-selected-circle"}
                >
                </div>
            </div>
        </CatalogViewContainer>
    );
}

export default CatalogView;
