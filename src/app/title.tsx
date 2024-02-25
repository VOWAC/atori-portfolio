import React from 'react';

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return (
    <div className='absolute top-52 flex space-x-3 items-center'>
      <div className='bg-white w-3 h-3' />
      <h1 className='text-2xl'>{title}</h1>
    </div>
  );
};

export default Title;
