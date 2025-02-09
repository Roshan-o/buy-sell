import { React, useEffect } from 'react'
import Navbar from '../Home/Navbar'
import axios from 'axios'
import { useState } from 'react'
import { useAppContext } from "../../MyContext";
import { useLocation } from 'react-router-dom';
import Delivary_item from './Delivary_item';


const Delivary = () => {
    const location = useLocation();
    const { info } = useAppContext();
    const userId = info.userId;
    const [delivaryitems, setdelivaryitems] = useState([]);
    const fetchdelivaryitems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/orders/delivary', {
                params: {
                    user_id: userId
                }
            });
            // console.log('response:orderpage', response.data);
            setdelivaryitems(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };
    useEffect(() => {
        fetchdelivaryitems();
    }, [location]);

    return (
        <>
            <Navbar />
            <h1 className='flex justify-center items-center py-3 font-semibold text-5xl bg-gray-400'>Delivary</h1>
            <div className="bg-gray-400 w-full h-screen flex flex-col items-center">
                <div className="flex flex-wrap gap-4 justify-center items-center">
                   {delivaryitems.map((order, index) => (
                        <Delivary_item key={index} fetchdelivaryitems={fetchdelivaryitems} item_info={order} />
                    ))}
                </div>
            </div>
        </>
    )
};

export default Delivary
