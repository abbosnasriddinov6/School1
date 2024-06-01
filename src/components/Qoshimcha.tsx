import React from 'react'
import '../scss/pages/Qoshimcha.scss'
const Qoshimcha = () => {
    return (
        <>
            <div className="Qoshimcha">
                <div className="container">
                    <center><h1 className='bratishka'>Qo'shimcha afzallikarimiz</h1></center>
                    <div className="afzalliklar">
                        <div className="Psixolog">
                            <p>Psixolog bilan doimiy suhbat</p>
                        </div>
                        <div className="tayyorlov">
                            <p>Kichik sinflardan xalqaro universitetlarga tayyorlov</p>
                        </div>
                        <div className="odatlar">
                            <p>To’g’ri odatlar shakllantirishadi
                                (erta turish, sadaqa qilish)</p>
                        </div>
                        <div className="malakaliustozlar">
                            <p>Malakali ustozlar bilan doimiy tarbiya darslari</p>
                        </div>
                        <div className="tashna">
                            <p>Ilmga tashna bo‘lib yetishishiga yordam beramiz</p>
                        </div>
                        <div className="Har50">
                            <p>Har 50 ta talabaga 1 ta tarbiyachi biriktiriladi.</p>
                            <p>O’quvchilarning savollari bo’lsa, uchrashlari mumkin.</p>
                        </div>
                        <div className="ITlab">
                            <p>IT Laboratoriyalar va qo’shimcha sinf xona texnologiyalari</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Qoshimcha