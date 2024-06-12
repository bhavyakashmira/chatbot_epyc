"use client"
import React , {useEffect ,useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {exploredata} from "../../constant/data.js"

export default function Explore() {
    const [username, setUsername] = useState("");
    const [hovered, setHovered] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
   

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    return (
        <main className={`bg-[#0D1E1F] flex min-h-screen flex-col items-center justify-between ${hoveredIndex !== null ? "opacity-70" : "opacity-100"}`}>
            {/* Main container with background color, min height, and flex properties */}
            <div className="m-10">
                {/* Container for the main content */}
                <div className="sm:flex p-10 justify-start gap-8 items-center">
                    {/* Container for the avatar and greeting message */}
                    <div className="flex justify-center p-10 sm:p-1">
                        {/* Avatar images for different screen sizes */}
                        <Image className="hidden sm:block" src="/chatavatar.png" alt="Logo" width="500" height="500" style={{ height: "auto", width: "auto" }} />
                        <Image className="sm:hidden" src="/avatar.png" alt="Logo" width="90" height="90" />
                    </div>
                    <div>
                        <h1 className="text-white font-serif font-normal md:h-[48px] text-center text-lg sm:m-0 sm:text-3xl">
                            What should we talk about first, {username}?
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-10 p-10">
                    {/* Grid container for the explore cards */}
                    {exploredata.map((image, index) => (
                        <Link href="/chat" key={index}>
                            {/* Each card links to the chat page */}
                            <div
                                key={index}
                                className="hover:scale-110 transition-transform duration-300"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <Image
                                    src={image.src}
                                    height={600}
                                    width={600}
                                    alt={image.alt}
                                    className={`transition duration-300 filter ${hoveredIndex === index ? 'brightness-150' : 'brightness-100'}`}
                                />
                            </div>
                        </Link>
                    ))}
                </div>
                <Link href="/chat" className="text-white border text-xs sm:text-lg p-1 border-[#2A7D82] sm:p-3 rounded-b-lg bg-[#0B3538] hover:bg-[#FFDDBD] hover:text-black">
                    I HAVE GOT MY OWN topic →
                </Link>
                {/* Link to the chat page with a custom topic */}
            </div>
            {/* Background image of the grid */}
            <div className="w-full">
                <Image src="/bg.png" alt="grid" width={2000} height={100} quality={100} />
            </div>
           
        </main>
    );
}