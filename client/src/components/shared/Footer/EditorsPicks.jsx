import React from "react";
import { useQuery } from "@tanstack/react-query";

import FooterTitle from "./../FooterTitle";
import Loader from "./../Loader/Loader";
import CardOverlay from "../../home/CardOverlay/CardOverlay";

import { getData } from "./../../../api/api";


const EditorsPicks = () => {
  const { data, isLoading } = useQuery(["editors-picks"], () =>
    getData("/spotlight")
  );

  return (
    <section className="md:w-4/12 w-full flex flex-col gap-2">
      <FooterTitle title={"Editor's Picks"} />
      {isLoading ? (
        <Loader height={`h-[20vh]`} />
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {data.slice(0, 4).map((story) => {
            return <CardOverlay {...story} key={story.sid} width={`w-full`} />;
          })}
        </div>
      )}
    </section>
  );
};

export default EditorsPicks;
