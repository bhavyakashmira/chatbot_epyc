"use client"
import React, { useEffect ,useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';
import Chat from './Chat';



function CharArea() {
    
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
              {/* <div className="flex justify-start gap-10 items-center " >
                  <div className="rounded-full overflow-hidden bg-transparent border border-[#2A7D82] p-2 w-10 h-10 flex items-center justify-center">
                      <Image src="/logo.png" height={100} width={100}  alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <div><h1 className="text-white text-xl font-lato " >hey {username} ! how can i help you today ?</h1></div>
              </div> */}
              <Chat/>
            
          </div>
         
      </main>
  )
}

export default CharArea
