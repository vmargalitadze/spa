"use client";
import React from 'react';

import PropertyMap from './PropertyMap';


function Contact() {
  return (
    <>
        <section id="contact" className="py-20 gap-4 ">
        <div className=" text-3xl md:text-5xl mb-2 text-center text-[#a56c6c] font-extrabold">Contact us</div>
        <hr className="w-2/4 m-auto mb-16 h-1 my-2 bg-[#e7b6a1] border-0 rounded-lg md:mb-6" />
        <div className="group gap-4  mx-auto px-4">
          <div className="flex gap-4 gap-4  flex-col lg:flex-row justify-center">
          <aside className="w-full h-full lg:w-4/12 ">
        <PropertyMap />;
            </aside>
            <article className=" p-4  w-full h-full lg:w-4/12   relative  lg:-mr-20 ">
            <div className="md:pr-12 ">
            <ul className=" ">
    <li className="flex">
      <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round" className="h-6 w-6">
          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
        </svg>
      </div>
      <div className="ml-4 mb-4">
        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address</h3>
        <p className="text-gray-600 dark:text-slate-400">მიცკევიჩის ქუჩა 25B,II სადარბაზო, ბინა 28, Tbilisi, Georgia</p>
        <p className="text-gray-600 dark:text-slate-400">Tbilisi, Georgia</p>
      </div>
    </li>
    <li className="flex">
      <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round" className="h-6 w-6">
          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
          <path d="M15 7a2 2 0 0 1 2 2"></path>
          <path d="M15 3a6 6 0 0 1 6 6"></path>
        </svg>
      </div>
      <div className="ml-4 mb-4">
        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact</h3>
        <p className="text-gray-600 dark:text-slate-400">Mobile:597 77 97 90</p>
        <p className="text-gray-600 dark:text-slate-400">Mail: crazymimino@gmail.com</p>
      </div>
    </li>
    <li className="flex">
      <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round" className="h-6 w-6">
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
          <path d="M12 7v5l3 3"></path>
        </svg>
      </div>
      <div className="ml-4 mb-4">
        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working hours</h3>
        <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
        <p className="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
      </div>
    </li>
  </ul>
        </div>
            </article>
         
          </div>
        </div>
      </section>

    
    </>

  )  
  
  
  
}

export default Contact;