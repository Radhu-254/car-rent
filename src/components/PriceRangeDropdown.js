import React, { useState, useEffect, useContext } from 'react';

// import icons
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';
// import headless ui components
import { Menu } from '@headlessui/react';
// import context
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Price range (All)',
    },
    {
      value: '70 - 100',
    },
    {
      value: '100 - 150',
    },
    {
      value: '150- 200',
    },
    {
      value: '200 - 250',
    },
    {
      value: '250 - 300',
    },
  ];

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full'
      >
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Choose the Price Range</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => setPrice(price.value)}
              key={index}
              className='cursor-pointer hover:text-cyan-700 transition'
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
