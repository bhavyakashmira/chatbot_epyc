"use client"
import React, { useEffect ,useState } from 'react';;
import Chat from './Chat';



function ChatArea() {
    
    const [username, setUsername] = useState("");
    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);


  return (
      <main className="flex-1 p-5  ">
          <div className="bg-[#12343B] p-10 rounded-b-xl  border border-[#2A7D82] relative h-full">
              <Chat/>
          </div>
         
      </main>
  )
}

export default ChatArea
