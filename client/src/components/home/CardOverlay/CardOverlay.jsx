import React from "react";
import { Link } from 'react-router-dom';

import styles from "./card.module.css";

const CardOverlay = ({ id, img, title, width, check, table }) => {
  return (
    <Link to={`/story/${id}?table=${table}`}>
      <div className={`relative ${styles.body} cursor-pointer ${width}`}>
        <img
          src={img}
          alt="News Story"
          className={`w-full ${check && "aspect-square object-cover"} `}
        />
        <div className="absolute bottom-0 left-0 to-transparent text-1xl w-full px-2 pb-3 font-bold text-gray text-left shadow">
          <h1>{title}</h1>
        </div>
      </div>
    </Link>
  );
};

export default CardOverlay;
