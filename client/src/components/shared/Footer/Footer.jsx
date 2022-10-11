import React from "react";

import logo from "../../../assets/logo.png";
import FooterTitle from "../FooterTitle";
import IconList from "../IconList";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center">
      <section className=" w-full flex justify-between items-start px-6 py-8 gap-6 md:flex-row flex-col">
        <section className="md:w-2/12 w-full flex flex-col gap-5">
          <div className="w-7/12">
            <img src={logo} alt="News Hub Logo" className="w-full" />
          </div>
          <IconList />
        </section>
        <section className="md:w-3/12 w-full flex flex-col gap-2">
          <FooterTitle title={"About"} />
          <p className="text-justify">
          <strong>News Hub </strong> is a multifaceted digital media company dedicated to helping consumers, business leaders and policy officials make important decisions in their lives. We use world-class data and technology to publish independent reporting, rankings, journalism and advice that has earned the trust of our readers and users for nearly 90 years. Our platforms include Education, Health, Money, Travel, Cars, News and 360 Reviews.
          </p>  
        </section>
        <section className="md:w-3/12 w-full flex flex-col gap-2">
          <FooterTitle title={"Archives"} />
          <div className="flex gap-6">
            <div>
              <p>May 2020</p>
              <p>May 2020</p>
              <p>May 2020</p>
              <p>May 2020</p>
              <p>May 2020</p>
              <p>May 2020</p>
            </div>
            <div>
              <p>May 2020</p>
              <p>May 2020</p>
              <p>May 2020</p>
              <p>May 2020</p>
              <p>May 2020</p>
              <p>May 2020</p>
            </div>
          </div>
        </section>
        <section className="md:w-4/12 w-full flex flex-col gap-2">
          <FooterTitle title={"Editor's Picks"} />
          <div className="grid grid-cols-2 gap-2">
            <div className="w-full bg-orange-500 h-20"></div>
            <div className="w-full bg-orange-500 h-20"></div>
            <div className="w-full bg-orange-500 h-20"></div>
            <div className="w-full bg-orange-500 h-20"></div>
          </div>
        </section>
      </section>
      <section className="w-full py-5 bg-secondary grid place-items-center">
        <p>Designed and Developed By <a href="https://github.com/Blanco237" target="_blank" className="font-medium text-blue-500 hover:underline">Blanco237</a></p>
      </section>
    </footer>
  );
};

export default Footer;
