import React from 'react'
import Quran from './quran'
import SingleBook from './SingleBook'
import alkitabLogo from "../../assets/images/alkitabLogo.png"
import notificationBell from "../../assets/images/notification-bell-svgrepo-com.svg"
import tatheralsameh from '../../assets/images/Tathkraalsameh.webp';
import kitabAlelm from "../../assets/images/kitabAlelm.jpg"
import alelmWfathlih from "../../assets/images/alelmWfathlih.webp"
import huliaTablibAlem from "../../assets/images/huliaTablibAlem.jpg"


function Home() {
  return (
    <div>
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
    </div>
    )
}

export default Home