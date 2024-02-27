import Image from 'next/image';
import React from 'react';

const Illust = () => {
  return (
    <div className="mt-[15%] flex justify-center ">
      <div className='w-[150px] h-[400px] relative'>
        <Image
          src="/Illustrations/fydnr_v.jpeg"
          fill
          alt="illust1"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Illust;
