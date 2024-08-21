/* eslint-disable @next/next/no-img-element */
"use client";

import CardBox from "@/components/boxes/CardBox";
import { FaArrowRightLong } from "react-icons/fa6";

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
]

const TopBar = () => {
  return <CardBox className="mt-topbar h-topbar shadow-[0px_0px_5px_5px_rgb(150,150,150,0.05)]">
    <div className="flex items-center w-full h-full justify-between">
      <img src="/img/logo.png" alt="logo" className="h-logo"/>
      <div className="flex gap-12">
        {menus.map((menu: any, index: number) => (
          <div key={index} className="cursor-pointer">{menu.title}</div>
        ))}
      </div>
      <div className="flex gap-4 items-center">
        <div className="cursor-pointer">Log In</div>
        <div className="bg-accent text-white px-6 py-3 rounded-2xl flex items-center cursor-pointer">Get Started&nbsp;<FaArrowRightLong className="w-3 h-3"/></div>
      </div>
    </div>
  </CardBox>;
};

export default TopBar;
