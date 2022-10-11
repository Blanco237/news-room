import React from 'react'

import styles from './main.module.css'

import CardPartialTitle from '../CardPartialTitle/CardPartialTitle';

import image from '../testImage.jpg';

const Main = () => {

    const cardData = {
        title: "‘Don’t be a table-hogger’: Debrett’s issues guide for working from a cafe",
        img: image
    }

  return (
    <section className={`grid grid-cols-3 grid-rows-2 gap-8 ${styles.main}`}>
        <CardPartialTitle {...cardData} />
        <CardPartialTitle {...cardData} />
        <CardPartialTitle {...cardData} />
    </section>
  )
}

export default Main