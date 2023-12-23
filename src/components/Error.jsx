import React from 'react'

function Error({children}) {
  return (
    <div className='bg-red-100 border-l-4 border-red-500 text-red-700 px-4 py-3' role='alert'>
       <strong className='font-bold'>{children}</strong>
    </div>
  )
}

export default Error