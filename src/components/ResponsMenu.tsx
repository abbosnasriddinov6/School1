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

         <div data-aos="fade-right" className="w-full z-50 absolute top-0 right-0 h-full flex  justify-center  header">
             <div className="relative bg-black w-full   flex-col   py-20  ">
                 {/*<i */}
                 {/*   className="fa-solid fa-xmark absolute text-white top-4 right-4 text-xl cursor-pointer hover:text-red-500 "></i>*/}
                 <h2 className="text-white px-4 my-2 duration-300  roundeed-lg  cursor-pointer hover:bg-slate-300 w-full py-1  hover:text-black ">Use
                     Cases</h2>
                 <h2 className="text-white px-4 my-2 duration-300  roundeed-lg  cursor-pointer hover:bg-slate-300 w-full py-1  hover:text-black ">About</h2>
                 <h2 className="text-white px-4 my-2 duration-300  roundeed-lg  cursor-pointer hover:bg-slate-300 w-full py-1  hover:text-black ">Prising</h2>
                 <h2 className="text-white px-4 my-2 duration-300  roundeed-lg  cursor-pointer hover:bg-slate-300 w-full py-1  hover:text-black ">Blog</h2>
             </div>
         </div>


     )
}