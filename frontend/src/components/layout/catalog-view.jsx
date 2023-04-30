import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../utils/hooks";
import { CatalogViewContainer, SkeletonLoader } from "../styles/Catalog-view";
import ProductSoon from "../../assets/images/product-1-5-1.png";
function CatalogView() {
    const { data, dataIsLoading } = useFetch('http://localhost:3000/api/catalog');
    const [catalogViewData, setCatalogViewData] = useState([]);


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
                    Array.from({ length : 3 }).map((_, i) => <SkeletonLoader key={i} />)
                    : (catalogViewData.map((product, index) => {
                        return(
                            <div className="service"
                                key={index}
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
                <div className="service">
                    <Link to={""}>
                        <div className="service__image">
                            <img src={ProductSoon} alt=""/>
                        </div>
                        <p>Coming Soon</p>
                    </Link>
                </div>
            </div>
        </CatalogViewContainer>
    );
}

export default CatalogView;
