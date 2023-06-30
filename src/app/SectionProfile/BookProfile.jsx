import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BookProfileprogress from '../bookProfile/BookProfileprogress';

function BookProfile({
  Bookname,
  Bookauthor,
  Bookdescription,
  Bookpages,
  Bookcategory,
  Bookimage,
}) {
  return (
    <Link
      href='/bookProfile'
      className='flex flex-col items-center   rounded-lg  md:flex-row md:max-w-xl hover:shadow-sm transition duration-300 hover:shadow-white'
    >
      <div className='flex flex-col justify-between p-4 leading-normal space-y-2'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight  '>{Bookname}</h5>
        <h5 className='mb-2 text-sm font-bold tracking-tight  '>
          {Bookauthor}
        </h5>
        <p className='mb-3 font-normal  '>{Bookdescription}</p>
        <p className='mb-3 font-normal  '>(صفحة) {Bookpages}</p>
        <div className='space-x-2'>
          <button className='mt-6 py-2 px-4 bg-yellow-400  font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300'>
            {Bookcategory}
          </button>
          <button className='mt-6 py-2 px-4 bg-yellow-400  font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300'>
            أساسيات
          </button>
        </div>
        <BookProfileprogress progressPercentage={`45%`} progressWidth={`45%`} />
      </div>
      <Image
        className='object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
        src={Bookimage}
        alt=''
        width='100'
        height='100'
      />
    </Link>
  );
}

export default BookProfile;
