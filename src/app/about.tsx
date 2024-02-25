import Image from 'next/image';
import React from 'react';
import Title from './title';
import Introduction from './introduction';

const About = () => {
  return (
    <div className="flex items-center w-4/5 m-auto">
      <div>
        <Title title="自己紹介" />
        <div className='absolute top-1/4'>
        <Introduction />
        </div>
      </div>
      <div className="w-[780px] h-[780px] border-[1px] rounded-full fixed top-40 right-20 -z-50" />
      <div className='absolute top-[7%] -right-1/4'>
      <Image src="/fydnr.png" width={1700} height={3000} alt="profile" />
      </div>
    </div>
  );
};

export default About;
