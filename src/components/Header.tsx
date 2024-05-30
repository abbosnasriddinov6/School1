import React from 'react'
import '../scss/pages/Header.scss'
import { logo } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
    return (
        <>
            <div className='head'>
                <div className='container'>
                    <div className='Header'>
                        <div className='qale'>
                            <div className='Logo'>
                                <Link href='/' ><Image src={logo} alt="" /></Link>
                            </div>
                            <ul>
                                <Link href='/about'><li>Maktab haqida</li></Link>
                                <Link href='/price'><li>Stipendiyalar</li></Link>
                                <Link href='/qabuljarayon'><li>Qabuk Jarayoni</li></Link>
                                <li>Bog'lanish</li>
                                <li>Portal</li>
                            </ul>
                            <div className='buttons'>
                                <button className='button1'>+998 93 596 05 06</button>
                                <button className='button2'>Ru</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header