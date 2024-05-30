import React from 'react'
import Home from './home/page'
import Yollar from '@/components/Yollar'
import Qabul from '@/components/Qabul'
import Blog from './blog/page'

const page = () => {
  return (
    <>
      <div >
        <Home />
        <Yollar />
        <Qabul />
        <Blog />
      </div>
    </>
  )
}

export default page