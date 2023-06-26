import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function SingleBook({ src, name, pageNumber, author, link }) {
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <Link href='/bookProfile'>
        <Image
          className='rounded-t-lg'
          src={src}
          alt='bookImage'
          width={500}
          height={500}
        />
      </Link>
      <div className='p-5'>
        <Link href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {name}
          </h5>
          <h5 className='mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white'>
            {author}
          </h5>
        </Link>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          (صفحة) {pageNumber}
        </p>
        <Link
          href={link}
          className='mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300'
        >
          تحميل
        </Link>
      </div>
    </div>
  );
}

export default SingleBook;
