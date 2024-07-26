'use client';
import ToggleDarkMode from '../ToggleDarkMode/ToggleDarkMode';
import Link from 'next/link';
import Image from 'next/image';
import { auth } from '../../../services/firebaseConfig';

import notificationBell from '../../../public/images/notification.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Loader } from 'lucide-react';
import { Button } from '~/src/components/ui/button';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <div className='flex flex-col justify-center items-center w-full h-screen text-xl lg:text-3xl font-bold'>
        <Loader size='4em' className='animate-spin' />
        <div>
          <h1>جاري التحميل</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='flex p-2 justify-between'>
        <ToggleDarkMode />
        <div className='flex justify-end items-center'>
          <div className='relative flex w-fit items-center justify-center space-x-3'>
            <div className='absolute z-10 rounded-full bg-pink-700 p-2 text-xs hidden'></div>
            <Link href='/notification'>
              <Image
                className='w-10 h-10'
                src={notificationBell}
                alt='notificationBell'
                width='500'
              />
            </Link>
            <div className='flex justify-center items-center'>
              <Link href='/userProfile'>
                <Image
                  className='object-cover w-10 rounded-full h-10'
                  src={user?.photoURL as string}
                  alt='User image'
                  width='500'
                  height='500'
                />
              </Link>
              <div className='p-5'>
                <h5 className='mb-2 text-sm font-bold tracking-tight '>
                  {user?.displayName}
                </h5>
              </div>
              <button
                type='button'
                onClick={() => auth.signOut()}
                className='px-3 py-2 text-xs font-medium text-center text-black border rounded-lg '
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
      {children}
    </>
  );
}
