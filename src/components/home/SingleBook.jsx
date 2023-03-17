import React from 'react'

function SingleBook({src, name, pageNumber, author, link}) {
  return (
    <div className='w-screen m-3 text-right'>

<div className="w-full h-fit bg-gray-100 flex justify-center items-center">
  <div className="container flex justify-center">
    <div className="w-full">
      <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
        <img className="rounded-t-lg h-96 w-full" src={src} alt="bookImg" />
        <div className="py-6 px-8 h-60 rounded-lg bg-white flex flex-col justify-end">
          <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer ">{name}</h1>
          <p className="text-gray-700 tracking-wide">{author}</p>
          <p className="text-gray-700 tracking-wide">{pageNumber}</p>
          <p className="text-gray-700 tracking-wide">للتحميل: <a href={link} target="_blank" className="text-gray-700 tracking-wide font-bold cursor-pointer">هنا</a></p>
            <div className='space-x-2'>
            <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">أساسيات</button>
          <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">مقدمة طلب العلم</button>

            </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default SingleBook
