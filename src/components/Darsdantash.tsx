import { boboy } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Darsdantash = () => {
    return (
        <>
            <div className="lg:my-10 container mx-auto max-w-[1440px] mx-auto   ">
                <div>
                    <h2 className="flex justify-center text-center md:text-[50px] text-[30px] font-semibold mb-4 lg:my-10">Darsdan tashqari mashg'ulotlar</h2>


                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 w-full mx-auto gap-5">
                        <div data-aos="fade-down" className="px-5 bg-[#e5f3ff] rounded-3xl relative group flex flex-col justify-between">
                            <div className="">
                                <i className="fa-solid fa-futbol absolute top-[-10px] left-[-10px] py-4 px-3 md:text-4xl text-xl bg-white text-cyan-400   rounded-full group-hover:rotate-90 duration-500"></i>
                                <h3 className=" pt-16 font-bold ">Sport mashg'ulotlari</h3>
                                <ul className="py-3 ">
                                   <div className='flex items-center gap-[2px]'>
                                    <div className="w-1 h-1 bg-black rounded-full"></div>
                                    <li >Aerobika(batut)</li>
                                   </div>
                                   <div className='flex items-center gap-[2px]'>
                                    <div className="w-1 h-1 bg-black rounded-full"></div>
                                    <li >Taekwondo</li>
                                   </div> 
                                   <div className='flex items-center gap-[2px]'>
                                    <div className="w-1 h-1 bg-black rounded-full"></div>
                                    <li >Qizlar uchun gimnastika</li>
                                   </div>
                                   <div className='flex items-center gap-[2px]'>
                                    <div className="w-1 h-1 bg-black rounded-full"></div>
                                    <li >Futbol</li>
                                   </div>
                                    
                                 
                                </ul>
                            </div>
                            <Image className="rounded-3xl lg:mt-10 bg-contain sm:mt-32 mt-1 py-4 " src={boboy}  alt="" />
                        </div>
                        <div data-aos="fade-down" className="px-5 bg-[#fff7e5] rounded-3xl relative group flex flex-col justify-between">
                            <div className="">
                                <i className="fa-solid fa-futbol absolute top-[-10px] left-[-10px] py-4 px-3 md:text-4xl text-xl bg-white text-pink-400   rounded-full group-hover:rotate-90 duration-500"></i>
                                <h3 className=" pt-16 font-bold ">Madaniy sayohatlar</h3>
                                <ul className="max-w-[300px] py-3">
                                <div className='flex items-start gap-[12px]'>
                                    <div className="w-[6px] h-1 bg-black rounded-full"></div>
                                    <li>Muzey, tog’ va ma’rifiy ko’ngil-ochar maskanlarga ekskursiyalar</li>

                                   </div>
                               

                                   <div className='flex items-center gap-[12px]'>
                                    <div className="w-1 h-1 bg-black rounded-full"></div>
                                    <li>Zavod, o’quv markazlari kabi joylarga sayohatlar</li>
                                   </div>
                                   
                                </ul>
                            </div>









                            <Image className="rounded-3xl lg:mt-10 bg-contain sm:mt-32 mt-1 py-4 " src={boboy} alt="" />
                        </div>
                        <div data-aos="fade-down" className="px-5 bg-[#f3e5ff] rounded-3xl relative group flex flex-col justify-between">
                            <div className="">
                                <i className="fa-solid fa-futbol absolute top-[-10px] left-[-10px] py-4 px-3 md:text-4xl text-xl bg-white text-cyan-400   rounded-full group-hover:rotate-90 duration-500"></i>
                                <h3 className=" pt-16 font-bold">Tadbir</h3>
                                <ul className='py-3'>
                                    <li>Psixologimiz har oy ota-onalar bilan bogʻlanib fikr almashishadi</li>
                                    <li>Kurator boshlang’ich sinf ota-onalari bilan aloqada bo’ladi</li>
                                    <li>O’rta va katta sinflar uchun tarbiyachi ota-onalar bilan ishlaydi</li>
                                    <li>Yilda faqatgina 2 marta ota-onalar majlisi</li>
                                </ul>
                            </div>
                            <Image className="rounded-3xl lg:mt-10 bg-contain sm:mt-32 mt-1 py-4 " src={boboy} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Darsdantash