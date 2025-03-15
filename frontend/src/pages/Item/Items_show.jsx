import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemLayout from "./Item_layout";
import Navbar from "../Home/Navbar";
import { useAppContext } from "../../MyContext";
import { useLocation } from "react-router-dom";
function ItemsShow() {
    const location = useLocation();
    const { search, category } = location.state;
    console.log("Search:", search, "Category:", category);


    const [items, setItems] = useState([]);
    
    const { info } = useAppContext();
    const userId = info.userId;
    useEffect(() => {
        setItems([]);
        const fetchItems = async () => {
            try {
                const response = await axios.get("http://localhost:8000/Home/items", {
                    params: {
                        search: search,
                        categories: category
                    },
                });
                console.log("Items found:", response.data);
                const filtered = response.data.filter((item) => item.seller_id !== userId);
                setItems(filtered);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };
        fetchItems();
    }, [search, category]);


    return (
        <>
            <Navbar />
            <div className="bg-gray-400 w-full h-screen flex flex-col items-center">
                <h1 className="text-4xl font-bold mt-4 mb-4">Items</h1>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                    {items.map((item, index) => (
                        <ItemLayout key={index} item_info={item} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ItemsShow;
