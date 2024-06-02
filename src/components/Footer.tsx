import React from 'react'
import '../scss/pages/Footer.scss'
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
// import { FaChevronDown } from "react-icons/fa";

const Footer = () => {
    return (
        <>

          <section className="text-white body-font bg-[#36b872] border-r-4 ">
          <div className='max-w-[1440px]  mx-auto'>
          <div className=" grid sm:grid-cols-3 px-5 py-10 gap-2 ">

                <div className="grid col-span-1 sm:border-r-2 ">
                    <h2 className="  font-semibold px-3  text-[50px] font-bold">Biz bilan bog’laning</h2>
                    <div className="flex items-center gap-2 px-4 ">
                    <FaPhoneAlt className="text-2xl"/>
                    <p className="text-2xl">+998 78 113 0005</p>
                    </div>
                    <nav className="flex gap-4 flex-wrap list-none my-3">
                        <div className="flex items-center cursor-pointer gap-1 hover:bg-green-200 px-3 rounded-md hover:text-black duration-500">
                            <FaInstagram/>
                            <p>Instagram</p>
                        </div>
                        <div className="flex items-center cursor-pointer gap-1 hover:bg-green-200 px-3 rounded-md hover:text-black duration-500">
                            <FaFacebook/>
                            <p>Facebook</p>
                        </div>
                        <div className="flex items-center cursor-pointer gap-1 hover:bg-green-200 px-3 rounded-md hover:text-black duration-500">
                            <FaTelegram/>
                            <p>Telegram</p>
                        </div>
                        <div className="flex items-center cursor-pointer gap-1 hover:bg-green-200 px-3 rounded-md hover:text-black duration-500">
                            <FaTelegram/>
                            <p>Telegram bot</p>
                        </div>

                        <div className="flex items-center cursor-pointer gap-1 hover:bg-green-200 px-3 rounded-md hover:text-black duration-500">
                            <FaTelegram/>
                            <p>HR</p>
                        </div>

                    </nav>
                </div>

                <div className="grid col-span-2 w-full min-h-[50vh]">

                    <iframe className="w-full h-full min-h-[30vh] rounded-3xl "
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47974.45278308441!2d69.284963643221!3d41.27832636051009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef57d146f4803%3A0x72f4619de5ab1ede!2z0K_RiNC90LDQsdCw0LTRgdC60LjQuSDRgNCw0LnQvtC9LCDQotCw0YjQutC10L3Rgiwg0KLQsNGI0LrQtdC90YLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1716908041583!5m2!1sru!2s"></iframe>

                </div>

            </div>  
        </div>
        </section>
  

        </>
    )
}

export default Footer