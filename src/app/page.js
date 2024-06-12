"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
export default function Home() {
   
  useEffect(() => {
    localStorage.clear("username")
 },[])
  


  return (
    <main className="bg-[#0D1E1F] flex flex-col items-center justify-between p-20">
      <div className="flex flex-col justify-center items-center m-10 sm:m-0">
        <div className="p-10 sm:p-1">
          <Image className="hidden sm:block" src="/chatbot.png" alt="Logo" width="200" height="200" />
          <Image className="block sm:hidden" src="/avatar.png" alt="Logo" width="90" height="90" />
        </div>

        <div className="relative w-screen">
          <div className="absolute inset-0 z-0">
            <Image src="/bg.png" alt="Background Image" fill style={{ objectFit: 'cover' }} quality={100} />
          </div>
          <div className="relative z-10">

            <div className="flex justify-center z-10">
              <div className="text-white border-2 bg-[#0D1E1F] border-[#2A7D82] m-10 p-10 rounded-b-xl w-full sm:w-[600px] shadow-lg custom-border notched-container">
                <div className="absolute top-[1.9rem] left-1/2 transform -translate-x-1/2 text-white py-1 px-3 rounded bg-[#0D1E1F]">
                  BETA
                </div>
                <h1 className="flex font-serif justify-center text-xl sm:text-4xl bg-[#0D1E1F]">Hey, I am Dexter!</h1>
                <hr className="border-[#2A7D82] border" />
                <p className="m-5 font-lato text-sm md:text-lg text-center">
                  I&apos;m your startup-savvy chatbot here at SeedToScale.com! 😄 Have questions, need inspiration, or want a chat? I&apos;m here for you! 🚀💬
                </p>
                <hr className="border-[#2A7D82] border" />
                <div className="flex justify-center m-2">
                  <a href="/topics" className="border font-lato p-2 bg-[#FFDDBD] text-black text-base font-bold rounded-lg">
                    Let&apos;s get started! →
                  </a>
                </div>
              </div>
            </div>

            <footer className="flex justify-center text-center text-xs text-white">
              Dexter can make mistakes. Consider checking important information.
            </footer>
          </div>
        </div>
      </div>
    </main>

  );
}


