import React from "react";
import FooterTitle from "../FooterTitle";
import { useQuery } from "@tanstack/react-query";
import { getData } from "./../../../api/api";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import getArchiveDate from '../../../utils/monthtostring';
import { useState } from "react";

const Archives = () => {
  const { data: _data, isLoading } = useQuery(["archives"], () => getData("/archive"));
  const [data, setData] = useState([]);

  useEffect(() => {
    if(!_data) return;
    const temp_data = _data.map((date) => getArchiveDate(date.dates));
    setData(Array.from(new Set(temp_data)));
  }, [_data]);

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
                    return <p className="link" key={date}>{date}</p>
                })
            }
          </div>
          <div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Archives;
