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
                                <Link href='/qabuljarayon'><li>Qabul jarayoni</li></Link>
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
            {/* <header className="head text-gray-600 body-font">
                <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div className="Header">
                    <div className="qale">
                            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                                
                            </a>
                            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                                <a className="mr-5 hover:text-gray-900">First Link</a>
                                <a className="mr-5 hover:text-gray-900">Second Link</a>
                                <a className="mr-5 hover:text-gray-900">Third Link</a>
                                <a className="mr-5 hover:text-gray-900">Fourth Link</a>
                            </nav>
                            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                    </div>
                 </div>
                </div>
            </header> */}

        </>
    )
}

export default Header