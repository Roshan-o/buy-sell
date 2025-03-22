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

find_orders.delete('/cancel', async (req, res) => {
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


find_orders.get('/delivary', async (req, res) => {
    const { user_id } = req.query;
    // console.log("user_id:", user_id);
    console.log("user_id:", user_id);
    try {
        const orders = await cart_items.find({ seller_id: user_id, status: 1 });
        console.log("Orders found:", orders);
        res.status(200).json(orders);
    }
    catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

find_orders.get('/delivary_confirm', async (req, res) => {
    const { item_id, otp } = req.query;
    console.log("item_id:", item_id);
    const cart_item = await cart_items.findOne({ _id: item_id });
    if (cart_item) {
        console.log("cart_item:", cart_item.itemotp, "otp:",otp);
        try {
            if (cart_item.itemotp == otp) {
                await cart_items.updateOne({ _id: item_id }, { $set: { status: 2 } });
                console.log("item delivaried");
                res.status(200).json("delivered");
            }
            else {
                res.status(400).json({ message: "Invalid otp" });
            }
        }
        catch (error) {
            console.error("Error purchasing item:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
    else {
        console.log("delivary not completed");
    }
});


// find_orders.delete('/delevary_cancel',async(req,res)=>{
//     const item_id=req.query;


// })


export default find_orders;