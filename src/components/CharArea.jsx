"use client"
import React, { useEffect } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";



function CharArea() {
    var username = ""
    useEffect(() => {
        username = localStorage.getItem("username")
    }, [])
  return (
      <main className="flex-1 p-5 m-5 ">
          <div className="bg-[#12343B] p-10 rounded-b-xl  border border-[#2A7D82] relative h-full">
              <div className="flex justify-start gap-10 items-center " >
                  <div className="rounded-full overflow-hidden bg-transparent border border-[#2A7D82] p-2 w-10 h-10 flex items-center justify-center">
                      <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <div><h1 className="text-white text-xl font-lato " >hey {username} ! how can i help you today ?</h1></div>
              </div>
              <div className="absolute bottom-0 left-4 right-4 font-lato flex items-center border border-[#2A7D82] p-10 m-20 rounded-lg  bg-[#12343B]  ">
                  <input type="text" placeholder="Talk with Dexter..." className=" text-xl bg-transparent flex-1 focus:outline-none text-white" />
                  <FaArrowRightLong size={25} color='#FFDDBD' />
              </div>
          </div>
      </main>
  )
}

export default CharArea
