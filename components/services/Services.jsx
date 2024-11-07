import React from 'react'
import orsuli from '@/public/img/serv/2.jpg'
import Image from 'next/image'
import rame from '@/public/img/serv/1.jpg'
function Services() {
  return (
<div className=" spa-price  md:px-0">
  <div className="mb-[50px] text-center">
    <h2 className="text-[#0f1b48] leading-[80px] text-[50px] md:text-[70px] font-[600px]">Services</h2>
  </div>
  <div className="justify-center gap-10 items-center flex flex-wrap">
    <div className="w-full sm:w-1/2 md:w-1/3 px-2">
      <ul className="m-0 p-0 list-none">
        <li className="flex flex-col sm:flex-row  mb-3">
          <div className="w-full  md:w-[200px] min-w-[200px] mb-3 sm:mb-0">
            <Image src={rame} alt="Pregnancy Massage" />
          </div>
          <div className="pl-3">
            <h1 className="text-[20px] font-serif font-bold flex justify-between mb-2 text-[#0f1b48]">
              <p className="text-[20px] text-[#232323]">Massages for couple</p>
              <span className="text-[20px] font-serif font-bold flex mb-2 text-[#0f1b48]">$15.00</span>
            </h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </li>
        <li className="flex flex-col sm:flex-row  mb-3">
          <div className="w-full  md:w-[200px] min-w-[200px] mb-3 sm:mb-0">
            <Image src={orsuli} alt="Pregnancy Massage" />
          </div>
          <div className="pl-3">
            <h1 className="text-[20px] font-serif font-bold flex justify-between mb-2 text-[#0f1b48]">
              <p className="text-[20px] text-[#232323]">Pregnancy Massage</p>
              <span className="text-[20px] font-serif font-bold flex mb-2 text-[#0f1b48]">$15.00</span>
            </h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </li>
        <li className="flex flex-col sm:flex-row  mb-3">
          <div className="w-full  md:w-[200px] min-w-[200px] mb-3 sm:mb-0">
            <Image src={rame} alt="Pregnancy Massage" />
          </div>
          <div className="pl-3">
            <h1 className="text-[20px] font-serif font-bold flex justify-between mb-2 text-[#0f1b48]">
              <p className="text-[20px] text-[#232323]">Pregnancy Massage</p>
              <span className="text-[20px] font-serif font-bold flex mb-2 text-[#0f1b48]">$15.00</span>
            </h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </li>
      </ul>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 px-2">
      <ul className="m-0 p-0 list-none">
        <li className="flex flex-col sm:flex-row  mb-3">
          <div className="w-full  md:w-[200px] min-w-[200px] mb-3 sm:mb-0">
            <Image src={rame} alt="Pregnancy Massage" />
          </div>
          <div className="pl-3">
            <h1 className="text-[20px] font-serif font-bold flex justify-between mb-2 text-[#0f1b48]">
              <p className="text-[20px] text-[#232323]">Massages for couple</p>
              <span className="text-[20px] font-serif font-bold flex mb-2 text-[#0f1b48]">$15.00</span>
            </h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </li>
        <li className="flex flex-col sm:flex-row  mb-3">
          <div className="w-full  md:w-[200px] min-w-[200px] mb-3 sm:mb-0">
            <Image src={orsuli} alt="Pregnancy Massage" />
          </div>
          <div className="pl-3">
            <h1 className="text-[20px] font-serif font-bold flex justify-between mb-2 text-[#0f1b48]">
              <p className="text-[20px] text-[#232323]">Pregnancy Massage</p>
              <span className="text-[20px] font-serif font-bold flex mb-2 text-[#0f1b48]">$15.00</span>
            </h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </li>
        <li className="flex flex-col sm:flex-row  mb-3">
          <div className="w-full  md:w-[200px] min-w-[200px] mb-3 sm:mb-0">
            <Image src={rame} alt="Pregnancy Massage" />
          </div>
          <div className="pl-3">
            <h1 className="text-[20px] font-serif font-bold flex justify-between mb-2 text-[#0f1b48]">
              <p className="text-[20px] text-[#232323]">Pregnancy Massage</p>
              <span className="text-[20px] font-serif font-bold flex mb-2 text-[#0f1b48]">$15.00</span>
            </h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </li>
      </ul>
    </div>
  
  </div>
</div>


  
  )
}

export default Services