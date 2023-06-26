import React from 'react';
import Link from 'next/link';
import ExploreBysection from '../home/ExploreBysection';

function Sections() {
  return (
    <div className='p-5'>
      <div className='lg:w-52 p-5'>
        <Link
          className='mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300'
          href='/home'
        >
          الرجوع
        </Link>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1'>
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
  );
}

export default Sections;
