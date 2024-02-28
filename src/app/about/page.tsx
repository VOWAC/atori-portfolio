import Image from 'next/image';
import React from 'react';
import Title from '../title';
import Introduction from './introduction';

const About = () => {
  return (
    <div className="flex items-center w-4/5 m-auto">
      <div>
        <div className='mt-32 lg:mt-0 lg:absolute lg:top-40 lg:left-[5%]'>
        <Title title="自己紹介" />
        </div>
        <div className='flex h-screen items-center'>
        <Introduction />
        </div>
      </div>
      <div className="w-[780px] h-[780px] border-[1px] rounded-full fixed top-40 right-20 -z-50" />
      <div className='absolute top-20 -right-1/4 -z-50'>
      <Image src="/fydnr.png" width={1700} height={3000} alt="profile" />
      </div>
    </div>
  );
};

export default About;
