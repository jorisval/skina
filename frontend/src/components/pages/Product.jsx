import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CatalogView from "../layout/catalog-view";
import { ProductContainer, SkeletonImage, SkeletonText, SkeletonOption, SkeletonQuantity, SkeletonProductBody } from "../styles/Product";
import { CartContext, HeaderContext } from "../utils/context";
import { useFetch } from "../utils/hooks";

function Product() {
    const { setActivePage } = useContext(HeaderContext);
    useEffect(() => {
        setActivePage("catalog");
    }, [setActivePage]);

    const { productId } = useParams();
    const { data, dataIsLoading } = useFetch(`http://localhost:3000/api/catalog/${productId}`);
    const { orderInfos, setOrderInfos, setOrderItem} = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const [activeOption, setActiveOption] = useState(null);
    const [showOptionWarning, setShowOptionWarning] = useState(false);

    useEffect(() => {
        if (data) {
            const addToCartButton = document.querySelector('.add-to-cart');
            if (data.options && data.options.lenght > 0) {
                if (addToCartButton && activeOption) {
                    addToCartButton.addEventListener('click', function (e) {
                    document.querySelector('.cart .background').style.display = 'block';
                    document.querySelector('.cart-content').classList.add('show');
                    });
                }
            }
            else if (addToCartButton) {
                addToCartButton.addEventListener('click', function (e) {
                document.querySelector('.cart .background').style.display = 'block';
                document.querySelector('.cart-content').classList.add('show');
                });
            }
        }
    }, [data, activeOption])
    
    const handleAddToCart = () => {
        if (data.options && data.options.lenght > 0 && !activeOption) {
            setShowOptionWarning(true);
            return;
        }
        setShowOptionWarning(false);

        const existingItemIndex = orderInfos.orderItems.findIndex(
            (item) => item.productId === data._id && item.option === activeOption
        );
        
        // If Item exist with a valid index ([0, +00[)
        if (existingItemIndex > -1) {
            setOrderInfos((prevOrderInfos) => {
                const updatedOrderItems = prevOrderInfos.orderItems.map((item, idx) => {
                    if (idx === existingItemIndex) {
                        return { ...item, quantity: item.quantity + quantity };
                    }
                    return item;
                });
    
                return {
                    ...prevOrderInfos,
                    orderItems: updatedOrderItems,
                };
            });
        } else {
            const updatedOrderItem = {
                productId: data._id,
                price: data.price,
                quantity: quantity,
                option: activeOption,
            };
            setOrderItem(updatedOrderItem);
    
            setOrderInfos((prevOrderInfos) => {
                return {
                    ...prevOrderInfos,
                    orderItems: [...prevOrderInfos.orderItems, updatedOrderItem],
                };
            });
        }
    };

    return(
        <ProductContainer>
            {
                dataIsLoading ? (
                    <>
                    <div className="product-hero">
                        <div className="product-hero__part-1">
                            <SkeletonImage />
                        </div>
                        <div className="product-hero__part-2">
                            <SkeletonText style={{ width: '50%', marginTop: '1rem' }} />
                            <SkeletonText style={{ width: '100%' }} />
                            <SkeletonText style={{ width: '100%' }} />
                            <SkeletonText style={{ width: '100%' }} />
                            <SkeletonText style={{ width: '100%', marginBottom: '1rem' }} />
                            <SkeletonQuantity>
                                <div />
                                <div />
                                <div />
                            </SkeletonQuantity>
                            <SkeletonOption style={{ width: '30%' }} />
                            <SkeletonOption style={{ width: '30%' }} />
                            <SkeletonOption style={{ width: '30%' }} />
                        </div>
                    </div>
                    </>
                ) : (
                    <div className="product-hero">
                        <div className="product-hero__part-1">
                            <img src={data.images && data.images.length > 0 && data.images[0]} alt=""/>
                        </div>
                        <div className="product-hero__part-2">
                            <div className="product-title">
                                <h2>{data.name}</h2>
                                <span>${data.price}</span>
                            </div>
                            { data.options && data.options.map((option, index) => {
                                return(
                                    <div className="option" key={index}>
                                        <p>
                                            {option.name} 
                                            {showOptionWarning && (
                                                <i
                                                    className="bi bi-exclamation-triangle"
                                                    style={{ color: "orange", marginLeft: "5px" }}
                                                ></i>
                                            )}
                                        </p>
                                        <div className="option__case">
                                            {option.values && option.values.map((value, index) => {
                                                return(
                                                    <div 
                                                    className={value === activeOption ? "active" : ""} 
                                                    key={index} 
                                                    onClick={() => {
                                                        setActiveOption(value);
                                                        setOrderItem({option: value, productId: data._id, price: data.price})
                                                    }}>{value}</div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            }) }
                            <div className="quantity">
                                <label  htmlFor="quantity">Quantity</label>
                                <button className="quantity__button-down" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                                <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
                                <button className="quantity__button-up" onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            <button className="add-to-cart" onClick={() => handleAddToCart()}>+ Add to cart</button>
                        </div>
                    </div>
                )
            }

            {
                dataIsLoading ? (
                    <div className="product-body">
                        <SkeletonProductBody>
                            <div style={{ width: '100%' }} />
                            <div style={{ width: '80%' }} />
                            <div style={{ width: '90%' }} />
                            <div style={{ width: '100%' }} />
                        </SkeletonProductBody>
                    </div>
                ) : (
                    <div className="product-body">
                        {data.description}
                    </div>
                )
            }
            <div className="product-catalog-view">
                <div className="solid"></div>
                <CatalogView />
            </div>
        </ProductContainer>
    );
}

export default Product;