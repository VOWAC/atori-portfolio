import React from 'react';
import Illust from './illust';

const Page = () => {
  const imagePaths = [
    '/Illustrations/fydnr_v.jpeg',
    '/Illustrations/fydnr_spider.jpg',
    '/Illustrations/vowac.jpg',
  ];

  return (
    <div>
      <div className="border-[1px] border-white w-full fixed top-1/2 -z-50" />
      <div className="flex justify-center items-center h-screen group relative space-x-8">
        <Illust src={imagePaths[0]} />
        <Illust src={imagePaths[1]} />
        <Illust src={imagePaths[2]} />
      </div>
    </div>
  );
};

export default Page;
