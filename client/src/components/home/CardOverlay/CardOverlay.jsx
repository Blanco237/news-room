import React from "react";

import styles from './card.module.css'

const CardOverlay = ({ img, title }) => {
  return (
    <div className={`relative ${styles.body} cursor-pointer`}>
      <img src={img} alt="News Story" className="w-full" />
      <div className="absolute bottom-0 left-0 to-transparent text-1xl w-full px-2 pb-3 font-bold text-gray text-left shadow">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default CardOverlay;
