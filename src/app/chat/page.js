"use client"
import React, { useEffect } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { PiListDashes } from "react-icons/pi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const ChatLayout = () => {
    return (
        <div className="min-h-screen bg-[#0D1E1F] text-white flex">

            <div className="w-32 bg-[#12343B] flex flex-col items-center gap-10 py-10 ">
                <div className='flex flex-col items-center justify-center mt-10 gap-2 ' >
                    <div className='rounded-full overflow-hidden bg-transparent border border-[#FFDDBD] p-2 w-10 h-10 flex items-center justify-center ' >
                        <PiListDashes size={32} color='#FFDDBD' />
                    </div>
                    <span className='text-sm text-center ' >Trending Topics</span>
                </div>
                <div className='flex flex-col items-center justify-center mt-10 gap-2 ' >
                    <div className='rounded-full overflow-hidden bg-transparent border border-[#FFDDBD] p-2 w-10 h-10 flex items-center justify-center ' >
                        <IoChatbubbleEllipsesOutline size={32} color='#FFDDBD' />
                    </div>
                    <span className='text-center text-sm '>Start a new conversation</span>
                </div>   
                
            </div>
            <main className="flex-1 p-5 m-5 ">
                <div className="bg-[#12343B] p-10 rounded-b-xl  border border-[#2A7D82] relative h-full">
                    <div className="flex justify-start gap-10 items-center " >
                        <div className="rounded-full overflow-hidden bg-transparent border border-[#2A7D82] p-2 w-10 h-10 flex items-center justify-center">
                            <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
                        </div>
                        <div><h1 className="text-white text-xl " >hey  how can i help you today ?</h1></div>
                    </div>
                    <div className="absolute bottom-0 left-4 right-4 flex items-center border border-[#2A7D82] p-10 m-20 rounded-lg bg-[#12343B]  ">
                        <input type="text" placeholder="Talk with Dexter..." className="bg-transparent flex-1 focus:outline-none text-white" />
                        <FaArrowRightLong size={25} color='#FFDDBD' />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ChatLayout;