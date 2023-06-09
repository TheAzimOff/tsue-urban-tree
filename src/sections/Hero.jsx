import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='relative' id='home'>
      <div
        aria-hidden='true'
        className='absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20'
      >
        <div className='blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700'></div>
        <div className='blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600'></div>
      </div>
      <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
        <div className='relative pt-36 ml-auto'>
          <div className='lg:w-2/3 text-center mx-auto'>
            <h1 className='text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl'>
              Daraxtkent Map{' '}
              <span className='text-primary dark:text-white'>loyihasi.</span>
            </h1>
            <p className='mt-8 text-gray-700 dark:text-gray-300'>
              Shaharlarda joylashgan har bir daraxtni, ularning turini, bir
              nechta sifatlarini va shuningdek, ularga mas&apos;ullar haqida
              ma&apos;lumot beradigan platforma
            </p>
            <div className='mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6'>
              <Link
                to='/map'
                className='relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max'
              >
                <span className='relative text-base font-semibold text-white'>
                  Xarita
                </span>
              </Link>
              <Link
                to='/more'
                className='relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max'
              >
                <span className='relative text-base font-semibold text-primary dark:text-white'>
                  Ko&apos;proq
                </span>
              </Link>
            </div>
            <div className='hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between'>
              <div className='text-left'>
                <h6 className='text-lg font-semibold text-gray-700 dark:text-white'>
                  E&apos;tibor
                </h6>
                <p className='mt-2 text-gray-500'>
                  Daraxtlarga e&apos;tiborni ko&apos;paytirish
                </p>
              </div>
              <div className='text-left'>
                <h6 className='text-lg font-semibold text-gray-700 dark:text-white'>
                  Xavfsizlik
                </h6>
                <p className='mt-2 text-gray-500'>
                  Har bir daraxt xavfziligi uchun
                </p>
              </div>
              <div className='text-left'>
                <h6 className='text-lg font-semibold text-gray-700 dark:text-white'>
                  Ekologik Madaniyat
                </h6>
                <p className='mt-2 text-gray-500'>
                  Aholining ekologik madaniyatini yuksaltirish
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
