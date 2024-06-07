'use client'
import React, { useState } from 'react'
import '../scss/pages/Header.scss'
import { bar, logo } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import { MdMenu } from "react-icons/md";
import ResponsMenu from "@/components/ResponsMenu";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


const Header = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])

    const [showMenu, setShowMenu] = useState(false)

    const SeeMenu = () => {
        setShowMenu(true)
    }


    return (
        <>

<<<<<<< HEAD
        <div className="relative ">
=======
>>>>>>> 3a2d8f6df7b6dab5cb769f12086ae7ca41dcc637




            <header className="head text-gray-600 body-font relative w-full ">

                <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div className="Header">
                        <div className="qale">
                            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                                <Link href='/'><Image src={logo} alt="" /></Link>
                            </div>
                            <nav
                                className="ul md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                                <Link href='/about'><p>Maktab haqida</p></Link>
                                <Link href='/price'><p>Stipendiyalar</p></Link>
                                <Link href='/qabuljarayon'><p>Qabul jarayoni</p></Link>
                                <a href="tel:+998935960506"><p>Bog'lanish</p></a>
                                <Link href='/registernow'><p>Portal</p></Link>
                            </nav>
                            <button className='button1'><a href="tel:+998935960506">+998 93 596 05 06</a></button>
                            <button className='button2'>Ru</button>

                            {showMenu && <div
                                className="absolute w-screen   top-0  right-[-400px]  ">
                                <ResponsMenu showMenu={showMenu} />
                            </div>
                            }

                            <MdMenu onClick={() => SeeMenu()} className='text-black text-2xl block lg:hidden' />
                        </div>
                    </div>
                </div>
            </header>

            <div className="relative">

                <div className="absolute top-0 left-0 min-h-[40vh]   flex justify-center ">
                    <div className=" ">
                        <ResponsMenu isOpen={showMenu} setShowMenu={setShowMenu} />
                    </div>
                </div>


                <header className=" head text-gray-600 body-font  ">
                    <header className="head text-gray-600 body-font relative w-full ">
                        <div className=" container  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                            <div className="Header">
                                <div className="qale">
                                    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                                        <Link href='/'><Image src={logo} alt="" /></Link>
                                    </div>
                                    <nav
                                        className="ul md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                                        <Link href='/about'><p>Maktab haqida</p></Link>
                                        <Link href='/price'><p>Stipendiyalar</p></Link>
                                        <Link href='/qabuljarayon'><p>Qabul jarayoni</p></Link>
                                        <a href="tel:+998935960506"><p>Bog`lanish</p></a>
                                        <Link href='/registernow'><p>Portal</p></Link>
                                    </nav>
                                    <button className='button1'><a href="tel:+998935960506">+998 93 596 05 06</a></button>
                                    <button className='button2'>Ru</button>


                                    <MdMenu onClick={() => SeeMenu()} className='text-black text-2xl block lg:hidden cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    </header>
                </header>
            </div>


        </>
    )
}

export default Header