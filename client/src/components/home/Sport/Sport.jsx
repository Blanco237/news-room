import React from "react";
import { useQuery } from "@tanstack/react-query";

import CardOverlay from "../CardOverlay/CardOverlay";
import Loader from "../../shared/Loader/Loader";
import { FaCaretRight } from "react-icons/fa";

import { getData } from "./../../../api/api";
import { Link } from 'react-router-dom';

const Sport = () => {
  const { data, isLoading } = useQuery(["sport-cards"], () =>
    getData("/sport/cards")
  );

  const { data: textData, isLoading: textLoading } = useQuery(
    ["sport-text"],
    () => getData("/sport/text")
  );

  const SportItem = ({ title, spid }) => {
    return (
      <Link to={`/story/${spid}`}>
        <div className="border-b pl-4 text-left link font-normal md:text-lg text-base w-full py-3 flex items-center gap-4">
          <FaCaretRight /> <p>{title}</p>
        </div>
      </Link>
    );
  };

  return (
    <section className="px-main py-5 flex flex-col">
      <h1 className="heading">Sport News</h1>
      {isLoading ? (
        <Loader height={`h-[70vh]`} />
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 w-full py-4">
          {data.map((story) => {
            return (
              <CardOverlay
                {...story}
                key={story.spid}
                id={story.spid}
                width={`w-full`}
              />
            );
          })}
        </div>
      )}
      {textLoading ? (
        <Loader height={`h-[40vh]`} />
      ) : (
        <div className="md:w-7/12  w-full">
          {textData.slice(0, 10).map((story) => {
            return <SportItem key={story.spid} {...story} />;
          })}
        </div>
      )}
    </section>
  );
};

export default Sport;
