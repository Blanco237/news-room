import React from "react";
import { useQuery } from "@tanstack/react-query";

import CardFullTitle from "../CardFullTitle/CardFullTitle";
import CardOverlay from "./../CardOverlay/CardOverlay";
import Loader from "../../shared/Loader/Loader";

import { getData } from "./../../../api/api";


const Africa = () => {
  const { data, isLoading } = useQuery(["africa"], () => getData("/africa"));

  return (
    <section className="flex flex-col px-main py-5 gap-4">
      <h1 className="heading">Happening In Africa</h1>
      {isLoading ? (
        <Loader height={`h-[80vh]`} />
      ) : (
        <div className="flex gap-4 md:flex-row flex-col">
          <div className="md:w-2/5 w-full grid gap-4 grid-cols-2">
            {data.slice(0, 6).map((story) => {
              return <CardFullTitle {...story} key={story.aid} id={story.aid} width={`w-full`} />;
            })}
          </div>
          <div className="md:w-3/5 w-full grid gap-4 md:grid-cols-3 md:grid-rows-3 grid-cols-2">
            {data.slice(6, 16).map((story) => {
              return <CardOverlay {...story} key={story.aid} id={story.aid} width={`w-full`} check />;
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Africa;
