import React from 'react'
import axios from 'axios';


const Order_item=({fetchOrders,items_info})=> {
  const { itemname, itemcategory, itemdescription, itemprice ,itemotp} = items_info;
  const handle_cancel = async () => {
    try {
      const response = await axios.delete('http://localhost:8000/orders/cancel', {
        params: {
          order_id: items_info._id
        }
      });
      // console.log('response:cancel', response.data);
      fetchOrders();
    } catch (error) {
      console.error('Error cancelling order:', error);
    }
  };


  // console.log('items_info:', items_info);
  return (
    <div className="bg-gray-300 p-5 rounded">
      <h2 className="text-4xl">{itemname}</h2>
      <p>Category: {itemcategory}</p>
      <p>{itemdescription}</p>
      <p>OTP: {itemotp}</p>
      <p>Price: ${itemprice}</p>
      <div>
        <button className="bg-gray-600 rounded p-1 px-2 w-full my-2" onClick={handle_cancel} >
          cancel order
        </button>
      </div>
    </div>
  )
}

export default Order_item
