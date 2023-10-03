import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../utils/context";
import { useFetch } from "../utils/hooks";
import { CatalogContainer, SkeletonLoader } from "../styles/Catalog";
import ProductSoon from "../../assets/images/product-1-5-1.png";
import { BASE_URL } from '../../config';

function Catalog() {
    const { setActivePage } = useContext(HeaderContext);
    const [activeProduct, setActiveProduct] = useState(0);

    const handleMouseEnter = (index) => {
        setActiveProduct(index);
    };

    const handleMouseLeave = () => {
        setActiveProduct(-1);
    };

    useEffect(() => {
        setActivePage("catalog");
    }, [setActivePage]);
    const { data, dataIsLoading } = useFetch(`${BASE_URL}/api/catalog`);

    /*const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(12);
    const indexOfLastProduct = currentPage * perPage;
    const indexOfFirstProduct = indexOfLastProduct - perPage;
    const currentProducts = data?.slice(indexOfFirstProduct, indexOfLastProduct);
    const pageNumber = [];

    for(let i=1; i <= Math.ceil(data?.length / perPage); i++) {
        pageNumber.push(i);
    }

    const handleClick = (event) => {
        setCurrentPage(event.target.id)
    }*/

    return(
        <CatalogContainer className="catalog">
            <div className="pages-title">
                <h1>Catalog<span className="bi bi-chevron-double-right"></span></h1>
            </div>
        <div className="services-section catalog-services">
            <div className="services">
                { dataIsLoading ? 
                    Array.from({ length : 2 }).map((_, i) => <SkeletonLoader key={i} />)
                    : (data && Array.isArray(data) && data.map((product, index) => {
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
        </div>
        </CatalogContainer>
    );
}

export default Catalog;