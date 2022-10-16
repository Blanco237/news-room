import React from "react";
import { useQuery } from "@tanstack/react-query";

import CardFullTitle from "../CardFullTitle/CardFullTitle";
import Loader from "../../shared/Loader/Loader";

import { getData } from "./../../../api/api";

const Tech = () => {
  const { data, isLoading } = useQuery(["tech"], () => getData("/tech"));

  return (
    <section className="flex flex-col px-main py-5 gap-4 bg-secondary">
      <h1 className="heading">Latest in Tech</h1>
      {isLoading ? (
        <Loader height={`h-[70vh]`} />
      ) : (
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 w-full py-4">
          {data.map((story) => {
            return (
              <CardFullTitle {...story} key={story.tid} width={`w-full`} />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Tech;
