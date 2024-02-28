import React from 'react';
import Illust from './illust';
import Title from '../title';
import IllustMobile from './illustMobile';

const Page = () => {
  const imagePaths = [
    '/Illustrations/fydnr_spider.jpg',
    '/Illustrations/konoeda.jpg',
    '/Illustrations/vowac.jpg',
    '/Illustrations/fydnr_v.jpeg',
    '/Illustrations/cha_moon.jpg',
    '/Illustrations/fydnr_fyh.jpg',
    '/Illustrations/fydnr_hpb.jpg',
    '/Illustrations/oritatamigasa.jpg',
  ];

  return (
    // <div className='overflow-x min-w-fit'>
    // <div className='absolute top-40 left-[5%]'>
    //   <Title title="イラスト" />
    //   </div>
    //   <div className="border-[1px] border-white w-full fixed top-1/2 -z-50" />
    //   <div className="flex justify-center items-center h-screen group relative space-x-8">
    //     {imagePaths.map((path, i) => (
    //       <Illust key={i} src={path} />
    //     ))}
    //   </div>
    // </div>
    <div className='mt-24'>
      <div className='ml-10'>
      <Title title="イラスト" />
      </div>
      <div className="mt-5 w-screen grid place-items-center grid-cols-1 gap-y-3 gap-x-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="border-[1px] border-white w-full fixed top-1/2 -z-50" />
        {imagePaths.map((path, i) => (
          <IllustMobile key={i} src={path} />
        ))}
      </div>
    </div>
  );
};

export default Page;
