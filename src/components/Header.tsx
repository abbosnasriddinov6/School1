'use client'
import React, { useState } from 'react'
import '../scss/pages/Header.scss'
import { bar, logo } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import { MdMenu } from "react-icons/md";
import ResponsMenu from "@/components/res-menu/ResponsMenu";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import { typelar } from '@/store/Types'


const Header = () => {
    // const { products, loading, getproducts } = typelar()
    // const { showMenu } = typelar{}
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

        <div className="relative ">

            {/* <header className="head text-gray-600 body-font relative w-full ">

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
                                <a href="tel:+998781130005"><p>Bog'lanish</p></a>
                                <Link href='/registernow'><p>Portal</p></Link>
                            </nav>
                            <button className='button1'><a href="tel:+998781130005">+998781130005</a></button>
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
            </header> */}

            <div className="relative">

                <div className="absolute top-0 left-0 min-h-[40vh]   flex justify-center ">
                    <div className="fixed z-30 bg-white ">
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
                                        <a href="tel:+998781130005"><p>Bog`lanish</p></a>
                                        <Link href='/registernow'><p>Portal</p></Link>
                                    </nav>
                                    <button className='button1'><a href="tel:+998781130005">+998 78 113 00 05</a></button>
                                    <button className='button2'>Ru</button>


                                    <MdMenu onClick={() => SeeMenu()} className='text-black text-2xl block lg:hidden cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    </header>
                </header>
            </div>
        </div>


    )
}

export default Header
