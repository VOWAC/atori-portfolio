import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="flex space-x-9 items-center p-5 border-b-[1px] border-white transition-colors duration-300 text-2xl top-0 left-0 w-full z-50 fixed backdrop-blur-sm hover:bg-white hover:bg-opacity-10">
      <Link href="/">冬隣創造処</Link>
      <nav>
        <ul className="flex space-x-5 text-base">
          <li>
            <Link href="/about">自己紹介</Link>
          </li>
          <li>
            <Link href="/Illustration">イラスト</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
