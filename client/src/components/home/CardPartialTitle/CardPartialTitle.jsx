import React from "react";

const CardPartialTitle = ({ img, title }) => {
  return (
    <div >
      <img src={img} alt="News Story" className="w-full z-0" />
      <div className="bg-white text-3xl w-10/12 px-2 py-3 font-bold z-10 text-dark text-left shadow isolate" style={{marginTop: "-3rem"}}>
        <h1 className="link">{title}</h1>
      </div>
    </div>
  );
};

export default CardPartialTitle;
