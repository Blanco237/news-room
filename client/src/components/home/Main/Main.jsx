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
      <CardPartialTitle {...data[0]} key={data[0].rid} id={data[0].rid} table="random" />
      <CardOverlay {...data[1]} key={data[1].rid}  id={data[1].rid} table="random" />
      <CardOverlay {...data[2]} key={data[2].rid}  id={data[2].rid} table="random" />
    </section>
  );
};

export default Main;
