const express = require('express');
const orderCtrl = require('../controllers/order');
const router = express.Router();

router.post('/', orderCtrl.createNewOrder);
router.get('/:orderId', orderCtrl.getOrderDetails);
router.get('/user/:userId', orderCtrl.getOrdersOfUser);
router.get('/', orderCtrl.getAllOrders);
router.put('/:orderId', orderCtrl.updateOrder);
router.put('/status/:orderId', orderCtrl.updateOrderStatus);
router.put('/payment/status/:orderId', orderCtrl.updatePaymentStatus);
router.delete('/:orderId', orderCtrl.deleteOrder);
router.delete('/item/:orderItemId', orderCtrl.deleteOrderItem);

module.exports = router;