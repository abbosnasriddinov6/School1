'use client'
import React, {useState} from 'react'
import '../scss/pages/Header.scss'
import {bar, logo} from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import {RxHamburgerMenu} from "react-icons/rx";
import {MdMenu} from "react-icons/md";
import ResponsMenu from "@/components/ResponsMenu";
import {  useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
    const SeeMenu = () => {
        setShowMenu(true)
        console.log('true buldi')
    }


    return (
        <>
<<<<<<< HEAD
            {/* <div className='head'>
                <div className='container'>
                    <div className='Header'>
                        <div className='qale'>
                            <div className='Logo'>
                                <Link href='/' ><Image src={logo} alt="" /></Link>
                            </div>
                            <ul>
                               
                            </ul>
                            <div className='buttons'>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <header className="head text-gray-600 body-font  ">
=======

            <header className="head text-gray-600 body-font relative w-full ">
>>>>>>> d20101bd3666a754b0ca6d176572e5f1ef51db28
                <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div className="Header">
                        <div className="qale">
                            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                                <Link href='/'><Image src={logo} alt=""/></Link>
                            </div>
                            <nav
                                className="ul md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                                <Link   href='/about'><p>Maktab haqida</p></Link>
                                <Link href='/price'><p>Stipendiyalar</p></Link>
                                <Link href='/qabuljarayon'><p>Qabul jarayoni</p></Link>
                                <a href="tel:+998935960506"><p>Bog'lanish</p></a>
                                <Link href='/registernow'><p>Portal</p></Link>
                            </nav>
                            <button className='button1'><a href="tel:+998935960506">+998 93 596 05 06</a></button>
                            <button className='button2'>Ru</button>

                            {showMenu && <div
                                className="absolute w-screen   top-0  right-[-400px]  ">
                                <ResponsMenu showMenu={showMenu}/>
                            </div>
                            }

                            <MdMenu onClick={() => SeeMenu()} className='text-black text-2xl block lg:hidden'/>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header