import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
import Navbar from "../Home/Navbar";
// import { useAppContext } from "../../MyContext";
import { jwtDecode } from "jwt-decode";
function getUserIdFromToken() {
  const token = localStorage.getItem("userToken"); 
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded.user; 
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
}




function F({ first, second }) {
  return (
    <div>
      <p className="font-semibold mb-1">{first}:</p>
      <p className="px-2 py-1 mb-2 border-2 rounded w-full">{second}</p>
    </div>
  );
}

function Profile() {
  const handleEdit=()=>{
  
  }
  // const { userId } = useParams();
  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true); 
  // const { info } = useAppContext();
  const info = getUserIdFromToken();
  
  useEffect(() => {
    setUser(prevUser => {
        if (JSON.stringify(prevUser) !== JSON.stringify(info)) {
            console.log("info at profile:", info);
            return info;
        }
        return prevUser; 
    });
}, [info]);




  if (!user) return <div className="text-center mt-10">User not found...</div>; 

  return (
    <div className="bg-gray-400 w-full h-screen">
      <Navbar />
      <p className="text-4xl font-bold my-3 text-center">Your Account</p>
      <div className="flex justify-center items-center">
        <div className="bg-gray-200 grid py-10 px-20 rounded w-fit">
          <F first="First name" second={user.userDetails.firstname} />
          <F first="Last name" second={user.userDetails.lastname} />
          <F first="Contact Number" second={user.userDetails.contact_number} />
          <F first="Email address" second={user.userDetails.Email} />
          <button className="bg-gray-400 px-2 py-1 mb-2 rounded w-full"
          >Edit</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
