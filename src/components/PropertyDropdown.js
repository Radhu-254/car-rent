import React, { useState, useContext } from 'react';
// import icons
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
// import headless ui components
import { Menu } from '@headlessui/react';
import {AiFillCar} from 'react-icons/ai';
// import context
import { HouseContext } from './HouseContext';

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <AiFillCar className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {property}
          </div>
          <div className='text-[13px]'>Choose type of Rental</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {properties.map((property, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => setProperty(property)}
              key={index}
              className='cursor-pointer hover:text-cyan-700 transition'
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
