import React from "react";
import FooterTitle from './../FooterTitle';

const EditorsPicks = () => {
  return (
    <section className="md:w-4/12 w-full flex flex-col gap-2">
      <FooterTitle title={"Editor's Picks"} />
      <div className="grid grid-cols-2 gap-2">
        <div className="w-full bg-orange-500 h-20"></div>
        <div className="w-full bg-orange-500 h-20"></div>
        <div className="w-full bg-orange-500 h-20"></div>
        <div className="w-full bg-orange-500 h-20"></div>
      </div>
    </section>
  );
};

export default EditorsPicks;
