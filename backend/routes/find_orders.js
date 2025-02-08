import express from 'express';
import cart_items from '../database/cart_items.js';

const find_orders = express();

find_orders.get('/find', async (req, res) => {
    const { user_id } = req.query;
    console.log("user_id:", user_id);
    try {
        const orders = await cart_items.find({ buyer_id: user_id, status: 1 });
        console.log("Orders found:", orders);
        res.status(200).json(orders);
    }
    catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

find_orders.get('/cancel', async (req, res) => {
    const { order_id } = req.query;
    console.log("order_id:", req.query);
    try {
        const order = await cart_items.deleteOne({ _id: order_id });
        console.log("Order cancelled:", order);
    }
    catch (error) {
        console.error("Error cancelling order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});



export default find_orders;