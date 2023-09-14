import React from "react";
import { useQuery } from "@tanstack/react-query";

import Loader from "../../shared/Loader/Loader";

import { getData } from "./../../../api/api";
import { Link } from "react-router-dom";

const NewsItem = ({ title, mrid }) => {
  return (
    <Link to={`/story/${mrid}?table=mostread`} reloadDocument>
    <div className="relative border-l border-blue-400 text-left pl-3 py-2">
      <h3 className="link">{title}</h3>
      <span className="w-3 aspect-square bg-blue-400 absolute top-[42%] left-[-0.37rem] rounded-full animate-ping"></span>
      <span className="w-2 aspect-square bg-blue-400 absolute top-[45%] left-[-0.25rem] rounded-full"></span>
    </div>
    </Link>
  );
};

const LatestNews = () => {
  const { data, isLoading } = useQuery(["latest-news"], () =>
    getData("/latest")
  );

  return (
    <aside className="bg-secondary h-50 md:w-3/12 w-full flex flex-col gap-6 p-4">
      <h2 className="font-medium text-2xl text-dark">Latest News</h2>
      {isLoading ? (
        <Loader height={`h-[30vh]`} />
      ) : (
        <div className="flex flex-col gap-4">
          {data.slice(0, 15).map((story) => {
            return (
              <NewsItem
                key={story.mrid}
                {...story}
              />
            );
          })}
        </div>
      )}
    </aside>
  );
};

export default LatestNews;
