import React from 'react';
import axios from 'axios';
// import { useAppContext } from "../../MyContext";
import { jwtDecode } from "jwt-decode";
function getUserIdFromToken() {
  const token = localStorage.getItem("userToken"); // Retrieve token from storage
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded.user; // Adjust based on your token structure
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
}


const ItemLayout = ({ item_info}) => {

// const { info } = useAppContext();
const info = getUserIdFromToken();
    if (!item_info) return null; 
    const userId = info.userId; 

    const { itemname, itemcategory, itemdescription, itemprice } = item_info;
    
    const handle_add_to_cart = async () => {
        console.log(`Adding ${itemname} to cart...`);

        try {
            console.log('userId:', userId);
            const response = await axios.post('http://localhost:8000/add_to_cart', {
                item_info: item_info,
                user_id: userId
            });

            if (response.status === 200) {
                console.log('Item added successfully:', response.data);
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    return (
        <div className="bg-gray-300 p-5 rounded">
            <h2 className="text-4xl">{itemname}</h2>
            <p>Category: {itemcategory}</p>
            <p>{itemdescription}</p>
            <p>Price: ${itemprice}</p>
            <div>
                <button className="bg-gray-600 rounded p-1 px-2 w-full" onClick={handle_add_to_cart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ItemLayout;
