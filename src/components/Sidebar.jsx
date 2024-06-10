import React from 'react'
import { PiListDashes } from "react-icons/pi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

function Sidebar() {
  return (
      <div className="w-32 bg-[#12343B] flex flex-col items-center gap-10 py-10 ">
          <div className='flex flex-col items-center justify-center mt-10 gap-2 ' >
              <div className='rounded-full overflow-hidden bg-transparent border border-[#FFDDBD] p-2 w-10 h-10 flex items-center justify-center ' >
                  <PiListDashes size={32} color='#FFDDBD' />
              </div>
              <span className='text-sm font-lato text-center ' >Trending Topics</span>
          </div>
          <div className='flex flex-col items-center justify-center mt-10 gap-2 ' >
              <div className='rounded-full overflow-hidden bg-transparent border border-[#FFDDBD] p-2 w-10 h-10 flex items-center justify-center ' >
                  <IoChatbubbleEllipsesOutline size={32} color='#FFDDBD' />
              </div>
              <span className='text-center font-lato text-sm '>Start a new conversation</span>
          </div>

      </div>
  )
}

export default Sidebar
