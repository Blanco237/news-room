import React from "react";
import { useQuery } from '@tanstack/react-query';

import CardFullTitle from "../CardFullTitle/CardFullTitle";
import Loader from "../../shared/Loader/Loader";

import { getData } from './../../../api/api';

const Spotlight = () => {

  const { data, isLoading } = useQuery(["spotlight"], () => getData('/spotlight'))

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
