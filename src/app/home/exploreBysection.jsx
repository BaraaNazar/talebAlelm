import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function ExploreBysection({ name, link, section }) {
  return (
    <Link href={section}>
      <div className='relative '>
        <Image
          className='w-full h-full rounded-lg'
          src={link}
          alt=''
          width='100'
          height='100'
        />

        <div className='absolute bottom-2 right-2 px-6 py-4 text-black bg-orange-200 rounded-lg  pb-2  font-semibold'>
          <span>{name}</span>
        </div>
      </div>
    </Link>
  );
}

export default ExploreBysection;
