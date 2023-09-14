import React from "react";
import { Link } from "react-router-dom";

const CardPartialTitle = ({ id, img, title, table }) => {
  return (
    <div>
      <Link to={`/story/${id}?table=${table}`} reloadDocument>
        <img src={img} alt="News Story" className="w-full z-0" />
        <div className="bg-white md:text-3xl text-lg md:w-10/12 w-11/12 px-2 py-3 font-bold z-10 text-dark text-left md:shadow isolate md:-mt-12 -mt-6 ">
          <h1 className="link">{title}</h1>
        </div>
      </Link>
    </div>
  );
};

export default CardPartialTitle;
