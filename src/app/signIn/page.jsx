import React from "react";
import googleLogo from "../../../public/images/logo_google_g_icon.svg";
import facebookLogo from "../../../public/images/facebook.svg";
import leftArrow from "../../../public/images/left-arrow-svgrepo-com.svg";
import Image from 'next/image'
import Link from 'next/link'

function SignIn() {
  return (
    <div>
      <section class="relative bg-white overflow-hidden">
        <Link to="/home">
          <Image
            class="absolute lg:left-20 lg:top-20 transition left-5 top-2 lg:h-10 lg:w-10 h-8 w-8 cursor-pointer z-20"
            src={leftArrow}
            alt=""
            width="100"
            height="100"
          />
        </Link>
        <div class="relative z-10 flex justify-center flex-wrap -m-8">
          <div class="w-full md:w-1/2 p-8">
            <div class="p-4 py-16 flex flex-col justify-center bg-blueGray-100 h-full">
              <form class="md:max-w-lg mx-auto">
                <label class="block mb-4">
                  <p class="mb-2 text-gray-900 font-semibold leading-normal">
                    البريد الالكتروني *
                  </p>
                  <input
                    class="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                    id="signInInput1-1"
                    type="text"
                    placeholder="دخل البريد الاكتروني"
                  />
                </label>
                <label class="block mb-5">
                  <p class="mb-2 text-gray-900 font-semibold leading-normal">
                    الرمز السري *
                  </p>
                  <input
                    class="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                    id="signInInput1-2"
                    type="password"
                    placeholder="********"
                  />
                </label>
                <div class="flex flex-wrap justify-between -m-2 mb-4">
                  <div class="w-auto p-2">
                    <div class="flex items-center">
                      <input
                        class="w-4 h-4"
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                      />
                      <label
                        class="ml-2 text-sm text-gray-900 font-medium"
                        for="default-checkbox"
                      >
                        تذكر حسابي
                      </label>
                    </div>
                  </div>
                  <div class="w-auto p-2">
                    <a
                      class="text-sm text-orange-500 hover:text-orange-700 font-medium"
                      href="#"
                    >
                      نسيت الرمز السري؟
                    </a>
                  </div>
                </div>
                <button
                  class="mb-9 py-4 px-9 w-full text-black font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-yellow-500 hover:bg-yellow-600 transition ease-in-out duration-200"
                  type="button"
                >
                  سجل الدخول
                </button>
                <p class="mb-5 text-sm text-gray-500 font-medium text-center">
                  :او اكمل من خلال
                </p>
                <div class="flex flex-wrap justify-center -m-2">
                  <div class="w-auto p-2">
                    <button class="flex items-center p-4 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200">
                      <Image class="mr-3 h-10 w-10" src={googleLogo} alt=""
                        width="100"
                        height="100"
                      />
                      <span class="font-semibold leading-normal">
                        سجل مع حساب كوكل
                      </span>
                    </button>
                  </div>
                  <div class="w-auto p-2">
                    <button class="flex items-center p-4 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200">
                      <Image class="mr-3 h-10 w-10" src={facebookLogo} alt=""
                        width="100"
                        height="100"
                                      />
                      <span class="font-semibold leading-normal">
                        سجل مع حساب فيسبوك
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
