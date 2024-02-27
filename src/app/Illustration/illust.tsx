'use client';

import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

type Props = {
  src: string;
};

const Illust = ({ src }: Props) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex justify-center items-center h-screen group relative">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="relative h-[300px] w-[150px] hover:w-[300px] transition-all duration-300 ease-in-out">
          <Image src={src} fill alt="illust1" className="object-cover" />
        </div>
      </div>
      <div
        className={`fixed inset-0 z-[-1] bg-no-repeat bg-center bg-cover transition-opacity duration-300 ease-in-out ${hover ? 'opacity-20' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${src})` }}
      ></div>
    </div>
  );
};

export default Illust;
