"use client"
import Image from "next/image";
import Link from "next/link";
import { useState , useEffect } from "react";

export default function Name() {
     
    const [username, setUsername] = useState("");
    useEffect(() => {
        const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
            setUsername(savedUsername);
        }
       
    }, []);

    useEffect(() => {
        if (username) {
            localStorage.setItem('username', username);
        }

    }, [username]);

 

    return (
        <main className="relative bg-[#0D1E1F] min-h-screen">
            <div className="absolute bottom-0 left-0 md:inset-0 px-2 py-5">
                <div className="sm:flex p-10 justify-start gap-8 items-center">
                    <div className="flex justify-center p-10 sm:p-1">
                        <Image
                            className="hidden sm:block"
                            src="/botavatar.png"
                            alt="Logo"
                            width={500}
                            height={500}
                            style={{ height: "auto", width: "auto" }}
                        />
                        <Image
                            className="sm:hidden"
                            src="/avatar.png"
                            alt="Logo"
                            width={90}
                            height={90}
                        />
                    </div>
                    <div>
                        <h1 className="text-white font-serif font-normal md:h-[48px] text-center text-lg sm:m-0 sm:text-3xl">
                            Hi, my name is Dexter! What’s your name?
                        </h1>
                    </div>
                </div>

                <div className="flex items-center border border-[#2A7D82] rounded-lg bg-transparent mx-10 p-3 sm:p-8 sm:mx-10">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Your first name..."
                        className="sm:text-3xl font-serif p-4 sm:p-0 bg-transparent flex-1 focus:outline-none text-white"
                    />
                </div>

                <Link href="/explore" className="text-white border text-lg flex justify-center mx-20 my-2 max-w-[150px] border-[#2A7D82] sm:p-3 sm:m-6 rounded-b-lg bg-[#0B3538] hover:bg-[#FFDDBD] hover:text-black">
                        Continue →
                 
                </Link>

                <div className="w-full">
                    <Image src="/bg.png" alt="background" width={2000} height={100} quality={100} />
                </div>
            </div>
        </main>
    );
}