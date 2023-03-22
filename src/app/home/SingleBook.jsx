import React from "react";
import  Link  from "next/link";
import Image from 'next/image'


function SingleBook({ src, name, pageNumber, author, link }) {
  return (
    <div className="w-screen m-3 text-right">
      <div className="lg:w-full lg:h-fit bg-gray-100 flex justify-center items-center">
        <div className="container flex justify-center flex-wrap">
          <div className="lg:w-full">
            <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg ">
              <div className="justify-center items-center text-center flex flex-wrap">
                <Link href="/bookProfile">
                  <Image
                    className="rounded-t-lg w-72 h-96"
                    src={src}
                    alt="bookImg"
                    objectFit="cover"
                    width="100"
                    />
                </Link>
              </div>
              <div className="py-6 px-8 rounded-lg bg-white flex flex-col justify-end w-72 h-60">
                <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer ">
                  {name}
                </h1>
                <p className="text-gray-700 tracking-wide">{author}</p>
                <p className="text-gray-700 tracking-wide">{pageNumber}</p>
                <p className="text-gray-700 tracking-wide">
                  للتحميل:{" "}
                  <a
                    href={link}
                    target="_blank"
                    className="text-gray-700 tracking-wide font-bold cursor-pointer"
                  >
                    هنا
                  </a>
                </p>
                <div className="space-x-2">
                  <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    أساسيات
                  </button>
                  <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    مقدمة طلب العلم
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBook;