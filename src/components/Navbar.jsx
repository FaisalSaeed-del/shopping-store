import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const items=useSelector((state)=>state.cart)
  return (
    <nav className='bg-gray-900 shadow'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <Link to='/' className='flex-shrink-0 text-white'>
              Accessories Store
            </Link>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline'>
                <Link
                  to='/'
                  className='  text-sm font-medium text-white bg-gray-800'
                >
                  Home
                </Link>
                <Link
                  to='/cart'
                  className='ml-4  rounded-md text-sm font-medium text-white bg-gray-800'
                >
                  Cart
                </Link>
              </div>
            </div>
          </div>
          <div className='hidden md:block'>
            <span className='text-gray-300'>Cart Items: {items.length}</span>
          </div>
        </div>
      </div>
      <div className='md:hidden'>
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          <Link
            to='/'
            className='block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-800'
          >
            Home
          </Link>
          <Link
            to='/cart'
            className='block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-800'
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
