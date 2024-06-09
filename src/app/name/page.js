"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function name() {
     
    const [username, setUsername] = useState("");

    return (
        <main className=" bg-[#0D1E1F]  min-h-screen    ">
         
        
                <div className="p-24">
                    <div className="flex justify-start gap-8 items-center">
                    <div className=" hidden  rounded-full overflow-hidden bg-transparent border border-[#2A7D82] p-2 w-15 h-12 sm:flex items-center justify-center">
                            <img src="/logo.png" alt="Logo" className=" w-full h-full object-cover" />
                        </div>
                        <div><h1 className="text-white text-center m-10 sm:m-0  sm:text-3xl">Hi, my name is Dexter! What’s your name?</h1></div>
                    </div>

                    <div className="flex items-center border border-[#2A7D82] rounded-lg bg-transparent p-3 sm:p-8 sm:m-10">
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Your first name..." className="sm:text-3xl bg-transparent flex-1 focus:outline-none text-white" />
                    </div>

                    <Link href="/explore" className="text-white border m-3  border-[#2A7D82] sm:p-3 rounded-b-lg bg-[#0B3538] hover:bg-[#FFDDBD] hover:text-black">continue →</Link>
                </div>

                <div className=" w-full">
                    <Image src="/bg.png" width={2000} height={100} quality={100} />
                </div>
            


           


        </main>
    );
}