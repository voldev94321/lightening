/* eslint-disable @next/next/no-img-element */
"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import { GoCheck } from "react-icons/go";

const bestLevels = [
  "Mauris dignissim sollicitudin erat eu malesuada. ",
  "Sed pellentesque a urna ut vulputate. ",
  "Nulla blandit, dui vulputate dictum convallis, lorem felis. ",
  "Vitae dignissim velit lorem et mauris.",
];

const LearnMoreComponent = () => {
  return (
    <div className="md:mt-60 mt-20 md:flex gap-14 items-center">
      <img src="/img/learn.png" alt="learn" />
      <div className="mt-12 md:mt-0">
        <div className="text-accent font-semibold">LEARN MORE ABOUT US</div>
        <div className="hidden md:block">
          <div className="text-4xl font-semibold mt-2">
            What makes our service
          </div>
          <div className="text-4xl font-semibold mt-2 flex">
            the{" "}
            <img
              src="/img/diamond.png"
              alt="diamond"
              className="w-11 h-11 mx-2"
            />{" "}
            Best on the internet?
          </div>
        </div>
        <div className="block md:hidden">
          <div className="text-4xl font-semibold mt-2">What makes our</div>
          <div className="text-4xl font-semibold mt-2 flex">
            service the{" "}
            <img
              src="/img/diamond.png"
              alt="diamond"
              className="w-11 h-11 mx-2"
            />{" "}
          </div>
          <div className="text-4xl font-semibold mt-2">
            Best on the internet?
          </div>
        </div>
        <div className="mt-4 text-lg opacity-75 ">
          In hac habitasse platea dictumst. Sed erat nibh, vulputate ut lorem
          at, tincidunt varius magna. Aenean enim dui, lacinia id faucibus a,
          vestibulum eu mi
        </div>
        <div className="mt-6 text-lg opacity-75 text-nowrap">
          We got the best level of everything :
        </div>
        {bestLevels.map((value, index) => (
          <div
            key={`bestlevels-` + index}
            className="mt-1 flex items-center gap-1"
          >
            <GoCheck className="text-accent" />
            <div className="opacity-75">{value}</div>
          </div>
        ))}
        <div className="bg-accent text-white px-12 py-4 rounded-2xl flex items-center cursor-pointer w-fit mt-6">
          Get Started&nbsp;
          <FaArrowRightLong className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};

export default LearnMoreComponent;
