import React from "react";

import Image from "../assets/img/banner.svg";

import Search from "../components/Search.js";

const Banner = () => {
  return (
    <div className="container mx-auto lg:mx-0 lg:p-0">
      <div className="container mx-auto flex flex-col lg:mx-4 lg:ml-20 lg:flex-row ">
        <div className="container mx-auto flex flex-col justify-center lg:mr-20 lg:w-3/4">
          <h1 className="mb-6 text-4xl font-semibold leading-none lg:p-0 lg:text-[80px]">
            <span className="text-violet-700">Rent</span> Your Dream House With
            Us.
          </h1>
          <div className="flex items-center justify-center lg:hidden">
            <img src={Image} alt="" className="max-w-[200px]" />
          </div>
          <p className="mb-6 lg:mt-6 lg:text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
            est vel libero bibendum euismod a ac nisi. Sed consequat volutpat
            urna, in pulvinar nunc varius ac. Proin eleifend eget nisl ut
            eleifend. Nullam nec augue ac nibh aliquet tristique non non magna.
            Fusce congue velit a velit malesuada, et molestie enim accumsan.
          </p>
          <button
            className="rounded-full bg-violet-700 py-2 px-6 text-white shadow-lg hover:bg-violet-800 
          focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 lg:mt-6"
          >
            Get Started
          </button>
        </div>
        <div className=" hidden flex-1 lg:flex">
          <img src={Image} alt="" className="lg:max-w-[1000px]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
