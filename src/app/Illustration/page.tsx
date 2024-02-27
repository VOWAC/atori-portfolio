import React from 'react';
import Illust from './illust';

const Page = () => {
  const imagePaths = [
    '/Illustrations/konoeda.jpg',
    '/Illustrations/fydnr_spider.jpg',
    '/Illustrations/vowac.jpg',
    '/Illustrations/fydnr_v.jpeg',
    '/Illustrations/cha_moon.jpg',
    '/Illustrations/fydnr_fyh.jpg',
    '/Illustrations/fydnr_hpb.jpg',
    '/Illustrations/oritatamigasa.jpg',
  ];

  return (
    <div>
      
      <div className="border-[1px] border-white w-full fixed top-1/2 -z-50" />
      <div className="flex justify-center items-center h-screen group relative space-x-8">
        {imagePaths.map((path, i) => (
          <Illust key={i} src={path} />
        ))}
      </div>
    </div>
  );
};

export default Page;
