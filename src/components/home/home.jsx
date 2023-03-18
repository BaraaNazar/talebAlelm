import React from 'react'
import Quran from './quran'
import SingleBook from './SingleBook'
import alkitabLogo from "../../assets/images/alkitabLogo.png"
import notificationBell from "../../assets/images/notification-bell-svgrepo-com.svg"
import tatheralsameh from '../../assets/images/Tathkraalsameh.webp';
import kitabAlelm from "../../assets/images/kitabAlelm.jpg"
import alelmWfathlih from "../../assets/images/alelmWfathlih.webp"
import huliaTablibAlem from "../../assets/images/huliaTablibAlem.jpg"
import ExploreBysection from './exploreBysection';
import NavBar from './navBar'



function Home() {
  return (
    <div>
      <NavBar/>
      <div className='flex p-2 justify-between'>
      <img className='h-fit w-10' src={alkitabLogo} alt="alkitab logo" />
            <div className='flex justify-end'>
        <div className="flex">
  <div className="">
    <div className="relative  flex w-full flex-wrap items-stretch">
      <input
        type="search"
        className="relative m-0 w-[1%] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 hidden"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2" />
      <span
        className="input-group-text flex whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
        id="basic-addon2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-8 w-8 text-black">
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd" />
        </svg>
      </span>
    </div>
  </div>
</div>
<div className="relative flex w-fit">
  <div
    className="absolute z-10 rounded-full bg-pink-700 p-2 text-xs hidden"></div>
  <div
    className="flex justify-center rounded-lg text-center">
    <div>
     <img className="mx-auto w-8" src={notificationBell} alt="notificationBell" />
    </div>
  </div>
</div>
    </div>

      </div>
<Quran/>
<div className='flex overflow-auto'>
  <SingleBook src={tatheralsameh} name={" تذكرة السامع والمتكلم في أدب العالم والمتعلم"} pageNumber={"عدد الصفحات: ٢١٥ص"} author={"المؤلف: القاضي بدر الدين ابن جماعة"} link={"https://www.almeshkat.net/books/archive/books/137603.pdf"}/>
  <SingleBook src={kitabAlelm} name={" كتاب العلم"} pageNumber={"عدد الصفحات: ٢٠٦ص"} author={"المؤلف: محمد بن صالح العثيمين"} link={"https://www.arab-books.com/wp-content/uploads/2021/01/Noor-Book.comD983D8AAD8A7D8A8D8A7D984D8B9D984D9852.pdf"}/>
  <SingleBook src={alelmWfathlih} name={" جامع بيان العلم وفضله"} pageNumber={"عدد الصفحات: ١٥٤٨ص"} author={"المؤلف: أبو عمر يوسف بن عبد الله النمري المعروف بابن عبد البر"} link={"https://upload.wikimedia.org/wikisource/ar/7/73/جامع_بيان_العلم_وفضله.pdf"}/>
  <SingleBook src={huliaTablibAlem} name={"  شرح حلية طالب العلم"} pageNumber={"عدد الصفحات: ٣٩٧ص"} author={"المؤلف: محمد بن صالح العثيمين"} link={"https://d1.islamhouse.com/data/ar/ih_books/single_010/ar_Shr7_7leet_talb_Al3lm.pdf"}/>
</div>
<div className='text-right space-y-5'>
  <h1 className='text-3xl font-bold pr-2'>:التصنيف من خلال الاقسام</h1>
  <div className='overflow-auto flex'>
  <ExploreBysection name={"العقيدة"} link={"https://kitabat.blog/static/uploads/contents/15967358561d4916273ab0c666806a03b5533728e5.jpg"}/>
  <ExploreBysection name={"الحديث"} link={"https://www.gph.gov.sa/media/k2/items/cache/79a0d6a4899b79994a919b2a20690507_XL.jpg?t=20210913_094636"}/>
  <ExploreBysection name={"الفقه"} link={"https://clcdn.spa.gov.sa/image-resizer/h600/galupload/normal/201611/000-749611381479464463169.jpg"}/>
  <ExploreBysection name={"الفرائض"} link={"https://www.wmn.gov.sa/public/photos/80296519.jpg"}/>
  <ExploreBysection name={"تفسير"} link={"https://2.bp.blogspot.com/-KxSuBA8tq1Q/W8GfDS11r6I/AAAAAAAAAKI/NrQgYqUPvHkvSIwAs0AzJnAchM5Mdh8WgCLcBGAs/s1600/%25D9%2585%25D9%2583%25D8%25AA%25D8%25A8%25D8%25A9.png"}/>
  <ExploreBysection name={"كتب عامة"} link={"https://alkafeel.net/news/images/main/931787644b166c7c02551d2052857904.jpg"}/>
  </div>
</div>
<div className='h-20'>

</div>
    </div>
    )
}

export default Home