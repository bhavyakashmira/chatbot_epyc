import Image from "next/image";
import Link from "next/link";
import { data } from "../../constant/data.js"
import MarqueeDemo from "../../components/TopicCard.jsx"

export default function Topics() {
    return (
        <main className="bg-[#0D1E1F] flex min-h-screen flex-col items-center justify-between  ">
            
        <div className=" m-3">
                <div>
                    <div className="flex justify-start gap-8 items-center m-5">
                        <div className=" p-10 sm:p-1 " >
                            <Image className='hidden sm:block' src="/botavatar.png" alt="Logo" width="200" height="200" style={{ height: "auto", width: "auto" }} />
                            <Image className='block sm:hidden' src="/avatar.png" alt="Logo" width="90" height="90" />
                        </div>
                        <div>
                            <h1 className="text-white font-serif  text-3xl">I can help you with ...</h1>
                        </div>
                    </div>
                    <Link href="/name" className="m-4 ml-10  border border-[#2A7D82] p-3 rounded-lg bg-[#FFDDBD] text-black transition-transform duration-300 hover:scale-105">Continue →</Link>
        </div>
       
        
        <div className=" gap-10 m-10 px-20  mt-4">
                    <MarqueeDemo />
                </div>
                <div className=" w-full  ">
                    <Image src="/bg.png" alt="grid" width={2000} height={100} quality={100} />
                </div>
       
            </div>
           

</main>

    );
}