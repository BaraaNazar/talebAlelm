import React from 'react';
import NavBar from '../Navbar/NavBar';
import BookDetails from './BookDetails';
import BookRating from './BookRating';
import ChaptersCheckList from './ChaptersCheckList';
import BookProfileprogress from './BookProfileprogress';

function BookProfile() {
  return (
    <div className='flex flex-col'>
      <div className='flex lg:flex-row flex-col lg:justify-end justify-center text-right'>
        <div className='h-full'>
          <BookDetails />
        </div>
        <div>
          <ChaptersCheckList />
          <BookProfileprogress
            progressPercentage={`45%`}
            progressWidth={`45%`}
          />
        </div>
      </div>
      <div>
        <BookRating />
      </div>
      <div className='h-10'></div>
      <NavBar />
    </div>
  );
}

export default BookProfile;
