import { boboy, car, opacha } from '@/assets'
import Image from 'next/image'
import React from 'react'

import '../../scss/pages/About.scss'
import Darsdantash from '@/components/Darsdantash'
import MaxsusTalim from '@/components/MaxsusTalim'
import Qoshimcha from '@/components/Qoshimcha'
const About = () => {
  return (
    <>
      <div className='Section3 px-3'>
        <div className='container'>
          <div data-aos="zoom-in" className=" lg:flex-row flex flex-col-reverse gap-3">
            <div className='leftside'>

              <h1 className='font-bold hidden lg:block text-[50px] font-bold pt-4 my-8'>Maktab haqida</h1>
              <p className='lg:max-w-[800px] px-3 lg:px-0'>Maktabimiz zamonaviy o'qitish texnikasi, amaliy o'rganish tajribasi va tarbiyaviy muhitni o'z ichiga olgan holda ta'limga innovatsion yondashuvni ta'minlashga qaratilgan. Rahimov School o‘quvchilarga o‘z imkoniyatlarini to‘liq ochib berish va har tomonlama barkamol shaxs bo‘lib yetishishlariga yordam beradi.</p>
             
              <h2 className='text-green-600 font-bold text-2xl py-4'>Chuqurlashtirilgan fanlar:</h2>
              <div className='flex gap-4'>
                <div className='english'>
                  <h3 className='bg-blue-200  px-5 py-2 rounded-lg text-xl font-semibold'>Ingliz tili</h3>
                </div>
                <div className='math'>
                  <h3 className='bg-pink-200  px-5 py-2 rounded-lg text-xl font-semibold'>Matematika</h3>
                </div>
              </div>
              <h2 className='my-3 text-2xl text-green-600 font-bold'>Taʼlim tili:</h2>
              <div className='h3ozi'>
                <h3 className='bg-blue-200 px-4 py-4 text-lg my-3 rounded-lg max-w-[430px] font-semibold text-center'>Boshlangʻich sinfda: o'zbek va rus tillarida</h3>
              </div>
              <div className='div'>
                <h4 className='px-4'>*5-sinfdan faqat oʻzbek tilida</h4>
              </div>
            </div>
            <div className='xl:rightside flex flex-col items-center'>
              <div className='lg:hidden  flex justify-center text-[30px] font-bold my-4'><h3>Maktab haqida</h3></div>
              <Image className='w-full h-full rounded-3xl' src={car} alt="" />
            </div>
          </div>
        </div>



      </div>
      <div className="Infra">
        <div className="container">
          <div className="infra">
            <div className='tuzilma'>
              <h1>Maktab infratuzilmasi</h1>
            </div>
            <div className="dars">
              <div className="rasmmas">
                <div className='ortaga'>
                  <div className="xona">
                    <p className='plar1 '>18 ta dars xona</p>
                    <p className='plar2 ' >1ta kompyuter laboratoriyasi</p>
                  </div>
                  <div className="xona">
                    <p className='plar3 '>2 ta meditatsiya xonasi</p>
                    <p className='plar4 '>Faollar zali</p>
                  </div>
                  <div className="xona">
                    <p className='plar5 '>Laboratoriya</p>
                    <p className='plar6 '>Kutubxona</p>
                    <p className='plar7 '>Studiya</p>
                  </div>
                  <div className="xona">
                    <p className='plar8 '>Batut</p>
                    <p className='plar9 '>Sport zali</p>
                    <p className='plar10 '>Futbol maydoni</p>
                  </div>
                  <div className="xona">
                    <p className='plar11 '>Skaladrom</p>
                    <p className='plar12 '>Transport xizmati</p>
                  </div>
                  <div className="xona">
                    <p className='plar13'>24/7 xavfsizlik</p>
                  </div>
                </div>
              </div>
              <div className="rasmun">
                <div className="uy"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 mx-auto  max-w-[1440px] ">
        <div className="flex items-center gap-5">
          <div data-aos="fade-right" className="grid xs:grid-cols-2 xl:grid-cols-1 gap-5">

            <div className="my-10  max-w-[1800px] mx-10 ">
              <h2 className="flex w-full justify-center lg:text-[50px] text-[30px] py-4 font-semibold">Nima uchun bizning maktab?</h2>
              <div className="flex items-center gap-5 w-full">
                <div className="grid xl:grid-cols-2 sm:grid-cols-2 w-full  gap-5">
                  <div className="bg-[#e5f3ff] sm:py-8 py-5 px-5 rounded-2xl  relative group">

                    <i className="fa-solid fa-star-of-life absolute text-red-600 top-[-13px] left-[-5px] md:text-4xl text-xl bg-white rounded-full group-hover:rotate-180 duration-500 px-4 py-2"></i>
                    <h4 className="font-semibold my-2 font-bold text-">Bolaning asl potensialini kashf qilamiz</h4>
                    <p>Har bir bolaning o’z dunyosi bor, va bizning dasturimiz uning shu dunyosidagi qobiliyati, kuchli jihatlari va qiziqishlarini yanada rivojlantirishga qaratilgan</p>
                  </div>
                  <div className="bg-[#fff7e5] sm:py-8 py-5 px-5 rounded-2xl relative group">
                    <i className="fa-solid fa-certificate absolute text-green-400 top-[-13px] left-[-5px] md:text-4xl text-xl bg-white rounded-full group-hover:rotate-180 duration-500 px-4 py-2"></i>
                    <h4 className="font-semibold my-2 font-bold text-">Farzandingizning o'qishga bo'lgan qiziqishini uyg'otamiz</h4>
                    <p>Bizning o'quvchilarimiz har tomonlama yetuk, o'ziga ishonadigan individual shaxs sifatida va kelajakdagi muqarrar to'siq va imkoniyatlarga tayyor holatda yetishib chiqishadi

                    </p>
                  </div>
                  <div className="bg-[#e5fff1] sm:py-8 py-5 px-5 rounded-2xl relative group">
                    <i className="fa-solid fa-virus absolute text-slate-400 top-[-13px] left-[-5px] md:text-4xl text-xl bg-white rounded-full group-hover:rotate-180 duration-500 px-4 py-2"></i>
                    <h4 className="font-semibold my-2 font-bold text-">Kelajakka tayyorlaymiz</h4>
                    <p>1-sinfdan boshlab zararli odatlarni bartaraf etib, foydali odatlarni shakllantiramiz. Duo olish, kattalarga hurmat, erta turish, sport va ovqatlanish odoblarini vazifa qilib beramiz va doimiy ota-onalar bilan birgalikda nazorat qilamiz
                    </p>
                  </div>
                  <div className="bg-[#f3e5ff] sm:py-8 py-5 px-5 rounded-2xl relative group">

                    <i className="fa-solid fa-virus absolute text-orange-400 top-[-13px] left-[-5px] md:text-4xl text-xl bg-white rounded-full group-hover:rotate-180 duration-500 px-4 py-2"></i>
                    <h4 className="font-semibold my-2 font-bold text-">Qadriyatlarni shakllantiramiz</h4>
                    <p>Farzandingizning oʻqishga bo'lgan qiziqishini uygʻotamizO'quv jadvalimiz bolani bilim olishga bo'lgan qiziqishini paydo qiladi va uni hayotning barcha jabhalarida muvaffaqiyatga erishishi uchun tayyorlaydi
                    </p>
                  </div>
                </div>
                <div className="xl:h-[482px] hidden xl:block xl:w-[700px]"  >
                  <Image src={opacha} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <Darsdantash />
      <MaxsusTalim />
      <Qoshimcha />
    </>
  )
}

export default About