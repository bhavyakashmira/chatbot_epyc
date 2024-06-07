import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" bg-[#0D1E1F] flex min-h-screen md:p-2  flex-col items-center justify-between ">

      

      
      <div className="flex flex-col justify-center items-center ">
     
        <div className="p-1" > <img src="/logo.png" alt="Logo" width="200" height="200" /></div>
        
       
         

        <div className="relative  text-white border-2 border-[#2A7D82] m-10 p-10 rounded-b-xl md:w-[600px] shadow-lg custom-border">
          <div className="absolute top-[-1.2rem] left-10 bg-[#0D1E1F] text-white py-1 px-3 rounded">
            BETA
          </div>
          <h1 className="flex justify-center text-3xl">Hey, I am Dexter!</h1>
          <hr />
          <p className="m-5 text-center">
            I'm your startup-savvy chatbot here at SeedToScale.com! 😄 Have questions, need inspiration, or want a chat? I'm here for you! 🚀💬
          </p>
          <hr className="border boder-[#0D1E1F]" />
          <div className="flex justify-center m-2">
            <Link href="/name" className="border p-2 bg-[#FFDDBD] text-black rounded-lg">
              Let's get started! →
            </Link>
          </div>
         
        </div>
        <footer className=" text-xs text-white">
          Dexter can make mistakes. Consider checking important information.
        </footer>
     
      </div>
      

      
    </main>
  );
}
