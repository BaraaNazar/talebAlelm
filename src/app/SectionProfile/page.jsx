'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { database } from '../../../services/firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import leftArrow from '../../../public/images/left-arrow-svgrepo-com.svg';
import notificationBell from '../../../public/images/notification.png';
import BookProfile from './BookProfile';

function SectionProfile() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(database, `books`),
      (snapshot) => {
        setBooks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    );

    return unsubscribe;
  }, []);

  return (
    <div>
      <div className='flex flex-row items-center justify-between w-screen'>
        <Link href='/home'>
          <Image
            class=' transition left-10 top-2 lg:h-10 lg:w-10 h-8 w-8 cursor-pointer'
            src={leftArrow}
            alt=''
            width='100'
            height='100'
          />
        </Link>
        <h1 className='text-3xl font-bold'>العقيدة</h1>
        <div className='flex flex-row justify-end items-center'>
          <div className='relative  flex w-full flex-wrap items-stretch'>
            <input
              type='search'
              className='relative m-0 w-[1%] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 hidden'
              placeholder='Search'
              aria-label='Search'
              aria-describedby='button-addon2'
            />
            <span
              className='input-group-text flex whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200'
              id='basic-addon2'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-8 w-8 text-black'
              >
                <path
                  fillRule='evenodd'
                  d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
          </div>
          <div className='relative flex w-fit'>
            <div className='absolute z-10 rounded-full bg-pink-700 p-2 text-xs hidden'></div>
            <div className='flex justify-center rounded-lg text-center'>
              <div>
                <Link href='/notification'>
                  <Image
                    className='mx-auto w-8'
                    src={notificationBell}
                    alt='notificationBell'
                    width='100'
                    height='100'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 items-end justify-center p-10 text-right'>
        {books.map((book) => (
          <BookProfile
            Bookname={book.title}
            Bookauthor={book.author}
            Bookpages={book.pages}
            Bookdescription={book.description}
            // Bookreviews={book.reviews}
            Bookimage={book.cover}
            Bookcategory={book.genre}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionProfile;
