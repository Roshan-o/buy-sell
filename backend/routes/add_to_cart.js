import express from 'express';
import crypto from 'crypto';
import cart_items from '../database/cart_items.js';

const add_to_cart = express.Router();

add_to_cart.post('/', async (req, res) => {
    try {
        const { item_info, user_id } = req.body;
        let { itemname, itemprice, itemcategory, itemdescription, seller_id } = item_info;
        console.log("Item info:", item_info);
        console.log("User ID:", user_id);
        itemname = itemname.toLowerCase();

        // Generate a secure 6-digit OTP using crypto module
        const itemotp = crypto.randomInt(100000, 1000000);  

        const newitem = new cart_items({
            itemname,
            itemprice,
            itemcategory,
            itemdescription,
            seller_id,
            buyyer_id: user_id,
            status_item: 0,
            itemotp
        });

        await newitem.save();

        res.status(200).json({ message: "Success, Item added to cart" });
    } catch (err) {
        console.error("Error during adding item to cart:", err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

export default add_to_cart;
