import React from 'react'
import CardOverlay from '../CardOverlay/CardOverlay'

import sport from './sport.jpg'

const Sport = () => {

    const data = {
        title: "‘Champions League dynamite’ – Liverpool win changes mood",
        img: sport
    }

  return (
    <section className='px-main py-5 flex flex-col'>
        <h1 className='heading'>Sport News</h1>
        <div className='grid md:grid-cols-3 grid-cols-2 gap-4 w-full py-4'>
            {
                [...Array(5)].map(() => {
                    return <CardOverlay {...data} width={`w-full`} />
                })
            }
        </div>
    </section>
  )
}

export default Sport