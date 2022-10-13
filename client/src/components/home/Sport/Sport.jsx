import React from 'react'
import CardOverlay from '../CardOverlay/CardOverlay'

import { FaCaretRight } from 'react-icons/fa'

import sport from './sport.jpg'

const Sport = () => {

    const data = {
        title: "‘Champions League dynamite’ – Liverpool win changes mood",
        img: sport
    }

    const SportItem = ({title}) => {
        return (
            <div className='border-b pl-4 text-left link font-normal md:text-lg text-base w-full py-3 flex justify-center items-center gap-4'>
               <FaCaretRight /> <p>{title}</p>
            </div>
        )
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
        <div className="md:w-7/12  w-full">
            {
                [...Array(7)].map(() => {
                    return <SportItem title={`Novak Djokovic is welcome at Australian Open, says tournament director; Russian and Belarusian players can compete`} />
                })
            }
        </div>
    </section>
  )
}

export default Sport