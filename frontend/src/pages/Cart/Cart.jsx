import React from 'react'
import axios from 'axios';
import Navbar from '../Home/Navbar';
import { useAppContext } from '../../MyContext';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Cart_item from './Cart_item';

function Cart() {
  const [items, setItems] = useState([]);
  const { info } = useAppContext();
  
  
  const lo = useLocation();
  const getCart = async () => {
    console.log('Fetching items...');
    try {
      const response = await axios.get('http://localhost:8000/cart', {
        params: {
          user_id: info.userId
        }
      });
      console.log('Items found:', response.data);
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
  
  useEffect(() => {
    getCart();
  }, [lo]);

  return (
    <>
      <Navbar />
      <h1 className='flex justify-center items-center py-3 font-semibold text-5xl bg-gray-400'>Cart</h1>
      <div className="bg-gray-400 w-full h-screen flex flex-col items-center">
        {/* <h1 className="text-4xl font-bold mt-4 mb-4">Items</h1> */}
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {items.map((item, index) => (
            <Cart_item key={index} fetchitems={getCart} item_info={item} />
          ))}
        </div>
      </div>
    </>
  )

}

export default Cart;
