import React from 'react'
import '../scss/pages/Footer.scss'
const Footer = () => {
  return (
    <>
          <div className="footer">
              <div className="data">
                  <div className="connect-main">
                      <h3 className="connect">Biz bilan bog’laning</h3>
                      <div className="link-all">
                          <div className="links">
                              <i className="fa-brands fa-instagram"></i>
                              <p>Instagram</p>
                          </div>
                          <div className="links">
                              <i className="fa-brands fa-facebook"></i>
                              <p>Facebook</p>
                          </div>
                          <div className="links">
                              <i class="fa-brands fa-telegram"></i>
                              <p>Telegram</p>
                          </div>
                          <div className="links">
                              <i class="fa-brands fa-telegram"></i>
                              <p>Telegram bot</p>
                          </div>
                          <div className="links">
                              <i class="fa-brands fa-telegram"></i>
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
                          <i className="fa-solid fa-chevron-down"></i>
                      </div>

                      <div className="connect-select">
                          <p>Farzandingiz qaysi sinfga o'tadi?</p>
                          <i className="fa-solid fa-chevron-down"></i>
                      </div>
                      <input className="connect-data" type="text" placeholder="Telefoningiz " />

                      <div className="connect-btn">
                          <button className="send_btn">Ariza topshirish</button>
                      </div>
                  </div>
              </div>

              <div>
                  <iframe className="map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47974.45278308441!2d69.284963643221!3d41.27832636051009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef57d146f4803%3A0x72f4619de5ab1ede!2z0K_RiNC90LDQsdCw0LTRgdC60LjQuSDRgNCw0LnQvtC9LCDQotCw0YjQutC10L3Rgiwg0KLQsNGI0LrQtdC90YLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1716908041583!5m2!1sru!2s"></iframe>
              </div>
          </div>
    </>
  )
}

export default Footer