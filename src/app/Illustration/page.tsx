import React from 'react'
import Illust from './illust'

const Page = () => {
  const imagePaths = [
    '/Illustrations/fydnr_v.jpeg',
    '/Illustrations/fydnr_spider.jpg',
    '/Illustrations/vowac.jpg',
  ]

  return (
    <div>
      <div className='border-[1px] border-white w-full fixed top-1/2 -z-50' />
      <Illust src={imagePaths[2]}/>
    </div>
  )
}

export default Page