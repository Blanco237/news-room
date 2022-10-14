import React from 'react'

import loader from './load.png';
import styles from './load.module.css'

const Loader = ({ height }) => {
  return (
    <section className={`${height} w-full grid place-items-center`}>
        <div className={`relative aspect-square w-1/12 ${styles.container}`}>
            <img src={loader} alt="Loader Icon" className='w-full' />
        </div>
    </section>
  )
}

export default Loader