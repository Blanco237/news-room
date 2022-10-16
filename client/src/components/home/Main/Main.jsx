import React from "react";
import { useQuery } from "@tanstack/react-query";

import styles from "./main.module.css";

import CardPartialTitle from "../CardPartialTitle/CardPartialTitle";
import CardOverlay from "../CardOverlay/CardOverlay";
import Loader from "../../shared/Loader/Loader";

import { getData } from './../../../api/api';

const Main = () => {
  const { data, isLoading } = useQuery(["main"], () => getData('/main'));

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
