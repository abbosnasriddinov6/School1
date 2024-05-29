import { acceptance, blog, clock, food, money, teacher } from '@/assets'
import Image from 'next/image'
import React from 'react'
import '../scss/pages/Yollar.scss'
import Link from 'next/link'

const Yollar = () => {
    return (
        <>
            <div className='Section8'>
                <div className="container">
                    <div className="section8">
                        <Link href='/food'>
                            <div className='cardlarb1'>
                                <div className='clock'>
                                    <h1>Maktab vaqtlari</h1>
                                    <Image src={clock} alt="" />
                                </div>
                                <div className='food'>
                                    <Image src={food} alt="" />
                                    <h1>Oshxona xizmati</h1>
                                </div>
                            </div>
                        </Link>
                        <Link href='/about'>
                            <div className='cardlarb2'>
                                <h1>Maktabimiz </h1>
                                <h1>haqida</h1>
                            </div>
                        </Link>
                        <Link href='/price'>
                            <div className='cardlarb3'>
                                <h1>Narxlar</h1>
                                <Image src={money} alt="" />
                                <h1>Stipendiyalar</h1>
                            </div>
                        </Link>
                        <Link href='/teacher'>
                            <div className='cardlarb4'>
                                <h1>O'qituvchilar</h1>
                                <Image src={teacher} alt="" />
                            </div>
                        </Link>
                        <Link href='/qabuljarayon'>
                            <div className='cardlarb5'>
                                <h1>Qabul jarayoni</h1>
                                <Image src={acceptance} alt="" />

                            </div>
                        </Link>
                        <Link href='/blog'>
                            <div className='cardlarb6'>
                                <h1>Blog</h1>
                                <Image src={blog} alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Yollar