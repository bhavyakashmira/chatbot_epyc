import React from 'react'
import Image from 'next/image'

function CardComponent() {
  return (
      <div className="hover:scale-105 transition-transform duration-300">
          <Image src="/trend.png" height="400" width="300" alt="Trends" />
      </div>
  )
}

export default CardComponent
