import React from 'react'

import Main from './../../components/home/Main/Main';
import Separator from '../../components/shared/Separator';
import Spotlight from '../../components/home/Spotlight/Spotlight';

const Home = () => {
  return (
    <div className='py-5'>
        <Main />
        <Separator />
        <Spotlight />
        <Separator />
    </div>
  )
}

export default Home