import React from 'react';

function ProgressBar({ sectionName, progressWidth, progressPercentage }) {
  return (
    <div>
      <div class='flex justify-between mb-1'>
        <span class='text-base font-medium text-blue-700 dark:text-white'>
          {sectionName}
        </span>
        <span class='text-sm font-medium text-blue-700 dark:text-white'>
          {progressPercentage}
        </span>
      </div>
      <div class='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
        <div
          class='bg-blue-600 h-2.5 rounded-full'
          style={{ width: progressWidth }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
