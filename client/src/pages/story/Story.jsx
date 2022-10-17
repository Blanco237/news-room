import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';

const Story = () => {

  const { id   } = useParams();

  useEffect(() => {
    console.log(id);
  }, [id])

  return (
    <div className='py-5 bg-pink-500 h-screen grid place-content-center'>
        {id}
    </div>
  )
}

export default Story