import Image from 'next/image';
import React from 'react';

const Illust = () => {
  return (
    <div className="mt-[15%] flex justify-center ">
      <div className="relative h-[300px] w-[150px] hover:w-[300px] transition-all duration-300 ease-in-out">
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
