'use client';
import React, { useState } from 'react';
import { auth } from '../../../services/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ProgressBar from './ProgressBar';
import UserInfoForm from './UserInfoForm';

function UserProfile() {
  const [showModal, setShowModal] = useState(false);
  const handelShowModal = () => {
    setShowModal(!showModal);
  };
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (loading) {
    return (
      <div className='flex justify-center items-center w-full h-screen text-4xl font-bold'>
        Loading...
      </div>
    );
  }
  if (!user) {
    router.push('/signUp');
  }
  return (
    <div className='pb-24'>
      <div className='p-8  shadow mt-24'>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0'>
            <div>
              <p className='font-bold  text-xl'>22</p>
              <p>الاصدقاء</p>
            </div>
            <div>
              <p className='font-bold  text-xl'>10</p>
              <p>الكتب</p>
            </div>
            <div>
              <p className='font-bold  text-xl'>89</p>
              <p>الملاحظات</p>
            </div>
          </div>
          <div className='relative'>
            <Image
              src={user.photoURL}
              height={500}
              width={500}
              quality={100}
              alt='userImage'
              className='w-48 h-48 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500'
            />
          </div>

          <div className='space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center'>
            <button
              onClick={() => setShowModal(true)}
              className='text-white py-2 px-4 rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5'
            >
              الضبط
            </button>
            <button
              onClick={() => auth.signOut()}
              className='text-white py-2 px-4 rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5'
            >
              Sign Out
            </button>
          </div>
        </div>

        <div className='mt-20 text-center border-b pb-12'>
          <h1 className='text-4xl font-medium '>{user.displayName}</h1>
          <p className='font-light  mt-3'>
            {user.metadata.creationTime} :تاريخ الانضمام
          </p>

          <p className='mt-8 '>{user.email}</p>
        </div>
        {showModal ? <UserInfoForm showHideFunction={handelShowModal} /> : ''}
        <div className='mt-12 flex flex-col justify-center'>
          <p className=' text-center font-light lg:px-16'>المستوى العام</p>
          <ProgressBar
            sectionName={'العقيدة'}
            progressWidth={`45%`}
            progressPercentage={`45%`}
          />
          <ProgressBar
            sectionName={'الفقه'}
            progressWidth={`45%`}
            progressPercentage={`45%`}
          />
          <ProgressBar
            sectionName={'التفسير'}
            progressWidth={`35%`}
            progressPercentage={`35%`}
          />
          <ProgressBar
            sectionName={'الفرائض'}
            progressWidth={`100%`}
            progressPercentage={`100%`}
          />
          <ProgressBar
            sectionName={'الحديث'}
            progressWidth={`85%`}
            progressPercentage={`85%`}
          />
          <ProgressBar
            sectionName={'كتب عامة'}
            progressWidth={`25%`}
            progressPercentage={`25%`}
          />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
