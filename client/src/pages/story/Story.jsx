import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import Other from '../../components/story/Other';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../../api/api';
import Loader from '../../components/shared/Loader/Loader';

const Story = () => {

  const { id } = useParams();
  const table = new URLSearchParams(window.location.search).get("table");

  const { data, isLoading, refetch } = useQuery(["story"], () => getData(`/story/${table}/${id}`));

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [id]);

  useEffect(() => {
    refetch();
  }, [id])

  console.log(data);

  return (
    <div className='py-5 min-h-screen flex gap-8 px-main flex-col md:flex-row'>
        <div className='w-full md:w-9/12'>
          {
            isLoading ? <Loader height={`h-full`} /> : 
            <iframe src={`${data.link}?output=embed`} title={data.title} className='w-full min-h-screen md:h-full'/>
          }
        </div>
        <Other id={id}/>
    </div>
  )
}

export default Story