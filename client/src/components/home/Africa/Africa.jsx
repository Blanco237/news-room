import React from 'react'
import CardFullTitle from '../CardFullTitle/CardFullTitle';

import africa from './africa.jpg';
import africa2 from './africa2.jpg';
import CardOverlay from './../CardOverlay/CardOverlay';


const Africa = () => {

    const data= {
        title: "Hundreds killed in Nigeria floods, more than 1.4 million displaced",
        img: africa
    }

    const data2 = {
        title: "2% of the world's rarest zebras wiped out in Kenya's relentless drought",
        img: africa2
    }

  return (
    <section className='flex flex-col px-main py-5 gap-4'>
        <h1 className='heading'>Happening In Africa</h1>
        <div className='flex gap-4 md:flex-row flex-col'>
            <div className='md:w-2/5 w-full grid gap-4 grid-cols-2'>
                {
                    [...Array(6)].map(() => {
                        return <CardFullTitle {...data} width={`w-full`} />
                    })
                }
            </div>
            <div className='md:w-3/5 w-full grid gap-4 md:grid-cols-3 md:grid-rows-3 grid-cols-2'>
            {
                    [...Array(9)].map(() => {
                        return <CardOverlay {...data2} width={`w-full`} check/>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Africa