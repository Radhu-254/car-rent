import React from 'react';

import Image from '../assets/img/banner.avif';
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <p className='max-w-[480px] mb-4 text-xl'>
          JUST RENT IT
          </p>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            Drive the<br></br> <span className='text-cyan-600'>Car</span> you want
          </h1>
          <p className='max-w-[480px] mb-8 text-lg'>
          Rent a car just from your fingertip.<br></br>
          We provide awesome cars at great prices.
          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt='' />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
