import React from 'react'

import styles from './main.module.css'

import CardPartialTitle from '../CardPartialTitle/CardPartialTitle';

import image from '../testImage.jpg';
import story from '../story.jpg';

import CardOverlay from '../CardOverlay/CardOverlay';

const Main = () => {

    const cardData = {
        title: "‘Don’t be a table-hogger’: Debrett’s issues guide for working from a cafe",
        img: image
    }

    const cardData2 = {
        title: "Time for us to start clocking off early with our own healthy habits",
        img: story
    }

  return (
    <section className={`grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 md:gap-8 gap-4 px-main pb-5 ${styles.main}`}>
        <CardPartialTitle {...cardData} />
        <CardOverlay {...cardData2} />
        <CardOverlay {...cardData2} />
    </section>
  )
}

export default Main