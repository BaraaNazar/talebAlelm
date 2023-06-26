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

function SectionProfile({ sectionName, sectionDescription }) {
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
      <div className='flex flex-row items-center justify-between w-screen p-5'>
        <div className='lg:w-52'>
          <Link
            className='mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300'
            href='/home'
          >
            الرجوع
          </Link>
        </div>
        <div className='flex flex-col text-center space-y-5'>
          <h1 className='text-3xl font-bold'>{sectionName}</h1>
          <p className='text-sm font-bold'>{sectionDescription}</p>
        </div>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-2 p-5 text-right'>
        {books.map((book, i) => (
          <BookProfile
            Bookname={book.title}
            Bookauthor={book.author}
            Bookpages={book.pages}
            Bookdescription={book.description}
            Bookimage={book.cover}
            Bookcategory={book.genre}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionProfile;
