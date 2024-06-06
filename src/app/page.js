import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-[#0D1E1F] flex min-h-screen md:p-2  flex-col items-center justify-between ">

      
      <div className="flex flex-col justify-center items-center ">
     
          <div className="p-1" > <img src="/logo.png" alt="Logo" width="200" height="200" /></div>
         

          <div className="border text-white border-[#2A7D82] m-10 p-10 rounded-xl  md:w-[600px] ">
            <h1 className="flex justify-center text-3xl" >Hey I am dexter!</h1>
            <hr className="border border-[#2A7D82]" />
            <h1 className="m-5 text-center  ">
              I'm your startup-savvy chatbot here at SeedToScale.com! 😄 Have questions, need inspiration, or want a chat? I'm here for you! 🚀💬
            </h1>
            <hr className="border border-[#2A7D82]" />
            <div className="flex justify-center m-2">
              <button className="border p-2 bg-[#FFDDBD] text-black rounded-lg">
                Let's get started !
              </button>
            </div>
        </div>
        <div className="text-white  " ><p className="text-sm md:text-lg text-center" >Dexter can make mistakes. Consider checking important information.</p></div>
     
      </div>
      

      
    </main>
  );
}
