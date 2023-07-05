'use client';
import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { auth } from '../../../services/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  collection,
  doc,
  updateDoc,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { database } from '../../../services/firebaseConfig';

function ChaptersCheckList() {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [user] = useAuthState(auth); // Firebase authentication state
  const updateUserReadingProgress = async () => {
    try {
      const userDocRef = doc(collection(database, 'users'), user.uid);
      await updateDoc(userDocRef, {
        readingProgress: { currentProgress },
      });
      console.log('Reading progress updated successfully!');
    } catch (error) {
      console.error('Error updating reading progress: ', error);
    }
  };

  const handleIncrease = () => {
    if (currentProgress === 100) {
      return;
    }
    const newProgress = currentProgress + 10;
    setCurrentProgress(newProgress);
    updateUserReadingProgress(); // Call the function to update Firebase data
  };

  const handleDecrease = () => {
    if (currentProgress === 0) {
      return;
    }
    const newProgress = currentProgress - 10;
    setCurrentProgress(newProgress);
    updateUserReadingProgress(); // Call the function to update Firebase data
  };

  useEffect(() => {
    if (user) {
      // Perform necessary actions when the user is available
      updateUserReadingProgress();
    }
  }, [user, currentProgress]); // Trigger the effect whenever the user object or currentProgress changes

  return (
    <div>
      <div className='px-5 flex flex-col justify-center items-center'>
        <h3 className='mb-4 font-semibold '>الفصول</h3>
        <p className='mb-4 '>الفصل = 10% من الكتاب</p>
        <div>
          <CircularProgressbar
            value={currentProgress}
            text={`${currentProgress}%`}
            minValue={0}
            maxValue={100}
          />
        </div>
        <div className='pt-5'>
          <button
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'
            type='button'
            onClick={() => handleIncrease()}
          >
            +
          </button>
          <button
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r'
            type='button'
            onClick={() => handleDecrease()}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChaptersCheckList;
