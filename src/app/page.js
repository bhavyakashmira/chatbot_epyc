"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import HomepageCard from "../components/HomepageCard"
export default function Home() {
   
  useEffect(() => {
    localStorage.clear("username")
 },[])
  


  return (
    <main className="bg-[#0D1E1F] flex flex-col items-center justify-between  ">
      <div className="flex flex-col justify-center items-center m-10 sm:m-0">
        <div className="p-10 sm:p-1">
          <Image className="hidden sm:block" src="/chatbot.png" alt="Logo" width="200" height="200" />
          <Image className="block sm:hidden" src="/avatar.png" alt="Logo" width="90" height="90" />
        </div>
        <HomepageCard />
      </div>
    </main>

  );
}


