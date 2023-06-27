'use client';
import Image from 'next/image';
import { useState, useEffect, use } from 'react';
import { useTheme } from 'next-themes';
import sun from '../../../public/svgs/sun.svg';
import moon from '../../../public/svgs/moon.svg';

function ToggleDarkMode() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleButtonClick = () => {
    setIsSpinning(true);
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setTimeout(() => {
      setIsSpinning(false);
    }, 1500);
  };

  return (
    <div className='grid place-items-center'>
      <div>
        <div className='flex justify-center'>
          <button
            className={`w-fit rounded-md p-4 bg-transparent ${
              isSpinning ? 'animate-bounce' : ''
            }`}
            onClick={handleButtonClick}
          >
            {theme === 'dark' ? (
              <Image
                className='w-12 h-12'
                src={sun}
                alt='logo'
                height='50px'
                width='50px'
              />
            ) : (
              <Image
                className='w-10 h-10'
                src={moon}
                alt='logo'
                height='50px'
                width='50px'
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToggleDarkMode;
