/* eslint-disable @next/next/no-img-element */
"use client";

import CardBox from "@/components/boxes/CardBox";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const menus = [
  {
    title: "About Us",
    value: "aboutus",
  },
  {
    title: "Pricing",
    value: "pricing",
  },
  {
    title: "FAQs",
    value: "faqs",
  },
  {
    title: "Terms",
    value: "terms",
  },
];

const TopBar = () => {
  const [isMenu, setIsMenu] = React.useState(false);

  return (
    <CardBox className="sticky md:top-12 top-4 lg:h-24 max-w-default md:w-4/5 w-11/12  mx-auto bg-white z-50 shadow-[0px_0px_5px_5px_rgb(150,150,150,0.05)]">
      <div className="flex items-center w-full h-full justify-between">
        <img src="/img/logo.png" alt="logo" className="md:h-12 h-8" />
        <div className="lg:flex gap-12 hidden">
          {menus.map((menu: any, index: number) => (
            <div key={index} className="cursor-pointer">
              {menu.title}
            </div>
          ))}
        </div>
        <div className="flex lg:gap-4 gap-2 items-center">
          <div className="cursor-pointer lg:block hidden">Log In</div>
          <div className="bg-accent text-white md:px-6 px-4 md:py-3 py-2 lg:rounded-2xl rounded-lg flex items-center cursor-pointer text-nowrap  hover:bg-accent-75 transition">
            Get Started&nbsp;
            <FaArrowRightLong className="w-3 h-3" />
          </div>
          <div
            className="bg-accent-quater lg:hidden py-2 text-sm rounded-lg px-2 md:px-3 md:py-3 cursor-pointer"
            onClick={() => {
              setIsMenu(!isMenu);
            }}
          >
            {isMenu ? (
              <RxCross2 className="w-5 h-5 text-accent" />
            ) : (
              <IoMenu className="w-5 h-5 text-accent" />
            )}
          </div>
        </div>
      </div>
      {isMenu && (
        <div className="">
          <hr className="my-2"/>
          <div className="flex justify-between">
            {menus.map((menu: any, index: number) => (
              <div key={index} className="cursor-pointer text-sm p-2 hover:bg-accent-ten w-1/4 text-center transition rounded-lg">
                {menu.title}
              </div>
            ))}
          </div>
        </div>
      )}
    </CardBox>
  );
};

export default TopBar;
