/* eslint-disable @next/next/no-img-element */
"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import CustomerRating from "./CustomerRating";

const LandingComponent = () => {
  return (
    <div className="md:flex mt-12 gap-12">
      <div className="flex-grow flex flex-col gap-3">
        <div className="text-accent uppercase font-semibold">
          Equipped with Millions of IP Resources
        </div>
        <div className="text-landing flex gap-1 md:gap-4 items-center flex-wrap">
          The Most{" "}
          <span>
            <img src="/img/lightening.svg" alt="lightening" className=""/>
          </span>
          Complex
        </div>
        <div className="text-landing">Proxy Network</div>
        <div className="md:text-lg opacity-75 font-semibold text-sm">
          Providing Top-Tier Proxies designed to ensure a high success rate on
          any task, be it easy or difficult.
        </div>
        <div className="flex gap-6 items-center">
          <div className="bg-accent text-white md:px-12 md:py-4 px-6 py-2 md:rounded-2xl rounded-lg flex items-center cursor-pointer">
            Get Started&nbsp;
            <FaArrowRightLong className="w-3 h-3" />
          </div>
          <div className="text-lg font-semibold cursor-pointer">
            View Plans
          </div>
        </div>
        <hr className="my-6"/>
        <CustomerRating/>
      </div>
      <img src="/img/landing.png" alt="landing" className="mt-6 md:mt-0"/>
    </div>
  );
};

export default LandingComponent;
