import React from "react";

const NewsItem = ({ title, link }) => {
  return (
    <div className="relative border-l border-blue-400 text-left pl-3 py-2">
      <h3 className="link">{title}</h3>
      <span className="w-3 aspect-square bg-blue-400 absolute top-[42%] left-[-0.37rem] rounded-full animate-ping"></span>
      <span className="w-2 aspect-square bg-blue-400 absolute top-[45%] left-[-0.25rem] rounded-full"></span>
    </div>
  );
};

const LatestNews = () => {
  return (
    <aside className="bg-secondary h-50 md:w-3/12 w-full flex flex-col gap-6 p-4">
      <h2 className="font-medium text-2xl text-dark">Latest News</h2>
      <div className="flex flex-col gap-4">
        {[...Array(8)].map((_, i) => {
          return (
            <NewsItem
              key={i}
              title={`‘Don’t be a table-hogger’: Debrett’s issues guide for working from a cafe`}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default LatestNews;
