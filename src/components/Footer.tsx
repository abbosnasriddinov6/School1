import React from 'react'
import '../scss/pages/Footer.scss'
// import { FaTelegram } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaChevronDown } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            {/* <div className="footer">
              <div className="data">
                  <div className="connect-main">
                      <h3 className="connect">Biz bilan bog’laning</h3>
                      <div className="link-all">
                          <div className="links">
                          <FaInstagram />
                              <p>Instagram</p>
                          </div>
                          <div className="links">
                            <FaFacebook/>
                              <p>Facebook</p>
                          </div>
                          <div className="links">
                          <FaTelegram />
                              <p>Telegram</p>
                          </div>
                          <div className="links">
                          <FaTelegram />
                              <p>Telegram bot</p>
                          </div>
                          <div className="links">
                          <FaTelegram />
                              <p>HR</p>
                          </div>

                      </div>
                      <div>
                          <h4 className="address">Mirzo Ulug’bek tumani, Yalangach 2 Mo’ljal: Lokomotiv Park</h4>
                          <p className="address-text"> Manzil</p>
                      </div>
                  </div>
                  <div>
                      <input className="connect-data" type="text" placeholder="Ismingiz" />
                      <div className="connect-select">
                          <p>Qaysi tumanda istiqomat qilasiz?</p>
                          <FaChevronDown/>
                      </div>

                      <div className="connect-select">
                          <p>Farzandingiz qaysi sinfga o'tadi?</p>
                          <i className="fa-solid fa-chevron-down"></i>
                      </div>
                      <input className="connect-data" type="text" placeholder="Telefoningiz " />

                      <div className="connect-btn ">
                          <button className="send_btn ">Ariza topshirish</button>
                      </div>
                  </div>
              </div>

              <div className='map'>
                  <iframe className="map-inside"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47974.45278308441!2d69.284963643221!3d41.27832636051009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef57d146f4803%3A0x72f4619de5ab1ede!2z0K_RiNC90LDQsdCw0LTRgdC60LjQuSDRgNCw0LnQvtC9LCDQotCw0YjQutC10L3Rgiwg0KLQsNGI0LrQtdC90YLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1716908041583!5m2!1sru!2s"></iframe>
              </div>
          </div> */}
            <section className="text-white body-font bg-[#36b872] border-r-4 mt-[70px]">
                <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
                    <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                        <p className="leading-relaxed text-white">Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.</p>
                       
                    </div>
                    <div className="flex flex-col md:w-1/2 md:pl-12">
                        <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">CATEGORIES</h2>
                        <nav className="flex flex-wrap list-none -mb-1">
                            <li className="lg:w-1/3 mb-1 w-1/2">
                                <a className="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li className="lg:w-1/3 mb-1 w-1/2">
                                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li className="lg:w-1/3 mb-1 w-1/2">
                                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            <li className="lg:w-1/3 mb-1 w-1/2">
                                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                            </li>
                            <li className="lg:w-1/3 mb-1 w-1/2">
                                <a className="text-gray-600 hover:text-gray-800">Fifth Link</a>
                            </li>
                            <li className="lg:w-1/3 mb-1 w-1/2">
                                <a className="text-gray-600 hover:text-gray-800">Sixth Link</a>
                            </li>
                            <li className="lg:w-1/3 mb-1 w-1/2">
                                <a className="text-gray-600 hover:text-gray-800">Seventh Link</a>
                            </li>
                            <li className="lg:w-1/3 mb-1 w-1/2">
                                <a className="text-gray-600 hover:text-gray-800">Eighth Link</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Footer