import React from 'react'
import axios from 'axios';
import { useAppContext } from '../../MyContext';
import { Toaster, toast } from "react-hot-toast";
import { useState } from 'react';

const Delivary_items = ({fetchdelivaryitems,item_info}) => {
      const notifye = (message) => toast.error(message);
      const notifys = (message) => toast.success(message);
    const { info } = useAppContext();
    // console.log("item_info_incart_item:",item_info);
    const [otp, setOtp] = useState();
    const { itemname, itemcategory, itemdescription, itemprice } = item_info;
    const handle_cancel = () => {
        // console.log("item...id:",item_info._id)

    }
    const handle_confirm = () => {
        console.log("confirm");
        const id = item_info._id;
        const response = axios.get('http://localhost:8000/orders/delivary_confirm', {
            params: {
                item_id: id,
                otp: otp
            }
        });
        console.log("response:",response);
        if(response.status==200){
            notifys("Item delivary confirmed");
        }
        else{
            notifye("Please enter correct otp");
        }
        fetchdelivaryitems();
    }

  return (
    <>
    <div className="bg-gray-300 p-5 rounded">
      <h2 className="text-4xl">{itemname}</h2>
      <p>Category: {itemcategory}</p>
      <p>{itemdescription}</p>
      <p>Price: ${itemprice}</p>
      <div className='flex flex-row'>

      <input type="Number" placeholder="Enter otp" value={otp} onChange={(e)=>setOtp(e.target.value)} className="bg-gray-600 rounded p-1 px-2 w-full my-2 mx-1" />
        <button className="bg-gray-600 rounded p-1 px-2 w-full my-2" onClick={handle_confirm}>
          Confirm
        </button>
        </div>
      <div>
        <button className="bg-gray-600 rounded p-1 px-2 w-full my-2" onClick={handle_cancel} >
          cancel
        </button>
      </div>
    </div>
    <Toaster />
    </>
  )
}

export default Delivary_items
