import Image from "next/image";

export default function Home() {
    return (
        <main className=" bg-[#0D1E1F] flex min-h-screen flex-col items-center justify-between p-24">

       <div className="" >
            <div className="flex justify-start " >
                    <div className="rounded-full overflow-hidden bg-transparent border border-[#2A7D82] p-2 w-10 h-10 flex items-center justify-center">
                        <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <div><h1 className="text-white text-3xl " >What should we first talk about , name ?</h1></div>
           
            
                </div>
        <div className="flex gap-10 p-10" >
                    <div className="" >
                        <Image className=""  src="/trends.png" height="400" width="300" />
                    </div>
                    <div>
                        <Image src="/challenges.png" height="400" width="300" />
                    </div>
                    <div>
                        <Image src="/funds.png" height="400" width="300" />
                    </div>
                    <div>
                        <Image src="/trends.png" height="400" width="300" />
                    </div>



                </div>
                <div>
                    <button className="text-white border border-[#2A7D82] p-1 rounded-lg " >I HAVE GOT MY OWN TOPIC</button>
        </div>
                      
            </div>
        

        </main>
    );
}