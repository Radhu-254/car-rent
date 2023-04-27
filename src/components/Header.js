import React from 'react';

// import link
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <h1 className='text-black text-3xl font-bold'>Ren<span className='text-cyan-600'>Car.</span></h1>
        </Link>
        <div className='flex items-center gap-6'>
          <h4 className='text-slate-500'>Contact : +91 9925731479</h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
