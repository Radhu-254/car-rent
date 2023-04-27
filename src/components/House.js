import React from 'react';
// import icons
import {AiFillCar} from 'react-icons/ai';
import {BsBag,BsPeopleFill} from 'react-icons/bs';



const House = ({ house }) => {
  return (
    <div className='bg-white shadow-1 p-5 rounded-lg  w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-8' src={house.image} alt='' />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-rose-500 rounded-lg text-white px-3 inline-block'>
          {house.type}
        </div>
        <div className='bg-cyan-600 rounded-lg text-white px-3 inline-block'>
          {house.country}
        </div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>{house.address}</div>
      <div className='flex gap-x-4 my-4'>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <AiFillCar />
          </div>
          <div className='text-base'>{house.automatic}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BsPeopleFill />
          </div>
          <div className='text-base'>{house.people}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BsBag />
          </div>
          <div className='text-base'>{house.bag}</div>
        </div>
      </div>
      <div className='text-lg font-semibold text-cyan-600 mb-4'>
        $ {house.price} <span  className='text-sm'>/Day</span>
      </div>
    </div>
  );
};

export default House;
