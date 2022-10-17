import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import Loader from "../shared/Loader/Loader";
import CardFullTitle from "../home/CardFullTitle/CardFullTitle";
import { getData } from "./../../api/api";

const Other = ({ id }) => {

  const { data, isLoading, refetch } = useQuery(["other-stories"], () =>
    getData("/top-stories")
  );

  useEffect(() => {
    if(!isLoading){
        refetch();
    }
  }, [id])

  return (
    <aside className="bg-secondary h-50 md:w-3/12 w-full flex flex-col gap-3 items-center p-4">
      <h2 className="heading">Other Stories</h2>
      {isLoading ? (
        <Loader height={`h-[90vh]`} />
      ) : (
        <section className="md:w-10/12 w-full py-4 flex flex-col gap-4 ">
          {data.slice(0, 7).map((story) => {
            return (
              <CardFullTitle
                {...story}
                key={story.rid}
                id={story.rid}
                width={`w-full`}
              />
            );
          })}
        </section>
      )}
    </aside>
  );
};

export default Other;
