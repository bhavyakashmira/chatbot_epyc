import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function topics() {
    return (
     <main className="bg-[#0D1E1F] flex min-h-screen flex-col items-center justify-between p-10 ">
    <div className="">
        <div className="flex justify-start gap-8 items-center m-5">
            <div className="rounded-full overflow-hidden bg-transparent border border-[#2A7D82] p-2 w-15 h-12 flex items-center justify-center">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div>
                <h1 className="text-white text-3xl">I can help you with ...</h1>
            </div>
        </div>
        <Link href="/explore" className="mt-4 border border-[#2A7D82] p-3 rounded-lg bg-[#FFDDBD] text-black transition-transform duration-300 hover:scale-105">Continue →</Link>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10 mt-8">
            <div className="hover:scale-105 transition-transform duration-300">
                <Image src="/challenges.png" height="400" width="300" alt="Challenges" />
                <p className="text-white mt-2 text-center">What's the biggest challenges in a founder's life?</p>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
                <Image src="/trends.png" height="400" width="300" alt="Trends" />
                <p className="text-white mt-2 text-center">Exciting trends in industry right now?</p>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
                <Image src="/funds.png" height="400" width="300" alt="Funds" />
                <p className="text-white mt-2 text-center">How to raise funds for my fintech startup?</p>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
                <Image src="/trends.png" height="400" width="300" alt="Trends" />
                <p className="text-white mt-2 text-center">What's the biggest challenges in a founder's life?</p>
            </div>
        </div>
       
    </div>
</main>

    );
}