
import { FaMedal } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { TfiBlackboard } from "react-icons/tfi";


const MaxsusTalim = () => {


    return (

        <>
        <div>
            <div className=" mx-auto max-w-[1440px] mx-auto">
                <div className="my-10">
                    <div>
                        <h2 className="flex justify-center md:text-[50px] text-[30px] font-semibold my-10">Maxsus
                            ta'lim</h2>


                        <div className="grid lg:grid-cols-3 sm:grid-cols-2  w-full mx-auto gap-5">

                            <div data-aos="fade-down" className="px-10 flex   py-3 bg-[#e5f3ff] rounded-3xl relative group lg:flex-col flex flex-col-reverse justify-between">
                                <div className="group">
                                    <FaMedal
                                        className="absolute top-0 left-0 bg-white text-4xl group-hover:rotate-45 rounded-full w-10 h-10 duration-500 text-yellow-300  z-20" />
                                    <p className="lg:pt-10 pt-4 px-3 text-xl">
                                        Olimpiadachilar uchun darslar tashkil qilinishi va odatiy darslardan ozod
                                        bo'lishlariga imkoniyatlar yaratib beriladi
                                    </p>
                                </div>
                                <img className="rounded-3xl lg:mt-20 bg-contain sm:mt-32 mt-16 pt-4  "
                                    src="https://cdn.iz.ru/sites/default/files/styles/1920x1080/public/article-2023-02/2023-02-03T093949Z_784463580_RC2K3Z99S2TK_RTRMADP_3_UKRAINE-CRISIS-OLYMPICS.JPG.jpg?itok=v4ZZ2OiC"
                                    alt="" />
                            </div>

                        <div data-aos="fade-down" className="px-10 flex   py-3 bg-[#e5f3ff] rounded-3xl relative group lg:flex-col flex flex-col-reverse justify-between">
                            <div className="group">
                                <FaClock
                                    className="absolute top-0 left-0 bg-white text-4xl group-hover:rotate-45 rounded-full w-10 h-10 duration-500 text-green-500  z-20"/>
                                <p className="lg:pt-10 pt-4 px-3 text-xl">
                                    Olimpiadachilar uchun darslar tashkil qilinishi va odatiy darslardan ozod
                                    bo'lishlariga imkoniyatlar yaratib beriladi
                                </p>
                            </div>
                            <img className="rounded-3xl lg:mt-20 bg-contain sm:mt-32 mt-16 py-4 " src="https://grantlar.uz/wp-content/uploads/2018/03/person-984236_1280.jpg" alt=""/>
                        </div>

                        <div data-aos="fade-down" className="px-10 flex   py-3 bg-[#e5f3ff] rounded-3xl relative group lg:flex-col flex flex-col-reverse justify-between">
                            <div className="group">
                                <TfiBlackboard
                                    className="absolute top-0 left-0 bg-white text-4xl group-hover:rotate-12 rounded-full w-10 h-10 duration-500 text-yellow-300  z-20"/>
                                <p className="lg:pt-10 pt-4 px-3 text-xl">
                                    Olimpiadachilar uchun darslar tashkil qilinishi va odatiy darslardan ozod
                                    bo'lishlariga imkoniyatlar yaratib beriladi
                                </p>
                            </div>
                            <img className="rounded-3xl lg:mt-20 bg-contain sm:mt-32 mt-16 py-4 " src="https://aniq.uz/photos/news/y4rZiDV1diiVWVR.jpeg" alt=""/>
                        </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}


export default MaxsusTalim