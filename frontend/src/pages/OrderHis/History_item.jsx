import React from 'react'
import axios from 'axios';


const History_item=({item_info})=> {
  const { itemname, itemcategory, itemdescription, itemprice } = item_info;
  // console.log('items_info:', items_info);
  return (
    <div className="bg-gray-300 p-5 rounded">
            <h2 className="text-4xl">{itemname}</h2>
            <p>Category: {itemcategory}</p>
            <p>{itemdescription}</p>
            <p>Price: ${itemprice}</p>
        </div>
  )
}

export default History_item
