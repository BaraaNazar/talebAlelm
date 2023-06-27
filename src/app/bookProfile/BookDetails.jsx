import React from 'react';
import Image from 'next/image';

function BookDetails() {
  return (
    <div className='text-right'>
      <div className='py-16  '>
        <div className='container m-auto px-6  md:px-12 xl:px-6'>
          <div className='space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
            <div className='md:7/12 lg:w-6/12'>
              <h2 className='text-lg  font-bold md:text-xl'>
                {' '}
                كتاب ( فتح الباري شرح صحيح البخاري )
              </h2>
              <p className='mt-4 text-sm md:text-base'>
                فتح الباري بشرح صحيح البخاري ألفه الحافظ ابن حجر العسقلاني وهو
                من كتب تفسير الحديث وأجمعها في شرح صحيح البخاري. وهو أهم كتب ابن
                حجر أخذ في جمعه وتأليفه وإملائه وتنقيحه أكثر من خمس وعشرين سنة،
                حيث ابتدأه في أوائل سنة 817هـ، وعمره آنذاك 44 سنة، وفرغ منه في
                غرة رجب من سنة 842هـ فجمع فيه شروح من قبله على صحيح البخاري،
                باسطاً فيه إيضاح الصحيح وبيان مشكلاته، وحكاية مسائل الإجماع،
                وبسط الخلاف في الفقه والتصحيح والتضعيف واللغة والقراءات، مع
                العناية الواضحة بضبط صحيح البخاري ورواياته والتنويه على الفروق
                فيها، حتى زادت موارد الحافظ فيه على (1200) كتاباً من مؤلفات
                السابقين له.
              </p>
              <p className='mt-2 text-sm md:text-base'>
                {' '}
                يمكن القول إن الكتاب مر بمرحلتين زمنيتين: أول 5 سنوات: كان ابن
                حجر يؤلف الكتاب فيها عن طريق الإملاء. بعد ذلك: طريقة الشورى: حيث
                اجتمع مع بعض طلبة العلم ذوي الاطلاع لتحرير الكتاب، فكان يكتب ما
                يكتب، ثم يتناقله الطلبة فيما بينهم، ويجتمعون أيضًا في أحد أيام
                الأسبوع لتصحيح ما كتبوا ومناقشته.
              </p>
              <p className=' tracking-wide font-bold'>
                للتحميل:{' '}
                <a
                  href='#'
                  target='_blank'
                  className=' tracking-wide font-bold cursor-pointer underline'
                >
                  هنا
                </a>
              </p>

              <div className='space-x-2'>
                <button className='mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300'>
                  أساسيات
                </button>
                <button className='mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300'>
                  مقدمة طلب العلم
                </button>
              </div>
            </div>
            <div className='md:5/12 lg:w-5/12 md:w-1/2 md:h-fit flex justify-center '>
              <Image
                className=''
                src='https://upload.wikimedia.org/wikipedia/ar/c/c6/Fatholbari.jpg'
                alt='image'
                loading='lazy'
                width='100'
                height='100'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
