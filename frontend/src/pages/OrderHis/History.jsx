import React, { useEffect } from 'react'
import Navbar from '../Home/Navbar'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
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
function History() {


  const userId=getUserIdFromToken().userId;
  console.log("printing userid in History:",userId);
  const location = useLocation();
  const [his, sethis] = useState([]);
  const fetchHistory=async()=>{
    try {
      const response = await axios.get('http://localhost:8000/history/find_history', {
        params: {
          user_id: userId
        }
      });
      // console.log('response:orderpage', response.data);
      sethis(response.data);
    } catch (error) {
      console.error('Error fetching history:', error);
    }
  }
  useEffect(()=>{
    fetchHistory();
  },[location]);
  return (
    <div className=' bg-gray-400 h-screen'>
    <Navbar/>
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl">Order History</h1>
      {his.map((item, index) => (
        <History_item key={index} items_info={item} />
      ))}
    </div>
    </div>
  )
}

export default History
