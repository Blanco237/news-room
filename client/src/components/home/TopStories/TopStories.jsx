import React from "react";
import { useQuery } from "@tanstack/react-query";

import CardFullTitle from "../CardFullTitle/CardFullTitle";
import LatestNews from "../LatestNews/LatestNews";
import Loader from "../../shared/Loader/Loader";

import { getData } from "./../../../api/api";

const TopStories = () => {
  const { data, isLoading } = useQuery(["top-stories"], () =>
    getData("/top-stories")
  );

  return (
    <section className="flex flex-col px-main py-6">
      <h1 className="heading">TOP STORIES</h1>
      <section className="flex gap-5 md:flex-row flex-col">
        {isLoading ? (
          <Loader height={`h-[90vh]`} />
        ) : (
          <section className="md:w-9/12 w-full py-4 grid md:grid-cols-4 grid-cols-2 gap-4 ">
            {data.map((story) => {
              return(
                <CardFullTitle {...story} key={story.rid} id={story.rid} width={`w-full`} />
              )
            })}
          </section>
        )}
        <LatestNews />
      </section>
    </section>
  );
};

export default TopStories;
