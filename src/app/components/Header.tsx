import React from 'react'
import Link from 'next/link'
export const Header = () => {
  return (
    <nav className='border-gray-200 bg-gray-800 text-white dark:bg-gray-800 dark:border-gray-700 shadow'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <a href='#' className='flex items-center space-x-3'>
                <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Blog</span>
            </a>
            <div className='hidden w-full md:block md:w-auto' id='navbar-solid-bg'>
                <ul className='flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent'>
                    <li>
                        <Link href='/' className='block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent hover:text-gray-300' area-current="page">Home</Link>
                    </li>
                    <li>
                        <Link href='/about' className='block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent hover:text-gray-300'>About</Link>
                    </li>
                    <li>
                        <Link href='/contact' className='block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent hover:text-gray-300'>Contact</Link>
                    </li>
                    <li>
                        <Link href='/blog' className='block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent hover:text-gray-300'>Blog</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
