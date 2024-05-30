'use client'
import React, { useState } from 'react'
import '../scss/pages/Questions.scss'
import Image from 'next/image'
import { minus, plus } from '@/assets'


const Questions = () => {
    const [openWord, setOpenWord] = useState(true)
    const [openWords, setOpenWords] = useState(true)
    const [openit, setOpenIt] = useState(true)
    const [openits, setOpenIts] = useState(true)
    const [openitss, setOpenItss] = useState(true)
    const [openitsd, setOpenItsd] = useState(true)
    const [openitsa, setOpenItsa] = useState(true)
    const [openitsdb, setOpenItsdb] = useState(true)
    const [openitsde, setOpenItsde] = useState(true)
    const [openitsdf, setOpenItsdf] = useState(true)
    const [openitsdg, setOpenItsdg] = useState(true)
    return (
        <>
            <div className='Questions'>
                <div className="container">
                    <div className="questions">
                        <div className="kop">
                            <h1>Koʻp beriladigan savollar</h1>
                        </div>
                        <div className='pluslar'>
                            <div className='table'>
                                {openWords ? <div className='how'>
                                    <h2>Maktab nechanchi sinflarni qabul qiladi?</h2>
                                    <Image onClick={() => setOpenWords(!openWords)} src={plus} alt="" />
                                </div> :
                                    <div className='transition'>
                                        <div className='how'>
                                            <h2>Maktab nechanchi sinflarni qabul qiladi?</h2>
                                            <Image onClick={() => setOpenWords(!openWords)} src={minus} alt="" />
                                        </div>
                                        <div className='howw'>
                                            <p className='text2'>1-sinfdan boshlab 11-sinfgacha bo’lgan o’quvchilarni</p>
                                        </div>
                                    </div>
                                }

                                {openWord ? <div className='how'>
                                    <h2>Ta’lim qaysi tilda olib boriladi?</h2>
                                    <Image onClick={() => setOpenWord(!openWord)} src={plus} alt="" />
                                </div> :
                                    <div className='transition'>
                                        <div className='how'>
                                            <h2>Ta’lim qaysi tilda olib boriladi?</h2>
                                            <Image onClick={() => setOpenWord(!openWord)} src={minus} alt="" />
                                        </div>
                                        <div className='howw'>
                                            <p className='text2'>Boshlang’ich (1-3) sinflarda Rus va O’zbek tilida;
                                                O’rta va yuqori (5-11) sinflarda esa faqat O’zbek tilida.</p>
                                        </div>
                                    </div>
                                }
                                {openit ? <div className='how'>
                                    <h2>Maktabga imtihon bilan qabul qilinadimi?</h2>
                                    <Image onClick={() => setOpenIt(!openit)} src={plus} alt="" />
                                </div> :
                                    <div className='transition'>
                                        <div className='how'>
                                            <h2>Maktabga imtihon bilan qabul qilinadimi?</h2>
                                            <Image onClick={() => setOpenIt(!openit)} src={minus} alt="" />
                                        </div>
                                        <div className='howw'>
                                            <p className='text2'>Ham imtihon ham og’zaki suhbat orqali o’quvchilar saralab olinadi.
                                            </p>
                                        </div>
                                    </div>
                                }
                                {openits ? <div className='how'>
                                    <h2>Maktabda qaysi fanlar chuqurlashtirib oʻtiladi?</h2>
                                    <Image onClick={() => setOpenIts(!openits)} src={plus} alt="" />
                                </div> :
                                    <div className='transition'>
                                        <div className='how'>
                                            <h2>Maktabda qaysi fanlar chuqurlashtirib oʻtiladi?</h2>
                                            <Image onClick={() => setOpenIts(!openits)} src={minus} alt="" />
                                        </div>
                                        <div className='howw'>
                                            <p className='text2'>Matematika va ingliz tili fanlari.
                                            </p>
                                        </div>
                                    </div>
                                }
                                {openitss ? <div className='how'>
                                    <h2>Dars kunlari va vaqtlari qanday tashkillangan?</h2>
                                    <Image onClick={() => setOpenItss(!openitss)} src={plus} alt="" />
                                </div> :
                                    <div className='transition'>
                                        <div className='how'>
                                            <h2>Dars kunlari va vaqtlari qanday tashkillangan?</h2>
                                            <Image onClick={() => setOpenItss(!openitss)} src={minus} alt="" />
                                        </div>
                                        <div className='howw'>
                                            <p className='text2'>Darslar barcha sinflar uchun dushanbadan jumagacha, 08:00 - 17:15 oralig'ida davom etadi.
                                            </p>
                                        </div>
                                    </div>
                                }






                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Questions