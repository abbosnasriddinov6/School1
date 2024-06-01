import React from 'react'
import '../../scss/pages/Home.scss'
const Home = () => {
  return (
    <div>
      <div className='Section1'>
        <div className="div">
          <div className="container">
            <div className='background'>
              <h1 className='yozuv1'>Farzandingiz iste’dodini <span>kashf qilamiz</span></h1>
              <h4>Birinchi kundanoq farzandingizning iste’dodi qaysi yo’nalishdaligini tekshiramiz: <span>kreativ, analitik yoki ishbilarmon</span></h4>
              <div className='blar'>
                <button className='ariza'>Ariza topshirish</button>
                <button className='batafsil'>Batafsil</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home