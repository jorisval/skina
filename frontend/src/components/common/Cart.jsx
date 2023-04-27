import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../utils/context";
import { SkeletonImage, SkeletonQuantity, SkeletonText } from "../styles/Layouts";

function Cart() {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let productIds = [];
    const [subtotal, setSubtotal] = useState(0);
    const { orderInfos, setOrderInfos } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    if (orderInfos.orderItems) {
        orderInfos.orderItems.forEach((item) => {
        productIds.push(item.productId);
        });
    }

    useEffect(() => {
        let newSubtotal = 0;
        orderInfos.orderItems.forEach((item) => {
        newSubtotal = newSubtotal + item.price * item.quantity;
        });
        setSubtotal(newSubtotal);
        setOrderInfos(prevOrderInfos => {
            return {
                ...prevOrderInfos,
                totalAmount: newSubtotal,
            }
        })
    }, [orderInfos.orderItems, setOrderInfos]);

    useEffect(() => {
        if (productIds.length > 0) {
            setIsloading(true);
            const fetchProducts = async () => {
                const requests = productIds.map((id) =>
                fetch(`http://localhost:3000/api/catalog/${id}`).then((res) => res.json())
                );
                const products = await Promise.all(requests);
                setProducts(products);
                setIsloading(false);
            };
            fetchProducts();
        } else {
            setIsloading(false);
        }
        
        /* By using JSON.stringify(productIds) as the dependency, 
        the useEffect will only be triggered when the content of the productIds 
        array changes, not when a new array is created */
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(productIds)]);
    
    const handleCartContentCloseClick = () => {
        document.querySelector('.cart-content').classList.remove('show');
        document.querySelector('.cart .background').style.display = 'none';
    };
    
    const handleCartBackgroundClick = () => {
        document.querySelector('.cart-content').classList.remove('show');
        document.querySelector('.cart .background').style.display = 'none';
    };
    
    const handlePaymentButtonClick = () => {
        document.querySelector('.cart-content').classList.remove('show');
        document.querySelector('.cart .background').style.display = 'none';
    };    


    const downQuantity = (index) => {
        setOrderInfos(prevOrderInfos => {
            const updatedOrderItems = prevOrderInfos.orderItems.map((item, idx) => {
                if (idx === index) {
                    return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
                }
                return item;
            });
    
            return {
                ...prevOrderInfos,
                orderItems: updatedOrderItems
            };
        });
    };
    
    const upQuantity = (index) => {
        setOrderInfos(prevOrderInfos => {
            const updatedOrderItems = prevOrderInfos.orderItems.map((item, idx) => {
                if (idx === index) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
    
            return {
                ...prevOrderInfos,
                orderItems: updatedOrderItems
            };
        });
    };
    
    const setQuantity = (index, value) => {
        setOrderInfos(prevOrderInfos => {
            const updatedOrderItems = prevOrderInfos.orderItems.map((item, idx) => {
                if (idx === index) {
                    return { ...item, quantity: value };
                }
                return item;
            });
            return {
                ...prevOrderInfos,
                orderItems: updatedOrderItems
            };
        });
    };

    const removeItem = (index, option) => {
        setOrderInfos((prevOrderInfos) => {
            // Remove the cart item only if both the index and the option match.
            const updatedOrderItems = prevOrderInfos.orderItems.filter(
                (item, idx) => idx !== index && item.option !== option
            );
            return {
                ...prevOrderInfos,
                orderItems: updatedOrderItems,
            };
        });
    };
    
    const productList = isLoading ? (
        <div className="cart-content-product">
            <div className="cart-content-product__part1">
                <SkeletonImage />
            </div>
            <div className="cart-content-product__part2">
                <div className="cart-content-product__part2-title">
                    <SkeletonText style={{width: '60%'}} />
                    <SkeletonText style={{width: '5%'}}/>
                </div>
                <div className="cart-content-product__part2-option">
                    <SkeletonText style={{width: '20%'}}/>
                </div>
                <div className="cart-content-product__part2-quantity">
                    <div className="quantity">
                        <SkeletonQuantity>
                            <div />
                            <div />
                            <div />
                        </SkeletonQuantity>
                    </div>
                    <SkeletonText style={{width: '10%'}}/>
                </div>
            </div>
        </div>
    ) : (
        products.map((item, index) => {
            const itemIndex = orderInfos.orderItems.findIndex(
                (product) => product.productId === item._id && product.option === (orderInfos.orderItems[index]?.option || null)
            );
            // Do not render the item if it doesn't exist in orderInfos.orderItems
            if (itemIndex === -1) {
                console.log("Do not render the item if it doesn't exist in orderInfos.orderItems");
                console.log(itemIndex);
                return null;
            }
            // Check if the option matches
            const optionMatches = orderInfos.orderItems[itemIndex].option === orderInfos.orderItems[index].option;
            if (!optionMatches) {
                console.log("Check if the option matches");
                return null;
            }
            // Calculate the total price for each product in the cart
            const totalPrice = item.price * orderInfos.orderItems[itemIndex].quantity;

            return(
                <div className="cart-content-product" key={index}>
                    <div className="cart-content-product__part1">
                        <img src={item.images[0]} alt="" />
                    </div>
                    <div className="cart-content-product__part2">
                        <div className="cart-content-product__part2-title">
                            <span>{item.name}</span>
                            <span className="bi bi-x" onClick={() => removeItem(itemIndex, orderInfos.orderItems[index].option)}></span>
                        </div>
                        {orderInfos.orderItems[itemIndex].option && (
                            <div className="cart-content-product__part2-option">
                                <span>{orderInfos.orderItems[itemIndex].option}</span>
                            </div>
                        )}
                        <div className="cart-content-product__part2-quantity">
                            <div className="quantity">
                                <button className="quantity__button-down" onClick={() => downQuantity(itemIndex)}>-</button>
                                <input type="number" id="quantity" value={orderInfos.orderItems[itemIndex].quantity} onChange={(e) => setQuantity(itemIndex, Number(e.target.value))} />
                                <button className="quantity__button-up" onClick={() => upQuantity(itemIndex)}>+</button>
                            </div>
                            <div className="price">${totalPrice}</div>
                        </div>
                    </div>
                </div>
            )
        })
    );

    return (
        <div className="cart">
            <div className="background" onClick={handleCartBackgroundClick}></div>
            <div className="cart-content">
                <div className="cart-content__header">
                    <span>Cart</span>
                    <span className="bi bi-x" onClick={handleCartContentCloseClick}></span>
                </div>
                {productList}
                {productIds.length > 0 && (
                    <>
                        <div className="cart-content-subtotal">
                            <span>Subtotal</span>
                            {isLoading ? 
                                <SkeletonText style={{width: '10%'}}/> : 
                                <span className="price">${subtotal}</span>
                            }
                        </div>
                        <div className="cart-content-payment">
                            <Link to='/checkout' className="payment-button" onClick={handlePaymentButtonClick}><span className="bi bi-credit-card"></span>Secure payment</Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;