import Image from 'next/image';
import React from 'react';

const Illust = () => {
  return (
    <div className="mt-[17%] flex justify-center group relative">
      <div className="absolute inset-0 bg-cover bg-no-repeat z-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-20 -top-48" style={{backgroundImage: 'url("/Illustrations/fydnr_v.jpeg")'}}></div>
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
