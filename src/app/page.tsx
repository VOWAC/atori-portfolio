import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div>
        <div className="border-[1px] border-white w-full fixed top-1/2 -z-50" />
        <div className='flex justify-center mt-8'>
          {/* 仮の画像 */}
          <Image src="/dona.png" width={1200} height={1200} alt="profile" />
        </div>
      </div>
    </main>
  );
}
