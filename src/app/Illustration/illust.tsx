import Image from 'next/image'
import React from 'react'

const Illust = () => {
  return (
    <div className='mt-[15%] flex justify-center'>
      <Image src='/Illustrations/fydnr_v.jpeg' alt='illust1' width={500} height={500} className='w-[150px] h-[400px] object-cover'/>
    </div>
  )
}

export default Illust