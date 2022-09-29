import React from 'react'
import Banner from './banner'

const Index = () => {
  return (
    <>
      <div className='mx-auto w-full bg-slate-500'>
        <div className='h-[30rem]'>
          <Banner />
        </div>
        <div className='border-4 w-full border-black'>
          Biodata
        </div>
        <div className='border-4 w-full h-screen border-black'>
          Interest
        </div>
      </div>
    </>
  )
}

export default Index