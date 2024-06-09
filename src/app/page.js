import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className=" bg-[#0D1E1F] flex min-h-screen md:p-2  flex-col items-center justify-between p-20  ">
      <div className="flex flex-col justify-center items-center m-10 sm:m-0 ">

        <div className=" p-10 sm:p-1 " >
          <Image className='hidden sm:block' src="/chatbot.png" alt="Logo" width="200" height="200" />
          <Image className='block sm:hidden' src="/avatar.png" alt="Logo" width="90" height="90" />
        </div>



        <div className='relative w-screen'>
          <div className="absolute inset-0 z-0">
            <Image src="/bg.png" alt="Background Image" layout="fill" objectFit="cover" quality={100} />
          </div>
          <div className='relative  z-10'>
            <div className='flex justify-center z-10 ' >
              <div className="text-white border-2 bg-[#0D1E1F] border-[#2A7D82] m-10 p-10 rounded-b-xl w-[300px] sm:w-[600px] shadow-lg custom-border">
                <div className="absolute top-[-1.2rem] left-10 bg-[#0D1E1F] text-white py-1 px-3 rounded">
                  BETA
                </div>
                <h1 className="flex justify-center text-xl sm:text-3xl bg-[#0D1E1F] ">Hey, I am Dexter!</h1>
                <hr />
                <p className="m-5 text-sm md:text-lg text-center">
                  I'm your startup-savvy chatbot here at SeedToScale.com! 😄 Have questions, need inspiration, or want a chat? I'm here for you! 🚀💬
                </p>
                <hr className="border boder-[#0D1E1F]" />
                <div className="flex justify-center m-2">
                  <Link href="/name" className="border p-2 bg-[#FFDDBD] text-black rounded-lg">
                    Let's get started! →
                  </Link>
                </div>
              </div>
            </div>
            
            <footer className="flex justify-center text-xs text-white">
              Dexter can make mistakes. Consider checking important information.
            </footer>
          </div>
        </div>
        

      </div>



    </main>
  );
}


