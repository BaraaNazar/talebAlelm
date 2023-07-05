import React, { useState } from 'react';

function CheckListItem({ chapter, isChecked, handleCurrentProgress }) {
  return (
    <li className='w-full border-b border-gray-200 rounded-t-lg '>
      <div className='flex items-center pl-3'>
        <input
          onClick={() => handleCurrentProgress()}
          id='checkbox'
          type='checkbox'
          value={isChecked}
          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
        />
        <label
          htmlFor='checkbox'
          className='w-full py-3 ml-2 text-sm font-medium text-gray-900 '
        >
          {chapter}
        </label>
      </div>
    </li>
  );
}

export default CheckListItem;
