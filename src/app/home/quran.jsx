'use client';
import React, { useState } from 'react';
import quarn from '../../../public/images/quran.webp';
import QuranTools from './quranTools';
import Image from 'next/image';

function Quran() {
  return (
    <div className='h-full m-10 '>
      <div className='flex justify-center text-right'>
        <div className='flex flex-col rounded-lg bg-white shadow-lg  md:max-w-xl md:flex-row'>
          <div className='flex flex-col justify-start p-6'>
            <h5 className='text-neutral-800 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer '>
              القرآن
            </h5>
            <p className='mb-4 text-base text-neutral-600 '>
              القران هو كتاب الله واساس العلوم والجامع لاصولها
            </p>
            <p className='mb-4 text-base text-neutral-600 '>
              قال النبي صلى الله عليه وسلم : يقالُ لصاحِبِ القرآنِ اقرَأ وارقَ
              ورتِّل كما كُنتَ ترتِّلُ في الدُّنيا فإنَّ منزلتَكَ عندَ آخرِ آيةٍ
              تقرؤُها
            </p>
          </div>
          <Image
            className='lg:h-96 lg:w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
            src={quarn}
            alt=''
            width='100'
          />
        </div>
      </div>
      <div className='flex lg:flex-row flex-col justify-evenly p-5 text-center'>
        <QuranTools
          name={'برنامج حفظ'}
          btn={'إحفظ'}
          content={
            'أن حفظة القرآن هم أهل الله وخاصته، فقد روى النسائي وابن ماجه وغيرهما من حديث أنس رضي الله عنه أن رسول الله صلى الله عليه وسلم قال: إن لله أهلين من الناس، قالوا: ومن هم يا رسول الله؟ قال: أهل القرآن هم أهل الله وخاصته. والحديث صححه الألباني رحمه الله.'
          }
        />
        <QuranTools
          name={'برنامج الورد اليومي'}
          btn={'إقرأ'}
          content={
            'كلما قرأ العبدُ القرآنَ واستطعم تدبره رسخَ يقينُه، وزاد عطاؤه، واستقرت هدايته، وزالت عنه الشكوك والشبهات . قال في الحديث عليه الصلاة والسلام :( مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ اللَّهِ فَلَهُ بِهِ حَسَنَةٌ ، وَالحَسَنَةُ بِعَشْرِ أَمْثَالِهَا، لَا أَقُولُ الم حَرْفٌ، وَلَكِنْ أَلِفٌ حَرْفٌ ، وَلَامٌ حَرْفٌ ،؟وَمِيمٌ حَرْفٌ ) رواه الترمذي وهو صحيح '
          }
        />
      </div>
    </div>
  );
}

export default Quran;
