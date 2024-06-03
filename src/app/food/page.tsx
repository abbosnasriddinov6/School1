import { clock, food } from '@/assets'
import Image from 'next/image'
import React from 'react'
import '../../scss/pages/Food.scss'

const Food = () => {
  return (
     <>
      <div className="Section13">
        <div className="container">
          <div className="section13">
            <div className="maktab ">
              <div data-aos="fade-right" className='vaqtga'>
                <div className='soat'>
                  <h1>Maktab vaqtlari</h1>
                  <Image src={clock} alt="" />
                </div>
                <div className='gooo'>
                  <div className='sinflarb1'>
                    <h2>1-11 sinflar</h2>
                  </div>
                  <div className='sinflarb2 '>
                    <p>soat 08:00’dan 17:15’gacha <span>tashkillashtiriladi</span></p>
                  </div>
                  <div className='sinflarb3'>
                    <p>Haftada 5 kun: dushanbadan jumagacha</p>
                  </div>
                </div>
              </div>

              <div data-aos="fade-left" className='rasmga'></div>
            </div>



            <div className="maktab ">
              <div data-aos="fade-right" className='rasmga1'></div>
              <div data-aos="fade-left" className='vaqtga'>
                <div className='soat2'>
                  <Image src={food} alt="" />
                  <h1>Oshxona xizmati</h1>
                </div>
                <div className='gooo'>
                  <div className='sinflarb12'>
                    <h2>1-11 sinflar</h2>
                  </div>
                  <div className="divvv">
                    <div className='sinflarb31'>
                      <p>3 mahal - 790 000 so'm</p>
                      <p>1 mahal - 490 000 so'm</p>
                    </div>
                    <div className='sinflarb31'>
                      <p>Oshxona xizmati uchun to'lov alohida qilinadi</p>
                      <p>O'quvchilar maktab bufetidan yegulik xarid qilishlari
                        <span>yoki uydan olib kelishlari ham mumkin.</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </>
  )
}

export default Food