import React from 'react'
import CardFullTitle from '../CardFullTitle/CardFullTitle';

import apollo from './apollo.jpg';

const Tech = () => {

    const data = {
        title: 'Apollo 16 capsule cleanup underway for 50th anniversary this year',
        img: apollo
    }

  return (
    <section className='flex flex-col px-main py-5 gap-4 bg-secondary'>
        <h1 className='heading'>Latest in Tech</h1>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-4 w-full py-4'>
            {
                [...Array(8)].map(() => {
                    return <CardFullTitle {...data} width={`w-full`}/>
                })
            }
        </div>
    </section>
  )
}

export default Tech