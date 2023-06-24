import React from 'react';
import { auth } from '../../../services/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import googleLogo from '../../../public/images/logo_google_g_icon.svg';
import facebookLogo from '../../../public/images/facebook.svg';
import leftArrow from '../../../public/images/left-arrow-svgrepo-com.svg';
import Image from 'next/image';
import Link from 'next/link';

function SignIn() {
  const googleAuth = new GoogleAuthProvider();
  const login = async () => {
    const result = await signInWithPopup(auth, googleAuth);
  };
  return (
    <div>
      <section className='relative bg-white overflow-hidden'>
        <Link href='/home'>
          <Image
            className='absolute lg:left-20 lg:top-20 transition left-5 top-2 lg:h-10 lg:w-10 h-8 w-8 cursor-pointer z-20'
            src={leftArrow}
            alt=''
            width='100'
            height='100'
          />
        </Link>
        <div className='relative z-10 flex justify-center flex-wrap -m-8'>
          <div className='w-full md:w-1/2 p-8'>
            <div className='p-4 py-16 flex flex-col justify-center bg-blueGray-100 h-full'>
              <form className='md:max-w-lg mx-auto'>
                <label className='block mb-4'>
                  <p className='mb-2 text-gray-900 font-semibold leading-normal'>
                    البريد الالكتروني *
                  </p>
                  <input
                    className='px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300'
                    id='signInInput1-1'
                    type='text'
                    placeholder='دخل البريد الاكتروني'
                  />
                </label>
                <label className='block mb-5'>
                  <p className='mb-2 text-gray-900 font-semibold leading-normal'>
                    الرمز السري *
                  </p>
                  <input
                    className='px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300'
                    id='signInInput1-2'
                    type='password'
                    placeholder='********'
                  />
                </label>
                <div className='flex flex-wrap justify-between -m-2 mb-4'>
                  <div className='w-auto p-2'>
                    <div className='flex items-center'>
                      <input
                        className='w-4 h-4'
                        id='default-checkbox'
                        type='checkbox'
                        value=''
                      />
                      <label
                        className='ml-2 text-sm text-gray-900 font-medium'
                        for='default-checkbox'
                      >
                        تذكر حسابي
                      </label>
                    </div>
                  </div>
                  <div className='w-auto p-2'>
                    <a
                      className='text-sm text-orange-500 hover:text-orange-700 font-medium'
                      href='#'
                    >
                      نسيت الرمز السري؟
                    </a>
                  </div>
                </div>
                <button
                  className='mb-9 py-4 px-9 w-full text-black font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-yellow-500 hover:bg-yellow-600 transition ease-in-out duration-200'
                  type='button'
                >
                  سجل الدخول
                </button>
                <p className='mb-5 text-sm text-gray-500 font-medium text-center'>
                  :او اكمل من خلال
                </p>
                <div className='flex flex-wrap justify-center -m-2'>
                  <div className='w-auto p-2'>
                    <button className='flex items-center p-4 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200'>
                      <Image
                        className='mr-3 h-10 w-10'
                        src={googleLogo}
                        alt=''
                        width='100'
                        height='100'
                      />
                      <span className='font-semibold leading-normal'>
                        سجل مع حساب كوكل
                      </span>
                    </button>
                  </div>
                  <div className='w-auto p-2'>
                    <button className='flex items-center p-4 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200'>
                      <Image
                        className='mr-3 h-10 w-10'
                        src={facebookLogo}
                        alt=''
                        width='100'
                        height='100'
                      />
                      <span className='font-semibold leading-normal'>
                        سجل مع حساب فيسبوك
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
