import React from 'react';
import Link from 'next/link';

function QuranTools({ name, btn, content }) {
  return (
    <div>
      <div className='flex justify-center m-2 hover:shadow-sm transition duration-300 hover:shadow-white'>
        <div className='block max-w-sm rounded-lg p-6 shadow-lg '>
          <h5 className='mb-2 text-xl font-medium leading-tight'>{name}</h5>
          <p className='mb-4 text-base '>{content}</p>
          <Link
            href={`https://quran.tareq.tk/Web/`}
            target='_blank'
            className=' bg-yellow-500  inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
          >
            {btn}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuranTools;
