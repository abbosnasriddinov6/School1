import { boboy } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Darsdantash = () => {
  return (
    <>
          <div className="my-10">
              <div>
                  <h2 className="flex justify-center md:text-[50px] text-[30px] font-semibold my-10">Darsdan tashqari mashg'ulotlar</h2>


                  <div className="grid lg:grid-cols-3 sm:grid-cols-2 w-full mx-auto gap-5">
                      <div className="px-5 bg-pink-300 rounded-3xl relative group">
                          <div className="">
                              <i className="fa-solid fa-futbol absolute top-[-10px] left-[-10px] py-4 px-3 md:text-4xl text-xl bg-white text-cyan-400   rounded-full group-hover:rotate-90 duration-500"></i>
                              <h3 className="font-semibold pt-16">Sport mashg'ulotlari</h3>
                              <ul>
                                  <li>Aerobika(batut)</li>
                                  <li>Taekwondo</li>
                                  <li>Qizlar uchun gimnastika</li>
                                  <li>Futbol</li>
                              </ul>
                          </div>
                          <Image className="rounded-3xl lg:mt-48 bg-contain sm:mt-32 mt-16 py-4 " src={boboy} alt="" />
                      </div>
                      <div className="px-5 bg-green-300 rounded-3xl relative group">
                          <div className="">
                              <i className="fa-solid fa-futbol absolute top-[-10px] left-[-10px] py-4 px-3 md:text-4xl text-xl bg-white text-pink-400   rounded-full group-hover:rotate-90 duration-500"></i>
                              <h3 className="font-semibold pt-16">Sport mashg'ulotlari</h3>
                              <ul>
                                  <li>Aerobika(batut)</li>
                                  <li>Taekwondo</li>
                                  <li>Qizlar uchun gimnastika</li>
                                  <li>Futbol</li>
                              </ul>
                          </div>
                          <img className="rounded-3xl lg:mt-48 bg-contain sm:mt-32 mt-16 py-4 " src={boboy} alt="" />
                      </div>
                      <div className="px-5 bg-cyan-300 rounded-3xl relative group">
                          <div className="">
                              <i className="fa-solid fa-futbol absolute top-[-10px] left-[-10px] py-4 px-3 md:text-4xl text-xl bg-white text-cyan-400   rounded-full group-hover:rotate-90 duration-500"></i>
                              <h3 className="font-semibold pt-16">Sport mashg'ulotlari</h3>
                              <ul>
                                  <li>Aerobika(batut)</li>
                                  <li>Taekwondo</li>
                                  <li>Qizlar uchun gimnastika</li>
                                  <li>Futbol</li>
                              </ul>
                          </div>
                          <img className="rounded-3xl lg:mt-48 bg-contain sm:mt-32 mt-16 py-4 " src={boboy} alt="" />
                      </div>

                  </div>
              </div>
          </div>
    </>
  )
}

export default Darsdantash