import React from 'react'
import { Link } from 'react-router-dom'
import bookshelf from "../../assets/images/laptop-computer-book-workplace-library-room.jpg"
import googleLogo from "../../assets/images/logo_google_g_icon.svg"

function Index() {
  return (
    <div>
      <div className='flex flex-col text-center h-screen '>
        <div className='h-1/2'>
          <div class="absolute bg-gradient-to-t from-white  w-full h-1/2 opacity-100"></div>
      <img className='object-cover h-full w-full rounded' src={bookshelf} alt="bookshelf" />
        </div>
      <div className='p-5 space-y-5'>
            <h1 className='text-3xl font-bold'>
            <span> 👋 </span>أهلا بكم في برنامج <span className='text-yellow-500'>طالب العلم</span>
            </h1>
            <p>افضل منصة لطلب العلم, بامكانك القراءة ومتابعة ما تتعلمه عن طريق حسابك الخاص</p>
        </div>
        <div className=' flex flex-col justify-center items-center space-y-2 text-lg'>
          <button type="button" className="text-black flex  hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-full px-5 py-2.5 text-center justify-center items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 w-72 border-stone-100 border-2">
          <img className="w-6 h-6 mr-2 -ml-1" src={googleLogo} alt="" />
              سجل مع حساب جوجل
          </button>
          <Link to="/home" className="text-white bg-yellow-500   hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-full px-5 py-2.5 text-center justify-center items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 w-72">
              ابدا الان
          </Link>
          <button type="button" className="text-yellow-500 bg-orange-100  hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-full px-5 py-2.5 text-center justify-center items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 w-72">
              يوجد لدي حساب بالفعل
          </button>
        </div>
      </div>

    </div>
  )
}

export default Index