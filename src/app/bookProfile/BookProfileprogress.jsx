import React from 'react';

function BookProfileprogress({ progressWidth, progressPercentage }) {
  return (
    <div className='p-10'>
      <div className='w-full bg-gray-200 rounded-full dark:bg-gray-700'>
        <div
          className='bg-blue-600 text-xs font-medium  text-center p-0.5 leading-none rounded-full'
          style={{ width: progressWidth + `%` }}
        >
          {' '}
          {progressPercentage}
        </div>
      </div>
    </div>
  );
}

export default BookProfileprogress;
