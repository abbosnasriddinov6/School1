import { boboy, car, opacha } from '@/assets'
import Image from 'next/image'
import React from 'react'

import '../../scss/pages/About.scss'
import Darsdantash from '@/components/Darsdantash'
const About = () => {
  return (
    <>
      <div className='Section3'>
        <div className='container'>
          <div className="section3">
            <div className='leftside'>
              <h1>Maktab haqida</h1>
              <p>Maktabimiz zamonaviy o'qitish texnikasi, amaliy o'rganish tajribasi va tarbiyaviy muhitni o'z ichiga olgan holda ta'limga innovatsion yondashuvni ta'minlashga qaratilgan. Rahimov School o‘quvchilarga o‘z imkoniyatlarini to‘liq ochib berish va har tomonlama barkamol shaxs bo‘lib yetishishlariga yordam beradi.</p>
              <h2>Chuqurlashtirilgan fanlar:</h2>
              <div className='h3lar'>
                <div className='english'>
                  <h3>Ingliz tili</h3>
                </div>
                <div className='math'>
                  <h3>Matematika</h3>
                </div>
              </div>
              <h2>Taʼlim tili:</h2>
              <div className='h3ozi'>
                <h3>Boshlangʻich sinfda: o'zbek va rus tillarida</h3>
              </div>
              <div className='div'>
                <h4>*5-sinfdan faqat oʻzbek tilida</h4>
              </div>
            </div>
            <div className='rightside'>
              <Image src={car} alt="" />
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
                    <p className='plar1'>18 ta dars xona</p>
                    <p className='plar2'>1ta kompyuter laboratoriyasi</p>
                  </div>
                  <div className="xona">
                    <p className='plar3'>2 ta meditatsiya xonasi</p>
                    <p className='plar4'>Faollar zali</p>
                  </div>
                  <div className="xona">
                    <p className='plar5'>Laboratoriya</p>
                    <p className='plar6'>Kutubxona</p>
                    <p className='plar7'>Studiya</p>
                  </div>
                  <div className="xona">
                    <p className='plar8'>Batut</p>
                    <p className='plar9'>Sport zali</p>
                    <p className='plar10'>Futbol maydoni</p>
                  </div>
                  <div className="xona">
                    <p className='plar11'>Skaladrom</p>
                    <p className='plar12'>Transport xizmati GoBusUz bilan</p>
                  </div>
                  <div className="xona">
                    <p>24/7 xavfsizlik</p>
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
      <div className="mt-10  max-w-[1440px] ">
        <h2 className="flex justify-center lg:text-[50px] text-[30px] py-4 font-semibold">Nima uchun bizning maktab?</h2>
        <div className="flex items-center gap-5">
          <div className="grid xs:grid-cols-2 gap-5">
            <div className="bg-blue-400 sm:py-12 py-5 px-3 rounded-2xl relative group">
              <i className="fa-solid fa-star-of-life absolute text-red-600 top-[-13px] left-[-5px] md:text-4xl text-xl bg-white rounded-full group-hover:rotate-180 duration-500 px-4 py-2"></i>
              <h4 className="font-semibold my-2 ">Bolaning asl potensialini kashf qilamiz</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eos incidunt molestias
                mollitia neque porro qui similique sint! Amet, officia.</p>
            </div>
            <div className="bg-blue-400 sm:py-12 py-5 px-3 rounded-2xl relative group">
              <i className="fa-solid fa-certificate absolute text-green-400 top-[-13px] left-[-5px] md:text-4xl text-xl bg-white rounded-full group-hover:rotate-180 duration-500 px-4 py-2"></i>
              <h4 className="font-semibold my-2 ">Bolaning asl potensialini kashf qilamiz</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eos incidunt molestias
                mollitia neque porro qui similique sint! Amet, officia.</p>
            </div>
            <div className="bg-blue-400 sm:py-12 py-5 px-3 rounded-2xl relative group">
              <i className="fa-solid fa-virus absolute text-slate-400 top-[-13px] left-[-5px] md:text-4xl text-xl bg-white rounded-full group-hover:rotate-180 duration-500 px-4 py-2"></i>
              <h4 className="font-semibold my-2 ">Bolaning asl potensialini kashf qilamiz</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eos incidunt molestias
                mollitia neque porro qui similique sint! Amet, officia.</p>
            </div>
            <div className="bg-blue-400 sm:py-12 py-5 px-3 rounded-2xl relative group">
              <i className="fa-solid fa-virus absolute text-orange-400 top-[-13px] left-[-5px] md:text-4xl text-xl bg-white rounded-full group-hover:rotate-180 duration-500 px-4 py-2"></i>
              <h4 className="font-semibold my-2 ">Bolaning asl potensialini kashf qilamiz</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eos incidunt molestias
                mollitia neque porro qui similique sint! Amet, officia.</p>
            </div>
          </div>
          <div>
            <img className="xl:h-[400px] hidden xl:block xl:w-[700px]" src={ opacha} alt="" />
          </div>
        </div>
      </div>
      <Darsdantash/>
    </>
  )
}

export default About