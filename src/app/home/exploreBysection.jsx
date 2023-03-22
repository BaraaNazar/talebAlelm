import React from "react";
import Image from 'next/image'
import Link from 'next/link'

function ExploreBysection({ name, link }) {
  return (
    <div>
      <Link href="/SectionProfile">
      
      <div class="relative rounded-lg shadow-lg cursor-pointer m-2 w-72">
        <Image class="w-full h-48 rounded-md" src={link} alt=""
          width="100"
          height="100"
        />

        <div class="absolute bottom-0 right-0 px-6 py-4 ">
          <button
            type="button"
            class="text-black bg-orange-200  inline-block rounded bg-primary px-4 pt-2 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            {name}
          </button>{" "}
        </div>
      </div>
      </Link>
    </div>
  );
}

export default ExploreBysection;
