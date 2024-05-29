import React from 'react'
import '../scss/pages/Qabul.scss'
const Qabul = () => {
    return (
        <>
            <div className='Section4'>
                <div className="container">
                    <div className="section4">
                        <div className="green">
                            <div className="first1">
                                <h1>Qabulga
                                    roʻyxatdan oʻting</h1>
                                <h3>Ma'lumotlaringizni yozib qoldiring, siz bilan tezda aloqaga chiqib, maktabimiz haqida yanada batafsil aytib beramiz</h3>
                            </div>
                            <div className="first2">
                                <input type="text" placeholder='Ismingiz' />
                                <select >
                                    <option value="Qaysi tumanda istiqomat qilasiz?">Qaysi tumanda istiqomat qilasiz?</option>
                                    <option value="Mirzo Ulug'bek tumani">Mirzo Ulug'bek tumani</option>
                                    <option value="Yunusobod tumani">Yunusobod tumani</option>
                                    <option value="Qibray tumani">Qibray tumani</option>
                                    <option value="Yashnabod tumani">Yashnabod tumani</option>
                                    <option value="Mirabod tumani">Mirabod tumani</option>
                                    <option value="Yakkasaroy tumani">Yakkasaroy tumani</option>
                                    <option value="Chilonzor tumani">Chilonzor tumani</option>
                                    <option value="Uchtepa tumani">Uchtepa tumani</option>
                                    <option value="Olmazor tumani">Olmazor tumani</option>
                                    <option value="Shayxontohur tumani">Shayxontohur tumani</option>
                                    <option value="Sergeli tumani">Sergeli tumani</option>
                                    <option value="Toshkent viloyati">Toshkent viloyati</option>
                                    <option value="Boshqa viloyati">Boshqa viloyati</option>
                                </select>
                                <select>
                                    <option value="Farzandingiz qaysi sinfga o'tadi?">Farzandingiz qaysi sinfga o'tadi?</option>
                                    <option value="Maktabgacha ta'lim">Maktabgacha ta'lim</option>
                                    <option value="Boshlang'ich sinf (1-4)">Boshlang'ich sinf (1-4)</option>
                                    <option value="O'rta sinf (5-8)">O'rta sinf (5-8)</option>
                                    <option value="Katta sinf (9-11)">Katta sinf (9-11)</option>
                                </select>
                                <input type="number" placeholder='99 999 99 99' />
                                <button>Ariza topshirish</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Qabul