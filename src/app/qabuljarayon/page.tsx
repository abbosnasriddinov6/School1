import React from 'react'
import '../../scss/pages/Qabulj.scss'
import Qabul from '@/components/Qabul'
const Qabuljarayon = () => {
  return (
     <>
          <div className="Qabul">
              <div className="container">
                  <div className="qabul">
                      <div className="jarayon">
                          <h1>Qabul jarayoni</h1>
                      </div>

                      <div className='belgi1'>
                          <div className="strelka1">
                              <div className="fanlar1">
                                  <div className="farzand1">
                                      <h1>Belgilangan fanlardan imtihon</h1>
                                      <p>Farzandingizni imtihon qilib, uni aqliy salohiyatini sinovdan o'tkazamiz</p>
                                  </div>
                                  <div className='number1'>
                                      <button>01</button>
                                  </div>
                              </div>
                          </div>

                      </div>
                      <div className='belgi2'>
                          <div className="strelka2">
                              <div className="fanlar2">
                                  <div className="farzand2">
                                      <h1>Kerakli hujjatlarni taqdim etish</h1>
                                      <p>Kerakli hujjatlarni taqdim etishYuqoridagi bosqichlardan muvaffaqqiyatli o’tgan o'quvchilar hujjat topshirish jarayoniga o'tishlari mumkin bo'ladi</p>
                                  </div>
                                  <div className='number2'>
                                      <button>03</button>
                                  </div>
                              </div>
                          </div>
                          <div className="strelka3">
                              <div className="fanlar3">
                                  <div className="farzand3">
                                      <h1>Psixolog bilan suhbat</h1>
                                      <p>Og’zaki suhbat jarayonida asosan bolaning IQ darajasi, axloqi va tasavvur qobiliyatlarini tekshiramiz</p>
                                  </div>
                                  <div className='number3'>
                                      <button>02</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <Qabul/>
     </>
  )
}

export default Qabuljarayon