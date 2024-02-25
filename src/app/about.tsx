import Image from 'next/image';
import React from 'react';
import Title from './title';
import Introduction from './introduction';

const About = () => {
  return (
    <div className='flex'>
      <div>
        <Title title="自己紹介" />
        <Introduction />
      </div>
      <div className='w-[780px] h-[780px] border-[1px] rounded-full fixed top-40 right-20 -z-50'/>
      <Image src="/fydnr.png" width={1000} height={1000} alt="profile" />
    </div>
  );
};

export default About;
