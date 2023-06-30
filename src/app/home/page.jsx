'use client';
import React, { useEffect } from 'react';
import { auth } from '../../../services/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';
import Quran from './quran';
import SingleBook from './SingleBook';
import notificationBell from '../../../public/images/notification.png';
import tatheralsameh from '../../../public/images/Tathkraalsameh.webp';
import kitabAlelm from '../../../public/images/kitabAlelm.jpg';
import alelmWfathlih from '../../../public/images/alelmWfathlih.webp';
import huliaTablibAlem from '../../../public/images/huliaTablibAlem.jpg';
import ExploreBysection from './exploreBysection';
import ToggleDarkMode from '../ToggleDarkMode/ToggleDarkMode';

function Home() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => console.log(user));

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
    <div>
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
                  src={user.photoURL}
                  alt='User image'
                  width='500'
                  height='500'
                />
              </Link>
              <div className='p-5'>
                <h5 className='mb-2 text-sm font-bold tracking-tight '>
                  {user.displayName}
                </h5>
              </div>
              <button
                type='button'
                onClick={() => auth.signOut()}
                className='px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <Quran />
      <div className='text-center space-y-5'>
        <h1 className='text-3xl font-bold pr-2'>:كتب في بداية طلب العلم</h1>
        <div className='lg:flex lg:overflow-auto grid grid-cols-1 gap-2 w-screen justify-center items-center'>
          <SingleBook
            src={tatheralsameh}
            name={' تذكرة السامع والمتكلم في أدب العالم والمتعلم'}
            pageNumber={'عدد الصفحات: ٢١٥ص'}
            author={'المؤلف: القاضي بدر الدين ابن جماعة'}
            link={'https://www.almeshkat.net/books/archive/books/137603.pdf'}
          />
          <SingleBook
            src={kitabAlelm}
            name={' كتاب العلم'}
            pageNumber={'عدد الصفحات: ٢٠٦ص'}
            author={'المؤلف: محمد بن صالح العثيمين'}
            link={
              'https://www.arab-books.com/wp-content/uploads/2021/01/Noor-Book.comD983D8AAD8A7D8A8D8A7D984D8B9D984D9852.pdf'
            }
          />
          <SingleBook
            src={alelmWfathlih}
            name={' جامع بيان العلم وفضله'}
            pageNumber={'عدد الصفحات: ١٥٤٨ص'}
            author={
              'المؤلف: أبو عمر يوسف بن عبد الله النمري المعروف بابن عبد البر'
            }
            link={
              'https://upload.wikimedia.org/wikisource/ar/7/73/جامع_بيان_العلم_وفضله.pdf'
            }
          />
          <SingleBook
            src={huliaTablibAlem}
            name={'  شرح حلية طالب العلم'}
            pageNumber={'عدد الصفحات: ٣٩٧ص'}
            author={'المؤلف: محمد بن صالح العثيمين'}
            link={
              'https://d1.islamhouse.com/data/ar/ih_books/single_010/ar_Shr7_7leet_talb_Al3lm.pdf'
            }
          />
        </div>
      </div>
      <div className='text-right space-y-5'>
        <h1 className='text-3xl font-bold pr-2'>:التصنيف من خلال الاقسام</h1>
        <div className='overflow-auto flex'>
          <ExploreBysection
            section={`/Aqeeda`}
            name={'العقيدة'}
            link={
              'https://kitabat.blog/static/uploads/contents/15967358561d4916273ab0c666806a03b5533728e5.jpg'
            }
          />
          <ExploreBysection
            section={`/Hadeeth`}
            name={'الحديث'}
            link={
              'https://www.ahmadiyya-islam.org/altaqwa/wp-content/uploads/sites/19/2015/05/2015_May_9.jpg'
            }
          />
          <ExploreBysection
            section={`/Feqih`}
            name={'الفقه'}
            link={
              'https://clcdn.spa.gov.sa/image-resizer/h600/galupload/normal/201611/000-749611381479464463169.jpg'
            }
          />
          <ExploreBysection
            section={`/Alfaraid`}
            name={'الفرائض'}
            link={'https://www.wmn.gov.sa/public/photos/80296519.jpg'}
          />
          <ExploreBysection
            section={`/Altafseer`}
            name={'التفسير'}
            link={
              'https://2.bp.blogspot.com/-KxSuBA8tq1Q/W8GfDS11r6I/AAAAAAAAAKI/NrQgYqUPvHkvSIwAs0AzJnAchM5Mdh8WgCLcBGAs/s1600/%25D9%2585%25D9%2583%25D8%25AA%25D8%25A8%25D8%25A9.png'
            }
          />
          <ExploreBysection
            section={`/KutubAmma`}
            name={'كتب عامة'}
            link={
              'https://alkafeel.net/news/images/main/931787644b166c7c02551d2052857904.jpg'
            }
          />
        </div>
      </div>
      <div className='h-20'></div>
    </div>
  );
}

export default Home;
