import React, { useState } from 'react';

// import houseData
import { housesData } from '../data';
//  useParams
import { useParams } from 'react-router-dom';
// import icons
import {AiFillCar} from 'react-icons/ai';
import {BsBag,BsPeopleFill} from 'react-icons/bs';


//import datepicker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = housesData.find((house) => {
    return house.id === parseInt(id);
  });

    // date state
    const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='container mx-auto min-h-[800px] mb-14'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2xl font-semibold'>{property.name}</h2>
          <h3 className='text-lg mb-4'>{property.address}</h3>
        </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
          <div className='bg-rose-500 rounded-lg text-white px-3 inline-block'>
            {property.type}
          </div>
          <div className='bg-cyan-600 rounded-lg text-white px-3 inline-block'>
            {property.country}
          </div>
        </div>
        <div className='text-3xl font-semibold text-cyan-600'>
        $ {property.price} <span className='text-lg'>/Day</span>
        </div>
      </div>
      <div className='flex flex-col items-start gap-8 lg:flex-row'>
        <div className='max-w-[768px]'>
          <div className='mb-8'>
            <img src={property.imageLg} className='lg:w-[768px] lg:h-[560px] sm:w-full sm-h-full' alt='' />
          </div>
          <div className='flex gap-x-6 text-cyan-600 mb-6'>
            <div className='flex gap-x-2 items-center'>
              <AiFillCar className='text-2xl' />
              <div className='text-lg font-medium'>{property.automatic}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BsPeopleFill className='text-2xl' />
              <div className='text-lg font-medium'><span className='flex flex-row gap-1'>{property.people} <span className='hidden xl:flex lg:flex'>People</span></span></div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BsBag className='text-2xl' />
              <div className='text-lg font-medium'><span className='flex flex-row gap-1'>{property.bag} <span className='hidden xl:flex lg:flex'>Bags</span></span></div>
            </div>
          </div>
          <p>{property.description}</p>
          <br></br>
          <h4 className='text-lg font-medium'> Features : {property.features}</h4>
        </div>
        <div className='flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
          <form  action="https://getform.io/f/2706633e-5d59-457c-a853-10106ebeccc4 " method="POST" className='flex flex-col gap-y-4'>
            <input
              className='border border-gray-300 focus:border-cyan-700 rounded w-full px-4 h-12 text-sm outline-none'
              type='text'
              placeholder='Name'
              name="name"
              required
              autoComplete='off'
            />
            <input
              className='border border-gray-300 focus:border-cyan-700 rounded w-full px-4 h-12 text-sm outline-none'
              type='text'
              placeholder='Email'
              name="e-mail"
              required
              autoComplete='off'
            />
            <input
              className='border border-gray-300 focus:border-cyan-700 rounded w-full px-4 h-12 text-sm outline-none'
              type='text'
              placeholder='Phone'
              name="ph-no"
              required
              autoComplete='off'
            />
            {/*Pick up and Drop Off */}
              <div className='flex  flex-row items-center gap-x-[10px] font-sm text-slate-500 text-sm mb-3'>
                <div className="w-1/2">Pick Up Date:</div>
                <DatePicker
                className='border border-gray-300 focus:border-cyan-700 rounded w-3/4 px-4 h-12 text-sm outline-none'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                name="date-picker1"
                placeholderText='Pick-Up Date'
                required
              />
              </div>
              <div className='flex  flex-row items-center gap-x-[10px] font-sm text-slate-500 text-sm mb-3'>
                <div className="w-1/2">Drop Off Date:</div>
                <DatePicker
                className='border border-gray-300 focus:border-cyan-700 rounded w-3/4 px-4 h-12 text-sm outline-none'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                name="date-picker2"
                placeholderText='Pick-Up Date'
                required
              />
              </div>
              {/*Location Selector*/}
              <div className='flex  flex-row items-center gap-x-[10px] font-sm text-slate-500 text-sm mb-3'>
                <div className="w-1/3">Location:</div>
                <select
                required
                name="location"
                className="border border-gray-300 focus:border-cyan-700 rounded w-full px-4 h-12 text-sm outline-none'">
                    <option value="Vancouver">Vancouver</option>
                    <option value="Toronto">Toronto</option>
                    <option value="Ottawa">Ottawa</option>
                </select>
              </div>
            {/*Rental type*/}
            <input
              className='border border-gray-300 focus:border-cyan-700 rounded w-full px-4 h-12 text-sm outline-none'
              type='text'
              placeholder='Type of Car Rental'
              name="car-name"
              required
              autoComplete='off'
            />
             {/*Message*/}
            <textarea
              className='border border-gray-300 focus:border-cyan-700 rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none'
              type='text'
              placeholder='Message'
              autoComplete='off'
            />

              <button
                className=' capitalize bg-cyan-600  hover:bg-cyan-700 text-white rounded p-4 text-sm w-full transition'
                type='submit'
              >
                Start a Reservation
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
