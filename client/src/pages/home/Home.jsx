import React from 'react'

import CardPartialTitle from '../../components/home/CardPartialTitle/CardPartialTitle'

import Main from './../../components/home/Main/Main';
import Separator from '../../components/shared/Separator';

const Home = () => {
  return (
    <div className='py-5'>
        <Main />
        <Separator />
    </div>
  )
}

export default Home