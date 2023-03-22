import React from "react";

function QuranTools({ name, btn, content }) {
  return (
    <div>
      <div class="flex justify-center m-2">
        <div class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {name}
          </h5>
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {content}
          </p>
          <button
            type="button"
            class="text-white bg-yellow-500  inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuranTools;
