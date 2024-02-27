'use client';

import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

const Illust = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex justify-center items-center h-screen group relative">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="relative h-[300px] w-[150px] hover:w-[300px] transition-all duration-300 ease-in-out">
          <Image
            src="/Illustrations/fydnr_v.jpeg"
            fill
            alt="illust1"
            className="object-cover"
          />
        </div>
      </div>
      <div
        className={`fixed inset-0 z-[-1] bg-no-repeat bg-center bg-cover transition-opacity duration-300 ease-in-out ${hover ? 'opacity-20' : 'opacity-0'}`}
        style={{ backgroundImage: 'url("/Illustrations/fydnr_v.jpeg")' }}
      ></div>
    </div>
  );
};

export default Illust;
