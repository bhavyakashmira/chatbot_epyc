import React from 'react'
import Image from 'next/image';
function Card() {
  return (
      <div className='grid grid-cols-2 gap-2 p-10  ' >
          <div href="#" className="  block rounded-lg p-4 bg-[#0C3538] border border-black  ">
              <Image height={100} width={100}
                  alt=""
                  src="/card1.png"
                  className="h-56 w-full border border-black rounded-md object-cover"
              />
              <div className="mt-2">
                  <h1 className='font-lato text-lg' >Demystifying fundraising</h1>

                  <div className="mt-6 flex items-center text-gray-400 gap-8 text-xs">
                      <p>As a first time startup founder, fundraising can seem overwhelming. Many have gone through the process with</p>
                  </div>
              </div>
          </div> 
          <div href="#" className="block rounded-lg p-4 bg-[#0C3538] border border-black">
              <Image height={100} width={100}
                  alt=""
                  src="/card2.png"
                  className="h-56 w-full border border-black rounded-md object-cover"
              />

              <div className="mt-2">
                  <h1 className='font-lato text-lg ' >Towards Better Fundraising</h1>

                  <div className="mt-6 flex text-gray-400 items-center gap-8 text-xs">
                      <p>You are an entrepreneur. You are a builder at heart. You want to build products, you want to build teams, you wan..</p>
                  </div>
              </div>
          </div>  
    </div>
  )
}

export default Card
