import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import leftArrow from "../../../public/images/left-arrow-svgrepo-com.svg";
import notificationBell from "../../../public/images/notification-bell-svgrepo-com.svg";

function SectionProfile() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between w-screen">
        <Link href="/home">
          <Image
            class=" transition left-10 top-2 lg:h-10 lg:w-10 h-8 w-8 cursor-pointer"
            src={leftArrow}
            alt=""
            width="100"
            height="100"
          />
        </Link>
        <h1 className="text-3xl font-bold">العقيدة</h1>
        <div className="flex flex-row justify-end items-center">
          <div className="relative  flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 w-[1%] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 hidden"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <span
              className="input-group-text flex whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-8 w-8 text-black"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className="relative flex w-fit">
            <div className="absolute z-10 rounded-full bg-pink-700 p-2 text-xs hidden"></div>
            <div className="flex justify-center rounded-lg text-center">
              <div>
                <Link href="/notification">
                  <Image
                    className="mx-auto w-8"
                    src={notificationBell}
                    alt="notificationBell"
                    width="100"
                    height="100"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 space-y-5 text-right w-screen flex flex-col items-end justify-center">
        <a
          href="#"
          className="flex flex-col items-center bg-white  rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-between p-4 leading-normal space-y-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              كتاب ( فتح الباري شرح صحيح البخاري )
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {" "}
              فتح الباري بشرح صحيح البخاري ألفه الحافظ ابن حجر العسقلاني وهو من
              كتب تفسير الحديث وأجمعها في شرح صحيح البخاري. وهو أهم كتب ابن حجر
              أخذ في جمعه وتأليفه وإملائه وتنقيحه أكثر من خمس وعشرين سنة، حيث
              ابتدأه في أوائل سنة 817هـ، وعمره آنذاك 44 سنة، وفرغ منه في غرة رجب
              من سنة 842هـ فجمع فيه شروح من قبله على صحيح البخاري، باسطاً فيه
              إيضاح الصحيح وبيان مشكلاته، وحكاية مسائل الإجماع، وبسط الخلاف في
              الفقه والتصحيح والتضعيف واللغة والقراءات، مع العناية الواضحة بضبط
              صحيح البخاري ورواياته والتنويه على الفروق فيها، حتى زادت موارد
              الحافظ فيه على (1200) كتاباً من مؤلفات السابقين له
            </p>
            <div className="space-x-2">
              <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                عقيدة
              </button>
              <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                أساسيات
              </button>
            </div>
          </div>
          <Image
            className="object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://upload.wikimedia.org/wikipedia/ar/c/c6/Fatholbari.jpg"
            alt=""
            width="100"
            height="100"
          />
        </a>
        <a
          href="#"
          className="flex flex-col items-center bg-white  rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-between p-4 leading-normal space-y-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              كتاب ( فتح الباري شرح صحيح البخاري )
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {" "}
              فتح الباري بشرح صحيح البخاري ألفه الحافظ ابن حجر العسقلاني وهو من
              كتب تفسير الحديث وأجمعها في شرح صحيح البخاري. وهو أهم كتب ابن حجر
              أخذ في جمعه وتأليفه وإملائه وتنقيحه أكثر من خمس وعشرين سنة، حيث
              ابتدأه في أوائل سنة 817هـ، وعمره آنذاك 44 سنة، وفرغ منه في غرة رجب
              من سنة 842هـ فجمع فيه شروح من قبله على صحيح البخاري، باسطاً فيه
              إيضاح الصحيح وبيان مشكلاته، وحكاية مسائل الإجماع، وبسط الخلاف في
              الفقه والتصحيح والتضعيف واللغة والقراءات، مع العناية الواضحة بضبط
              صحيح البخاري ورواياته والتنويه على الفروق فيها، حتى زادت موارد
              الحافظ فيه على (1200) كتاباً من مؤلفات السابقين له
            </p>
            <div className="space-x-2">
              <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                عقيدة
              </button>
              <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                أساسيات
              </button>
            </div>
          </div>
          <Image
            className="object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://upload.wikimedia.org/wikipedia/ar/c/c6/Fatholbari.jpg"
            alt=""
            width="100"
            height="100"
          />
        </a>
        <a
          href="#"
          className="flex flex-col items-center bg-white  rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-between p-4 leading-normal space-y-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              كتاب ( فتح الباري شرح صحيح البخاري )
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {" "}
              فتح الباري بشرح صحيح البخاري ألفه الحافظ ابن حجر العسقلاني وهو من
              كتب تفسير الحديث وأجمعها في شرح صحيح البخاري. وهو أهم كتب ابن حجر
              أخذ في جمعه وتأليفه وإملائه وتنقيحه أكثر من خمس وعشرين سنة، حيث
              ابتدأه في أوائل سنة 817هـ، وعمره آنذاك 44 سنة، وفرغ منه في غرة رجب
              من سنة 842هـ فجمع فيه شروح من قبله على صحيح البخاري، باسطاً فيه
              إيضاح الصحيح وبيان مشكلاته، وحكاية مسائل الإجماع، وبسط الخلاف في
              الفقه والتصحيح والتضعيف واللغة والقراءات، مع العناية الواضحة بضبط
              صحيح البخاري ورواياته والتنويه على الفروق فيها، حتى زادت موارد
              الحافظ فيه على (1200) كتاباً من مؤلفات السابقين له
            </p>
            <div className="space-x-2">
              <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                عقيدة
              </button>
              <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                أساسيات
              </button>
            </div>
          </div>
          <Image
            className="object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://upload.wikimedia.org/wikipedia/ar/c/c6/Fatholbari.jpg"
            alt=""
            width="100"
            height="100"
          />
        </a>
      </div>
    </div>
  );
}

export default SectionProfile;
