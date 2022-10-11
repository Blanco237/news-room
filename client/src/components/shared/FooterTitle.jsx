import React from 'react'

const FooterTitle = ({title}) => {
  return (
    <div className='flex flex-col items-start gap-1 '>
        <h2 className='uppercase font-medium'>{title}</h2>
        <span className='bg-primary h-1 w-2/12'></span>
    </div>
  )
}

export default FooterTitle