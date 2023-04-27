const Order = require('../models/Order');
const OrderItem = require('../models/Order-item');
const Payment = require('../models/Payment');
const User = require('../models/User');

/*
//Create a new order and his user, order items and payment
exports.createOrder = (req, res, next) => {
    const {
        email,
        name,
        totalAmount,
        orderStatus,
        shippingAddress,
        billingAddress,
        paymentMethod,
        paymentStatus,
        paymentAmount,
        orderItems,
    } = req.body;

    const user = new User({
        email,
        name,
        billingAddress: {
        street: billingAddress.street,
        city: billingAddress.city,
        state: billingAddress.state,
        country: billingAddress.country,
        zipCode: billingAddress.zipCode,
        },
        shippingAddress: {
        street: shippingAddress.street,
        city: shippingAddress.city,
        state: shippingAddress.state,
        country: shippingAddress.country,
        zipCode: shippingAddress.zipCode,
        },
    });

    user.save()
    .then(user => {
    const order = new Order({
        customer: user._id,
        totalAmount,
        orderStatus,
        paymentMethod,
        paymentStatus,
        shippingAddress: {
        street: shippingAddress.street,
        city: shippingAddress.city,
        state: shippingAddress.state,
        country: shippingAddress.country,
        zipCode: shippingAddress.zipCode,
        },
    });

    order.save()
        .then(order => {
            const orderItemPromises = orderItems.map(orderItem => {
                const orderItemModel = new OrderItem({
                    order: order._id,
                    product: orderItem.productId,
                    price: orderItem.price,
                    quantity: orderItem.quantity,
                });
                return orderItemModel.save();
            });

            const payment = new Payment({
                order: order._id,
                paymentMethod,
                paymentAmount,
                paymentStatus,
            });

            Promise.all([payment.save(), ...orderItemPromises])
            .then(() => res.status(200).json({ message: 'User, order, order items, and payment saved!' }))
            .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(400).json({ error }));
};*/

//Create a new order and his user, order items and payment
exports.createNewOrder = (req, res, next) => {
    const {
        email,
        name,
        totalAmount,
        orderStatus,
        shippingAddress,
        billingAddress,
        paymentMethod,
        paymentStatus,
        paymentAmount,
        orderItems,
    } = req.body;
    
    User.findOne({ email })
    .then(user => {
        if (user) {
            // If user already exists, add order to their orders array
            const order = new Order({
                customer: user._id,
                totalAmount,
                orderStatus,
                paymentMethod,
                paymentStatus,
                shippingAddress: {
                    street: shippingAddress.street,
                    city: shippingAddress.city,
                    state: shippingAddress.state,
                    country: shippingAddress.country,
                    zipCode: shippingAddress.zipCode,
                },
            });

            order.save()
                .then(order => {
                    const orderItemPromises = orderItems.map(orderItem => {
                        const orderItemModel = new OrderItem({
                            order: order._id,
                            product: orderItem.productId,
                            option: orderItem.option,
                            price: orderItem.price,
                            quantity: orderItem.quantity,
                        });
                        return orderItemModel.save();
                    });

                    const payment = new Payment({
                        order: order._id,
                        paymentMethod,
                        paymentAmount,
                        paymentStatus,
                    });

                    Promise.all([payment.save(), ...orderItemPromises])
                        .then((results) => {
                            const orderItemsIds = results.slice(1).map((result) => result._id);
                            order.orderItems = orderItemsIds;
                            order.save()
                            .then(() => {
                                user.orders.push(order._id);
                                user.save()
                                .then(() => {
                                    res.status(200).json(order);
                                })
                                .catch(error => {
                                    console.error("Error during processing in if, user saving:", error);
                                    res.status(400).json({ error });
                                });
                            })
                            .catch(error => {
                                console.error("Error during processing in if, orderItemsIds saving:", error);
                                res.status(400).json({ error });
                            });
                        })
                        .catch(error => {
                            console.error("Error during processing in if, after Promise.all:", error);
                            res.status(400).json({ error });
                        });
                })
                .catch(error => {
                    console.error("Error during processing in if, order infos saving:", error);
                    res.status(400).json({ error });
                });
        } else {
            // If user does not exist, create new user and add order to their orders array
            const newUser = new User({
                email,
                name,
                billingAddress: {
                    street: billingAddress.street,
                    city: billingAddress.city,
                    state: billingAddress.state,
                    country: billingAddress.country,
                    zipCode: billingAddress.zipCode,
                },
                shippingAddress: {
                    street: shippingAddress.street,
                    city: shippingAddress.city,
                    state: shippingAddress.state,
                    country: shippingAddress.country,
                    zipCode: shippingAddress.zipCode,
                },
                orders: []
            });

            newUser.save()
            .then(newUser => {
                const order = new Order({
                    customer: newUser._id,
                    totalAmount,
                    orderStatus,
                    paymentMethod,
                    paymentStatus,
                    shippingAddress: {
                        street: shippingAddress.street,
                        city: shippingAddress.city,
                        state: shippingAddress.state,
                        country: shippingAddress.country,
                        zipCode: shippingAddress.zipCode,
                    },
                });

                order.save()
                    .then(order => {
                        const orderItemPromises = orderItems.map(orderItem => {
                            const orderItemModel = new OrderItem({
                                order: order._id,
                                product: orderItem.productId,
                                option: orderItem.option,
                                price: orderItem.price,
                                quantity: orderItem.quantity,
                            });
                            return orderItemModel.save();
                        });

                        const payment = new Payment({
                            order: order._id,
                            paymentMethod,
                            paymentAmount,
                            paymentStatus,
                        });

                        Promise.all([payment.save(), ...orderItemPromises])
                            .then((results) => {
                                const orderItemsIds = results.slice(1).map((result) => result._id);
                                order.orderItems = orderItemsIds;
                                order.save()
                                .then(() => {
                                    newUser.orders.push(order._id);
                                    newUser.save()
                                    .then(() => {
                                        res.status(200).json(order);
                                    })
                                    .catch(error => {
                                        console.error("Error during processing in else, user saving:", error);
                                        res.status(400).json({ error });
                                    });
                                })
                                .catch(error => {
                                    console.error("Error during processing in else, orderItemsIds saving:", error);
                                    res.status(400).json({ error });
                                });
                            })
                            .catch(error => {
                                console.error("Error during processing in else, after Promise.all:", error);
                                res.status(400).json({ error });
                            });
                    })
                    .catch(error => {
                        console.error("Error during processing in else, order infos saving:", error);
                        res.status(400).json({ error });
                    });
            })
            .catch(error => {
                res.status(400).json({ error });
            });
        }
    })
    .catch(error => {
        res.status(400).json({ error });
    });
}

//Get all orders in the database
exports.getAllOrders = (req, res) => {
    Order.find()
    .populate('customer')
    .populate({
        path: 'orderItems',
        populate: {
        path: 'product',
        model: 'Product'
        }
    })
    .populate('payment')
    .then(orders => res.status(200).json(orders))
    .catch(error => res.status(400).json(error));
};

//Get a single order with all details
exports.getOrderDetails = (req, res) => {
    const orderId = req.params.orderId;
  
    Order.findById(orderId)
    .populate('customer', 'email name shippingAddress')
    .populate({
    path: 'orderItems',
    populate: {
        path: 'product',
        select: 'name price'
    }
    })
    .populate({
    path: 'payment',
    select: 'paymentMethod paymentAmount paymentStatus -order'
    })
    .then(order => {
    if (!order) {
        return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json(order);
    })
    .catch(error => res.status(400).json({ error }));
};

//Update an existing order
exports.updateOrder = (req, res) => {
    const { totalAmount, orderStatus, shippingAddress, paymentMethod, paymentStatus } = req.body;
    const orderId = req.params.orderId;
  
    Order.findById(orderId)
    .then(order => {
    if (!order) {
        return res.status(404).json({ error: 'Order not found' });
    }

    order.totalAmount = totalAmount;
    order.orderStatus = orderStatus;
    order.shippingAddress = shippingAddress;
    order.paymentMethod = paymentMethod;
    order.paymentStatus = paymentStatus;
    order.updatedAt = Date.now();

    order.save()
        .then(() => res.status(200).json({ message: 'Order updated', order }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(400).json({ error }));
};

//Delete an order item
exports.deleteOrderItem = (req, res) => {
  OrderItem.deleteOne({ _id: req.params.orderItemId })
    .then(() => res.status(200).json({ message: 'Order item deleted!' }))
    .catch(error => res.status(400).json({ error }));
};

//Get all orders of a user
exports.getOrdersOfUser = (req, res) => {
    const userId = req.params.userId;
  
    Order.find({ customer: userId })
    .populate('orderItems')
    .populate({
    path: 'payment',
    select: 'paymentMethod paymentAmount paymentStatus -order'
    })
    .sort('-createdAt')
    .then(orders => res.status(200).json(orders))
    .catch(error => res.status(400).json({ error }));
};

//Update the status of an order
exports.updateOrderStatus = (req, res) => {
    const orderId = req.params.orderId;
    const orderStatus = req.body.orderStatus;
  
    Order.findById(orderId)
    .then(order => {
    if (!order) {
        return res.status(404).json({ error: 'Order not found' });
    }
    order.orderStatus = orderStatus;
    order.updatedAt = Date.now();
    order.save()
        .then(() => res.status(200).json({ message: 'Order status updated successfully' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(400).json({ error }));
};

exports.updatePaymentStatus = (req, res) => {
    const orderId = req.params.orderId;
    const paymentStatus = req.body.paymentStatus;
  
    Order.findById(orderId)
    .then(order => {
    if (!order) {
        return res.status(404).json({ error: 'Order not found' });
    }
    order.paymentStatus = paymentStatus;
    order.updatedAt = Date.now();
    order.save()
        .then(() => {
            Payment.findOne({ orderId })
            .then(payment => {
                payment.paymentStatus = paymentStatus;
                payment.updatedAt = Date.now();
                payment.save()
                .then(() => res.status(200).json({ message: 'Payment status updated successfully' }))
                .catch(error => res.status(400).json({ error }));
            })
            .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(400).json({ error }));
};

// Delete an order and its associated data
exports.deleteOrder = (req, res, next) => {
    const orderId = req.params.orderId;

    // Find the order and its associated data
    Order.findById(orderId)
    .populate('customer')
    .populate({
      path: 'orderItems',
      populate: {
        path: 'product',
        model: 'Product'
      }
    })
    .then(order => {
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        // Delete the order items
        const orderItemPromises = order.orderItems.map(orderItem => {
            return OrderItem.deleteOne({ _id: orderItem._id });
        });

        // Delete the payment
        const paymentPromise = Payment.deleteOne({ _id: order.payment });

        // Delete the user if no other orders are associated with it
        User.findById(order.customer._id)
        .populate('orders')
        .then(user => {
            if (user.orders.length === 1) {
                User.deleteOne({ _id: user._id })
                .then(() => {
                    // Delete the order and its associated data
                    Promise.all([...orderItemPromises, paymentPromise, order.deleteOne()])
                    .then(() => res.status(200).json({ message: 'Order and associated data deleted' }))
                    .catch(error => res.status(400).json({ error }));
                })
                .catch(error => res.status(400).json({ error }));
          } else {
            // Delete the order and its associated data
            Promise.all([...orderItemPromises, paymentPromise, order.deleteOne()])
            .then(() => res.status(200).json({ message: 'Order and associated data deleted' }))
            .catch(error => res.status(400).json({ error }));
          }
        })
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(400).json({ error }));
};
