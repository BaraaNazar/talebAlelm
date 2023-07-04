'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../../services/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Link from 'next/link';
import Image from 'next/image';
import googleLogo from '../../../public/images/logo_google_g_icon.svg';
import Mekka from '../../../public/images/Mekka.jpeg';

function Index() {
  const [user, loading] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
  const router = useRouter();

  if (loading) {
    return (
      <div className='flex justify-center items-center w-full h-screen text-4xl font-bold'>
        Loading...
      </div>
    );
  }
  if (user) {
    router.push('/home');
  }

  const login = async () => {
    const result = await signInWithPopup(auth, googleAuth);
  };
  return (
    <div>
      <div className='flex flex-col text-center '>
        <div className='flex flex-col w-screen justify-center items-center'>
          <Image
            src={Mekka}
            height={500}
            width={500}
            className='w-80 rounded'
          />
          <h1 className='text-sm p-10'>
            وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ
          </h1>
        </div>
        <div className='p-5 space-y-2'>
          <div className='flex space-x-3 justify-center'>
            <h1 className='text-yellow-500 text-3xl font-bold'>طالب العلم</h1>
            <h1 className='text-3xl font-bold'>أهلا بكم في برنامج</h1>
          </div>
          <p>
            افضل منصة لطلب العلم, بامكانك القراءة ومتابعة ما تتعلمه عن طريق
            حسابك الخاص
          </p>
        </div>
        <div className=' flex flex-col justify-center items-center space-y-2 text-lg'>
          <button
            onClick={login}
            type='button'
            className=' flex  hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-full px-5 py-2.5 text-center justify-center items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 w-72 border-stone-100 border-2'
          >
            <Image
              className='w-6 h-6 mr-2 -ml-1'
              src={googleLogo}
              alt=''
              width='100'
            />
            سجل مع حساب جوجل
          </button>
          <Link
            href='/home'
            className=' bg-yellow-500   hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-full px-5 py-2.5 text-center justify-center items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 w-72'
          >
            من نحن؟
          </Link>
          <Link href='/signIn'>
            <button
              type='button'
              className='text-yellow-500 bg-orange-100  hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-full px-5 py-2.5 text-center justify-center items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 w-72'
            >
              يوجد لدي حساب بالفعل
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
