import React from "react";

const CardPartialTitle = ({ img, title }) => {
  return (
    <div className="relative">
      <img src={img} alt="News Story" className="w-full" />
      <div className="absolute -bottom-6 left-0 bg-white text-3xl w-10/12 px-2 py-3 font-bold text-dark text-left shadow">
        <h1 className="link">{title}</h1>
      </div>
    </div>
  );
};

export default CardPartialTitle;
