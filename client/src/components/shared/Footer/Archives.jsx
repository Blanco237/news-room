import React from "react";
import FooterTitle from "../FooterTitle";
import { useQuery } from "@tanstack/react-query";
import { getData } from "./../../../api/api";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import getArchiveDate from '../../../utils/monthtostring';

const Archives = () => {
  const { data, isLoading } = useQuery(["archives"], () => getData("/archive"));

  useEffect(() => {
    console.log(data);
    console.log("From Archives");
  }, [data]);

  return (
    <section className="md:w-3/12 w-full flex flex-col gap-2">
      <FooterTitle title={"Archives"} />
      {isLoading ? (
        <Loader height={`h-[20vh]`} />
      ) : (
        <div className="flex gap-6 h-[20vh]">
          <div>
            {
                data.map((date) => {
                    const  d = getArchiveDate(date.dates);
                    console.log(date);
                    return <p className="link" key={date.dates}>{d}</p>
                })
            }
          </div>
          <div>
            <p>May 2020</p>
            <p>May 2020</p>
            <p>May 2020</p>
            <p>May 2020</p>
            <p>May 2020</p>
            <p>May 2020</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Archives;
