"use client"
import Image from "next/image";
import Link from "next/link";
import { useState , useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Name() {
     
    const [username, setUsername] = useState("");
    useEffect(() => {
        const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
            setUsername(savedUsername);
        }
        console.log(localStorage.getItem('username'));
    }, []);
    useEffect(() => {
        if (username) {
            localStorage.setItem('username', username);
        }

    }, [username]);

    return (
        <main className=" relative bg-[#0D1E1F] min-h-screen">

            <div className="absolute bottom-0 left-0 md:inset-0   " >
                <div className=" px-2  py-20 ">
                    <div className="sm:flex  justify-start gap-8 items-center">
                        <div className=" rounded-full overflow-hidden bg-transparent border border-[#2A7D82] p-2 sm:w-15 sm:h-12 sm:flex items-center justify-center">
                            <img src="/chatavatar.png" alt="Logo" className="w-full h-full object-cover hidden sm:block " />
                            <Image src="/avatar.png" className="sm:hidden w-full h-full object-cover  "  height="50" width="50" />

                        </div>
                        <div>
                            <h1 className="text-white font-serif font-normal  md:h-[48px]  text-center text-lg sm:m-0 sm:text-3xl">
                                Hi, my name is Dexter! What’s your name?
                            </h1>
                        </div>
                    </div>

                    <div className="flex items-center border border-[#2A7D82] rounded-lg bg-transparent p-3 sm:p-8 sm:m-10">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Your first name..."
                            className="sm:text-3xl font-serif bg-transparent flex-1 focus:outline-none text-white"
                        />
                    </div>

                    <Link href="/explore" className="text-white border text-lg  m-3 border-[#2A7D82] sm:p-3 rounded-b-lg bg-[#0B3538] hover:bg-[#FFDDBD] hover:text-black">
                        Continue →
                    </Link>
                </div>

                <div className="w-full">
                    <Image src="/bg.png" width={2000} height={100} quality={100} />
                </div>
            </div>
           
        </main>
    );
}