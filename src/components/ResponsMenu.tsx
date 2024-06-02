import Link from "next/link";
import React, {useState} from "react";
import { IoIosExit } from "react-icons/io";
import '../scss/pages/responMenu.scss'

export default function ResponsMenu() {


const [closeModal, setCloseModal]  = useState(false)

const AddHidden =  () => {
    body.classList.add('hidden')
}

     return (


        <div className="absolute  responMenu ">
            <div className="max-w-[300px] relative pt-10  bg-white rounded-lg px-10 py-20 max-h-[300px] mt-20 overflow-hidden">
                <IoIosExit onClick={() => AddHidden() } className="absolute top-2 right-4 text-red-500 hover:text-red-600 text-2xl cursor-pointer"/>
                <Link href='/about' ><p className="py-2 hover:bg-slate-300 px-10 rounded duration-300">Maktab haqida</p></Link>
                <Link href='/price'><p className="py-2 hover:bg-slate-300 px-10 rounded duration-300">Stipendiyalar</p></Link>
                <Link href='/qabuljarayon'><p className="py-2 hover:bg-slate-300 px-10 rounded duration-300">Qabul jarayoni</p></Link>
                <p className="py-2 hover:bg-slate-300 px-10 rounded duration-300">Bog'lanish</p>
                <p className="py-2 hover:bg-slate-300 px-10 rounded duration-300">Portal</p>
            </div>
        </div>
    )
}