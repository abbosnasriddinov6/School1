import React from 'react'
import Home from './home/page'
import Yollar from '@/components/Yollar'
import Qabul from '@/components/Qabul'
import Blog from './blog/page'
import Questions from '@/components/Questions'

const page = () => {
  return (
    <>
      <div >
        <Home />
        <Yollar />
        <Qabul />
        <Blog />
        <Questions/>
      </div>
    </>
  )
}

export default page