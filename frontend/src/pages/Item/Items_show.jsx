import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemLayout from "./item_layout";

function ItemsShow() {
    const { search: paramSearch, category: paramCategory } = useParams();
    const [items, setItems] = useState([]);

    // Swap search and category (avoiding direct reassignment)
    const search = paramCategory;
    const category = paramSearch;

    useEffect(() => {
        const fetchItems = async () => {
            try {
                let url = "http://localhost:8000/Home";

                if (category && search) {
                    url = `${url}/${category}/${search}`;
                } else if (search) {
                    url = `${url}/${search}`;
                } else if (category) {
                    url = `${url}/${category}`;
                } else {
                    console.log("No category or search provided.");
                    return;
                }

                console.log("Fetching:", url);
                const response = await axios.get(url);

                if (response.status === 404) {
                    console.log("No items found");
                    return;
                }

                setItems(response.data.flat()); // Flatten nested arrays
                console.log("Updated items:", items);

            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };

        fetchItems();
    }, [search, category]); // ✅ Ensures re-fetching when either `search` or `category` changes

    return (
        <div className="bg-gray-400 w-full h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-4">Items</h1>
            <div className="flex flex-wrap gap-4 justify-center items-center">
                {items.map((item, index) => (
                    <ItemLayout 
                        key={index} 
                        name={item.itemname} 
                        description={item.description} 
                        price={item.price}  
                    />
                ))}
            </div>
        </div>
    );
}

export default ItemsShow;
