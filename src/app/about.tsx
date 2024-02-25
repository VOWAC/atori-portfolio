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
      <Image src="/fydnr.png" width={1000} height={1000} alt="profile" />
    </div>
  );
};

export default About;
