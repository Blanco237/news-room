import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import Other from '../../components/story/Other';

const Story = () => {

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  return (
    <div className='py-5 min-h-screen flex gap-8 px-main flex-col md:flex-row'>
        <div className='w-full md:w-9/12'>
          <iframe src='https://www.bbc.com/travel/article/20230126-the-return-of-the-spirit-horse-to-canada' title='Story title Here' className='w-full min-h-screen'/>
        </div>
        <Other id={id}/>
    </div>
  )
}

export default Story