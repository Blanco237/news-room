import React from 'react'
import CardFullTitle from '../CardFullTitle/CardFullTitle'

import image from '../testImage.jpg';
import story from '../story.jpg';

const Spotlight = () => {

    const cardData = {
        title: "‘Don’t be a table-hogger’: Debrett’s issues guide for working from a cafe",
        img: image
    }

    const cardData2 = {
        title: "Time for us to start clocking off early with our own healthy habits",
        img: story
    }


  return (
    <section className='flex flex-col px-main py-4'>
        <h1 className='font-bold text-3xl text-dark'>IN THE SPOTLIGHT</h1>
        <section className='flex flex-col md:flex-row gap-4 justify-center items-center py-4 '>
        {
            [...Array(5)].map((_,i) => {
                return i%2? <CardFullTitle {...cardData} width={`md:w-1/5 w-full`} /> : <CardFullTitle {...cardData2} width={`md:w-1/5 w-full`} />
            })
        }
    </section>
    </section>
  )
}

export default Spotlight