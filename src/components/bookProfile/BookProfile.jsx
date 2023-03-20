import React from 'react'
import NavBar from '../home/navBar'
import BookDetails from './BookDetails'
import BookRating from './BookRating'
import ChaptersCheckList from './ChaptersCheckList'

function BookProfile() {
  return (
    <div className='flex flex-col'>
            <div className='flex lg:flex-row flex-col lg:justify-end justify-center text-right'>
                <div className='h-full'>
                <BookDetails/>
                </div>
                <div>
                <ChaptersCheckList/>
                </div>
    </div>
    <div>

    <BookRating/>
    </div>
    <div className='h-10'></div>
    <NavBar/>
    </div>
    )
}

export default BookProfile