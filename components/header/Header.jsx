"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import img from '@/public/img/465470883_122127128138473219_1202954897310789873_n.jpg'
function Header() {
    const [showMenu, setShowMenu] = useState(false);
  return (
   <>
<header
  className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg"
>
  <div className="px-4">
    <div className="flex items-center justify-between">
      <div className="flex shrink-0">
        <Link aria-current="page" className="flex items-center" href="/">
          <Image
            className="h-10 w-auto rounded-full"
            src={img}
            alt="Website Logo"
          />
          <p className="sr-only">Website Title</p>
        </Link>
      </div>

   
      <div className="flex md:hidden">
        <button
          type="button"
          className="text-gray-900 focus:outline-none"
          onClick={() => setShowMenu(!showMenu)}
        >
         
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      
      <div className={`hidden md:flex md:items-center md:justify-center md:gap-5 ${showMenu ? 'block' : 'hidden'}`}>
        <Link
          aria-current="page"
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
          Home
        </Link>
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
        About
        </Link>
      
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
         Services
        </Link>
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
       Team
        </Link>
        <Link
          aria-current="page"
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
          Gallery
        </Link>
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
        Contacts
        </Link>
      </div>
    </div>

    
    {showMenu && (
      <div className="md:hidden mt-3 space-y-2">
        <Link
          aria-current="page"
          className="block w-full rounded-lg px-3 py-2 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
          Home
        </Link>
        <Link
          aria-current="page"
          className="block w-full rounded-lg px-3 py-2 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
          About
        </Link>
        <Link
          aria-current="page"
          className="block w-full rounded-lg px-3 py-2 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
          Team
        </Link>
        <Link
          aria-current="page"
          className="block w-full rounded-lg px-3 py-2 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
          Services
        </Link>
        <Link
          aria-current="page"
          className="block w-full rounded-lg px-3 py-2 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
          Gallery
        </Link>
        <Link
          className="block w-full rounded-lg px-3 py-2 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
         Contacts
        </Link>
      </div>
    )}
  </div>
</header>

   
   </>
  )
}

export default Header