import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import Other from '../../components/story/Other';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../../api/api';
import Loader from '../../components/shared/Loader/Loader';

const Story = () => {

  const { id } = useParams();
  const table = new URLSearchParams(window.location.search).get("table");
  const [error, setError] = useState(false);
  const frameRef = useRef();

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

  return (
    <div className='py-5 min-h-screen flex gap-8 px-main flex-col md:flex-row'>
        <div className='w-full md:w-9/12'>
          <div className={`text-center mb-4 ${error? 'block' : 'hidden'}`}>
            <h3 className='font-bold text-4xl md:text-[3.5rem] text-red-600'>Apologies!!</h3>
            <p className='text-lg md:text-xl'>This News provider does not allow external content sharing.</p>
            <i className='text-lg md:text-xl'>Read the full article <a href={data?.link} rel='noreferrer' target='_blank' className='underline text-blue-500'>Here</a></i>
          </div>
          {
            isLoading ? <Loader height={`h-full`} /> : 
            <iframe ref={frameRef} src={`${data.link}?output=embed`} title={data.title} className='w-full min-h-screen md:h-full' onError={() =>{
              setError(true)
            }}
            onLoad={(e) => {
              if(!frameRef.current?.contentDocument){
                setError(true);
              }
            }}
            />
          }
        </div>
        <Other id={id}/>
    </div>
  )
}

export default Story