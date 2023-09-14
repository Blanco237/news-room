import React from "react";
import { Link } from "react-router-dom";

const CardFullTitle = ({ id, img, title, width, table }) => {
  return (
    <div className={`${width} overflow-hidden cursor-pointer shadow`}>
      <Link to={`/story/${id}?table=${table}`} reloadDocument>
        <img
          src={img}
          alt="News Story"
          className="w-full md:aspect-square aspect-video z-0 object-cover hover:scale-125 transition-all duration-500"
        />
        <div className="bg-white md:text-1xl text-base w-full px-2 py-3 md:font-bold z-10 text-dark text-left isolate ">
          <h1 className="link">{title}</h1>
        </div>
      </Link>
    </div>
  );
};

export default CardFullTitle;
