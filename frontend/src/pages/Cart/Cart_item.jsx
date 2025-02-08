import React from 'react'
import { useParams } from 'react-router-dom';


const Cart_item=(item_info)=> {
  const { itemname, itemcategory, itemdescription, itemprice } = item_info.item_info;
  // console.log(item_info);
  const handle_remove = () => {
    console.log("remove from cart");
    const response =axios.get('localhost:8000/cart/remove_from_cart', {
      params: {
        item_id: item_info._id
      }
    })
    
  }
  return (
    <div className="bg-gray-300 p-5 rounded">
      <h2 className="text-4xl">{itemname}</h2>
      <p>Category: {itemcategory}</p>
      <p>{itemdescription}</p>
      <p>Price: ${itemprice}</p>
      <div>
        <button className="bg-gray-600 rounded p-1 px-2 w-full" >
          buy now
        </button>
        <button className="bg-gray-600 rounded p-1 px-2 w-full" onClick={handle_remove}>
          remove from cart
        </button>
      </div>
    </div>
  )
}

export default Cart_item
