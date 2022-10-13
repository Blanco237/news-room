import React from 'react'

import Main from './../../components/home/Main/Main';
import Separator from '../../components/shared/Separator';
import Spotlight from '../../components/home/Spotlight/Spotlight';
import TopStories from '../../components/home/TopStories/TopStories';
import Tech from '../../components/home/Tech/Tech';
import Sport from '../../components/home/Sport/Sport';
import Africa from '../../components/home/Africa/Africa';

const Home = () => {
  return (
    <div className='py-5'>
        <Main />
        <Separator />
        <Spotlight />
        <Separator />
        <TopStories />
        <Separator />
        <Tech />
        <Separator />
        <Sport />
        <Separator />
        <Africa />
    </div>
  )
}

export default Home