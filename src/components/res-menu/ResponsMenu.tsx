import Link from "next/link";
import React, {useEffect, useState} from "react";
import {IoIosExit} from "react-icons/io";
import '../../scss/pages/responMenu.scss'
import {GiExitDoor} from "react-icons/gi";
import { LuLogOut } from "react-icons/lu";
interface props {
    isOpen: boolean
    setShowMenu: (args: boolean) => void
}

export default function ResponsMenu({isOpen, setShowMenu}: props) {

    return (
        <>
            {isOpen && <div data-aos="fade-left"
                            className=" z-50 absolute w-full top-[-10px] h-full   ">
                <div className="relative  text-black flex flex-col items-center justify-center w-screen    py-10 px-10 ">
                    <LuLogOut  onClick={() => setShowMenu(false)}
                                className="absolute z-40 text-red-500 top-10 right-12 "/>
                    <Link href='/about'><p
                        className=" cursor-pointer hover:bg-slate-300 px-5 hover:text-black text-start   duration-300 rounded mt-10 mb-1">Maktab
                        haqida</p></Link>
                    <Link href='/price'><p
                        className=" cursor-pointer  hover:bg-slate-300 px-5 hover:text-black text-start   duration-300 rounded my-1">Stipendiyalar</p>
                    </Link>
                    <Link href='/qabuljarayon'><p
                        className=" cursor-pointer  hover:bg-slate-300 px-5 hover:text-black text-start    duration-300 rounded my-1">Qabul
                        jarayoni</p></Link>
                    <a href="tel:+998935960506"><p
                        className=" cursor-pointer  hover:bg-slate-300 px-5 hover:text-black text-start   duration-300 rounded my-1">Bog`lanish</p>
                    </a>
                    <Link href='/registernow'><p
                        className=" cursor-pointer  hover:bg-slate-300 px-5 hover:text-black text-start     duration-300 rounded my-1">Portal</p>
                    </Link>



                </div>
            </div>

            }
        </>

    )
}