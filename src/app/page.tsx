import React from 'react'
import Home from './home/page'
import Yollar from '@/components/Yollar'
import Qabul from '@/components/Qabul'
import Blog from './blog/page'
import Questions from '@/components/Questions'
import {  useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import MaxsusTalim from '@/components/MaxsusTalim'

const page = () => {
  return (
    <>
      <div >
        <Home />
        <Yollar />
        <Qabul />
        <Blog />
        <Questions/>
        <MaxsusTalim/>
      </div>
    </>
  )
}

export default page