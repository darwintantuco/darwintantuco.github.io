import React from 'react'

const NotFoundPage = (): JSX.Element => {
  return (
    <div className='flex h-screen text-gray-500'>
      <div className='m-auto'>
        <p className='font-bold text-center text-7xl'>404 </p>
        <p className='text-lg'>Page not found. </p>
      </div>
    </div>
  )
}

export default NotFoundPage
