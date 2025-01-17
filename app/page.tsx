import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      Clink{' '}
      <Link href='/documents/123'>
        <span className='text-blue-500 underline'>&nbsp;here</span>
      </Link>
    </div>
  );
};

export default Home;
