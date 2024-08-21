/* eslint-disable @next/next/no-img-element */
"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import CustomerRating from "./CustomerRating";

const LandingComponent = () => {
  return (
    <div className="flex mt-12 gap-12">
      <div className="flex-grow flex flex-col gap-3">
        <div className="text-accent uppercase font-semibold">
          Equipped with Millions of IP Resources
        </div>
        <div className="text-landing flex gap-4 items-center">
          The Most{" "}
          <span>
            <img src="/img/lightening.svg" alt="lightening" />
          </span>
          Complex
        </div>
        <div className="text-landing">Proxy Network</div>
        <div className="text-lg opacity-75 font-semibold">
          Providing Top-Tier Proxies designed to ensure a high success rate on
          any task, be it easy or difficult.
        </div>
        <div className="flex gap-6 items-center">
          <div className="bg-accent text-white px-12 py-4 rounded-2xl flex items-center cursor-pointer">
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
      <img src="/img/landing.png" alt="landing" />
    </div>
  );
};

export default LandingComponent;
