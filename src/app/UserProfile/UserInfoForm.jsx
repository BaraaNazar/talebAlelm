'use client';
import React from 'react';

function UserInfoForm({ showHideFunction }) {
  return (
    <div>
      <div className=' justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none '>
        <div className='relative w-auto my-6 mx-auto max-w-3xl backdrop-blur-3xl rounded'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <h3 className='text-3xl font-semibold'>الضبط</h3>
              <button
                className='p-1 ml-auto border-0   text-3xl  outline-none focus:outline-none'
                onClick={() => showHideFunction()}
              >
                <span className=' h-6 w-6 text-2xl block outline-none focus:outline-none'>
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className='relative p-6 flex-auto'>
              <div className='mb-4 flex flex-col gap-6 rounded'>
                <input
                  size='lg'
                  label='Name'
                  placeholder='Name'
                  className='rounded py-2 px-3'
                />
                <input
                  size='lg'
                  label='Mail'
                  placeholder='Mail'
                  className='rounded py-2 px-3'
                />
                <input
                  type='password'
                  size='lg'
                  label='Password'
                  placeholder='Password'
                  className='rounded py-2 px-3'
                />
                <input
                  size='lg'
                  label='text'
                  placeholder='PhotoUrl'
                  className='rounded py-2 px-3'
                />
              </div>
            </div>
            {/*footer*/}
            <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
              <button
                className='text-red-500  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={() => showHideFunction()}
              >
                اغلاق
              </button>
              <button
                className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='submit'
                onClick={() => showHideFunction()}
              >
                حفظ التغييرات
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 '></div>
    </div>
  );
}

export default UserInfoForm;
