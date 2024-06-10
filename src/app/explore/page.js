"use client"
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function explore() {
    const username = localStorage.getItem("username");
    return (
        <main className=" bg-[#0D1E1F] flex min-h-screen flex-col items-center justify-between ">
       <div className="m-10" >
            <div className="flex justify-start gap-8 items-center " >
                    <div className="rounded-full overflow-hidden bg-transparent border border-[#2A7D82] p-2 w-15 h-12 flex items-center justify-center">
                        <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <div><h1 className="text-white text-3xl " >What should we first talk about , {username} ?</h1></div>

                    
           
            
                </div>
                <div className="flex gap-10 p-10">
                    <div className="hover:scale-105 transition-transform duration-300">
                        <Image src="/trend.png" height="400" width="300" alt="Trends" />
                    </div>
                    <div className="hover:scale-105 transition-transform duration-300">
                        <Image src="/challenges1.png" height="400" width="300" alt="Challenges" />
                    </div>
                    <div className="hover:scale-105 transition-transform duration-300">
                        <Image src="/fund.png" height="400" width="300" alt="Funds" />
                    </div>
                    <div className="hover:scale-105 transition-transform duration-300">
                        <Image src="/trend1.png" height="400" width="300" alt="Trends" />
                    </div>
                  
                </div>
                <Link href="/chat" className="text-white border  border-[#2A7D82] p-3 rounded-b-lg bg-[#0B3538]   " >I HAVE GOT MY OWN topic →  </Link>
            
                      
        
        </div>
            <div className=" w-full  ">
                <Image src="/bg.png" alt="grid" width={2000} height={100} quality={100} />
            </div>

        </main>
    );
}