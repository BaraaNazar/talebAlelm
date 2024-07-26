'use client';
import { auth } from '../../../services/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { database } from '../../../services/firebaseConfig';
import Quran from './quran';
import SingleBook from './SingleBook';
import tatheralsameh from '../../../public/images/Tathkraalsameh.webp';
import kitabAlelm from '../../../public/images/kitabAlelm.jpg';
import alelmWfathlih from '../../../public/images/alelmWfathlih.webp';
import huliaTablibAlem from '../../../public/images/huliaTablibAlem.jpg';
import ExploreBysection from './exploreBysection';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

function Home() {
  const sections = [
    {
      section: '/Aqeeda',
      name: 'العقيدة',
      link: 'https://kitabat.blog/static/uploads/contents/15967358561d4916273ab0c666806a03b5533728e5.jpg',
    },
    {
      section: '/Hadeeth',
      name: 'الحديث',
      link: 'https://kitabat.blog/static/uploads/contents/15967358561d4916273ab0c666806a03b5533728e5.jpg',
    },
    {
      section: '/Feqih',
      name: 'الفقه',
      link: 'https://kitabat.blog/static/uploads/contents/15967358561d4916273ab0c666806a03b5533728e5.jpg',
    },
    {
      section: '/Alfaraid',
      name: 'الفرائض',
      link: 'https://kitabat.blog/static/uploads/contents/15967358561d4916273ab0c666806a03b5533728e5.jpg',
    },
    {
      section: '/Altafseer',
      name: 'التفسير',
      link: 'https://kitabat.blog/static/uploads/contents/15967358561d4916273ab0c666806a03b5533728e5.jpg',
    },
    {
      section: '/KutubAmma',
      name: 'كتب عامة',
      link: 'https://kitabat.blog/static/uploads/contents/15967358561d4916273ab0c666806a03b5533728e5.jpg',
    },
  ];
  const books = [
    {
      src: tatheralsameh,
      name: 'تذكرة السامع والمتكلم في أدب العالم والمتعلم',
      pageNumber: 'عدد الصفحات: ٢١٥ص',
      author: 'المؤلف: القاضي بدر الدين ابن جماعة',
      link: 'https://www.almeshkat.net/books/archive/books/137603.pdf',
    },
    {
      src: kitabAlelm,
      name: 'كتاب العلم',
      pageNumber: 'عدد الصفحات: ٢٠٦ص',
      author: 'المؤلف: محمد بن صالح العثيمين',
      link: 'https://www.arab-books.com/wp-content/uploads/2021/01/Noor-Book.comD983D8AAD8A7D8A8D8A7D984D8B9D984D9852.pdf',
    },
    {
      src: alelmWfathlih,
      name: 'جامع بيان العلم وفضله',
      pageNumber: 'عدد الصفحات: ١٥٤٨ص',
      author: 'المؤلف: أبو عمر يوسف بن عبد الله النمري المعروف بابن عبد البر',
      link: 'https://upload.wikimedia.org/wikisource/ar/7/73/جامع_بيان_العلم_وفضله.pdf',
    },
    {
      src: huliaTablibAlem,
      name: 'شرح حلية طالب العلم',
      pageNumber: 'عدد الصفحات: ٣٩٧ص',
      author: 'المؤلف: محمد بن صالح العثيمين',
      link: 'https://d1.islamhouse.com/data/ar/ih_books/single_010/ar_Shr7_7leet_talb_Al3lm.pdf',
    },
  ];
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (loading) {
    return (
      <div className='flex justify-center items-center w-full h-screen text-4xl font-bold'>
        Loading...
      </div>
    );
  }
  if (!user) {
    router.push('/signUp');
  }
  const userCollection = collection(database, 'users');
  const userDocRef = doc(userCollection, user.uid);

  getDoc(userDocRef)
    .then((docSnapshot) => {
      if (docSnapshot.exists()) {
        // User document already exists
        console.log('User document already exists for this user');
      } else {
        // User document does not exist, so add it
        const userData = {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          readingProgress: {
            bookId: 'book1',
            currentProgress: `10%`,
          },
          // Add any additional user data you want to store
        };

        setDoc(userDocRef, userData)
          .then(() => {
            console.log('User document created for this user');
          })
          .catch((error) => {
            console.error('Error creating user document: ', error);
          });
      }
    })
    .catch((error) => {
      console.error('Error checking user document: ', error);
    });

  return (
    <>
      <Quran />
      <h1 className='text-3xl text-center font-bold '>
        كتب في بداية طلب العلم
      </h1>

      <div className='w-screen flex justify-center items-center text-center'>
        <Carousel className='flex justify-center items-center w-full max-w-xs shadow-lg p-0 m-0 my-4'>
          <CarouselContent className='p-0'>
            {books.map((book, index) => (
              <CarouselItem key={index}>
                <SingleBook
                  key={index}
                  src={book.src}
                  name={book.name}
                  pageNumber={book.pageNumber}
                  author={book.author}
                  link={book.link}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className='w-screen flex justify-center items-center'>
        <Carousel className='flex justify-center items-center w-full max-w-xs shadow-lg p-0 m-0 my-4'>
          <CarouselContent className='p-0'>
            {sections.map((sectionData, index) => (
              <CarouselItem key={index}>
                <ExploreBysection
                  key={index}
                  section={sectionData.section}
                  name={sectionData.name}
                  link={sectionData.link}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className='h-20'></div>
    </>
  );
}

export default Home;
