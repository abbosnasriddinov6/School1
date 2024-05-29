import { car } from '@/assets'
import Image from 'next/image'
import React from 'react'
import '../../scss/pages/About.scss'
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
        <div className="container">
          <div className="beautiful">
            <div className="beaty">
              <div className="word">
                <img src="" alt="topolmadim" />
                <h1>Maktabimizda farzandingizning psixologik, aqliy va jismoniy rivojlanishi uchun barcha shart-sharoitlar mavjud</h1>
              </div>
              <div className="backround"></div>
              <div className="bbutton">
                <button>Batafsil</button>
              </div>
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
      
    </>
  )
}

export default About