import React from "react";

import image from "../testImage.jpg";
import story from "../story.jpg";
import CardFullTitle from "../CardFullTitle/CardFullTitle";
import LatestNews from "../LatestNews/LatestNews";

const TopStories = () => {
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
    <section className="flex flex-col px-main py-6">
      <h1 className="heading">TOP STORIES</h1>
      <section className="flex gap-5 md:flex-row flex-col">
        <section className="md:w-9/12 w-full py-4 grid md:grid-cols-4 grid-cols-2 gap-4 ">
          {[...Array(10)].map((_, i) => {
            return i % 2 ? (
              <CardFullTitle {...cardData} width={`w-full`} />
            ) : (
              <CardFullTitle {...cardData2} width={`w-full`} />
            );
          })}
        </section>
        <LatestNews />
      </section>
    </section>
  );
};

export default TopStories;
