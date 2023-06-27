import React from 'react';

function ChaptersCheckList() {
  return (
    <div className='p-5 flex flex-col justify-center items-center'>
      <h3 className='mb-4 font-semibold text-gray-900'>الفصول</h3>
      <ul className='w-80 text-sm font-medium   border-gray-200 rounded-lg '>
        <li className='w-full border-b border-gray-200 rounded-t-lg '>
          <div className='flex items-center pl-3'>
            <input
              id='vue-checkbox'
              type='checkbox'
              value=''
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
            />
            <label
              for='vue-checkbox'
              className='w-full py-3 ml-2 text-sm font-medium text-gray-900 '
            >
              الفصل الاول
            </label>
          </div>
        </li>
        <li className='w-full border-b border-gray-200 rounded-t-lg '>
          <div className='flex items-center pl-3'>
            <input
              id='react-checkbox'
              type='checkbox'
              value=''
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
            />
            <label
              for='react-checkbox'
              className='w-full py-3 ml-2 text-sm font-medium text-gray-900 '
            >
              الفصل الثاني
            </label>
          </div>
        </li>
        <li className='w-full border-b border-gray-200 rounded-t-lg '>
          <div className='flex items-center pl-3'>
            <input
              id='angular-checkbox'
              type='checkbox'
              value=''
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
            />
            <label
              for='angular-checkbox'
              className='w-full py-3 ml-2 text-sm font-medium text-gray-900'
            >
              الفصل الثالث
            </label>
          </div>
        </li>
        <li className='w-full border-b border-gray-200 rounded-t-lg '>
          <div className='flex items-center pl-3'>
            <input
              id='laravel-checkbox'
              type='checkbox'
              value=''
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
            />
            <label
              for='laravel-checkbox'
              className='w-full py-3 ml-2 text-sm font-medium text-gray-900 '
            >
              الفصل الرابع
            </label>
          </div>
        </li>
        <li className='w-full border-b border-gray-200 rounded-t-lg '>
          <div className='flex items-center pl-3'>
            <input
              id='laravel-checkbox'
              type='checkbox'
              value=''
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
            />
            <label
              for='laravel-checkbox'
              className='w-full py-3 ml-2 text-sm font-medium text-gray-900 '
            >
              الفصل الخامس
            </label>
          </div>
        </li>
        <li className='w-full border-b border-gray-200 rounded-t-lg '>
          <div className='flex items-center pl-3'>
            <input
              id='laravel-checkbox'
              type='checkbox'
              value=''
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
            />
            <label
              for='laravel-checkbox'
              className='w-full py-3 ml-2 text-sm font-medium text-gray-900 '
            >
              الفصل السادس
            </label>
          </div>
        </li>
        <li className='w-full border-b border-gray-200 rounded-t-lg '>
          <div className='flex items-center pl-3'>
            <input
              id='laravel-checkbox'
              type='checkbox'
              value=''
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
            />
            <label
              for='laravel-checkbox'
              className='w-full py-3 ml-2 text-sm font-medium text-gray-900 '
            >
              الفصل السابع
            </label>
          </div>
        </li>
        <li className='w-full border-b border-gray-200 rounded-t-lg '>
          <div className='flex items-center pl-3'>
            <input
              id='laravel-checkbox'
              type='checkbox'
              value=''
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
            />
            <label
              for='laravel-checkbox'
              className='w-full py-3 ml-2 text-sm font-medium text-gray-900 '
            >
              الفصل الثامن
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ChaptersCheckList;
