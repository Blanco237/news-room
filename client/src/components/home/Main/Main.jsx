import React from "react";

import styles from "./main.module.css";

import CardPartialTitle from "../CardPartialTitle/CardPartialTitle";

import image from "../testImage.jpg";
import story from "../story.jpg";

import CardOverlay from "../CardOverlay/CardOverlay";
import Loader from "../../shared/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { getMain } from "../../../api/api";
import { useEffect } from "react";

const Main = () => {
  const { data, isLoading } = useQuery(["main"], getMain);

  useEffect(() => {
    console.log(data);
  }, [data]);

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

  return isLoading ? (
    <Loader height={`h-[70vh]`} />
  ) : (
    <section
      className={`grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 md:gap-8 gap-4 px-main pb-5 ${styles.main}`}
    >
      <CardPartialTitle {...data[0]} key={data[0].rid} />
      <CardOverlay {...data[1]} key={data[1].rid} />
      <CardOverlay {...data[2]} key={data[2].rid} />
    </section>
  );
};

export default Main;
