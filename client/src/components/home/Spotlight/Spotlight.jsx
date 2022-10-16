import React from "react";
import CardFullTitle from "../CardFullTitle/CardFullTitle";

import image from "../testImage.jpg";
import story from "../story.jpg";
import Loader from "../../shared/Loader/Loader";
import { useQuery } from '@tanstack/react-query';
import { getSpotlight } from "../../../api/api";

import { useEffect } from 'react';

const Spotlight = () => {

  const { data, isLoading } = useQuery(["spotlight"], getSpotlight)

  useEffect(() => {
    console.log(data);
  }, [data]);

  const cardData = {
    title:
      "‘Don’t be a table-hogger’: Debrett’s issues guide for working from a cafe",
    img: image,
  };

  const cardData2 = {
    title:
      "Time for us to start clocking off early with our own healthy habits",
    img: story,
  };

  return (
    <section className="flex flex-col px-main py-4">
      <h1 className="heading">IN THE SPOTLIGHT</h1>
     {
        isLoading? <Loader height={`h-[40vh]`}/> :  <section className="flex flex-col md:flex-row gap-4 justify-center items-center py-4 ">
        {data.map((story) => {
          return (
            <CardFullTitle {...story} key={story.fid} width={`md:w-1/5 w-full`} />
          )
        })}
      </section>
     }
    </section>
  );
};

export default Spotlight;
