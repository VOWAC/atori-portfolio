import Image from 'next/image';
import React from 'react';

type Props = {
  src: string;
};

const IllustMobile = ({ src }: Props) => {
  return (
    <div>
      <Image src={src} width={300} height={300} alt="illust" className='object-cover' />
    </div>
  );
};

export default IllustMobile;
