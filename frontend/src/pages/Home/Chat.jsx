import React from 'react'
import { useState } from 'react'

function Chatbox({message,setmessage,open}) {
    return (
        <div className="fixed right-5 bottom-5 bg-white bg-opacity-90 w-80 h-96 p-4 rounded-lg shadow-lg flex flex-col">

            <div className="flex justify-between items-center border-b pb-2">
                <img src="../../../../K.png" alt="chat" className="h-10 w-10 rounded-full" />
                <h1 className="text-lg font-semibold">Chat</h1>
                <button onClick={open} className="text-red-500 font-bold">X</button>
            </div>


            <div className="flex-1 overflow-auto p-2">
                <p>Chat with us</p>
            </div>


            <div className=" flex mt-auto">
                <input
                    className="w-full p-2 border rounded-md"
                    type="text"
                    placeholder="Type your message here"
                    value={message}  
                    onChange={(e) => setmessage(e.target.value)}
                />
                {message.length > 0 && ( 
                    <button className="bg-blue-500 text-white p-2 rounded-md w-auto ml-2">
                        Send
                    </button>
                )}
            </div>
        </div>
    )
}


function Logo({open}) {
    return (
        <button className=' z-50 fixed max-h-15 max-w-15 right-0 bottom-0 mr-5 mb-5' onClick={open}>
            <img src="../../../../K.png" alt="chat" className='rounded-full' />
        </button>
    )
}

function Chat() {
    const [isopen, setisopen] = useState(false);
    const [message, setmessage] = useState("");

    const open = () => {
        setisopen(!isopen);
        console.log("clicked", isopen);
        // setmessage("");
    }

    return (
        <>
            {isopen ? <Chatbox message={message} setmessage={setmessage} open={open} /> : <Logo open={open} />}
        </>
    )
}

export default Chat
