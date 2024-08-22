/* eslint-disable @next/next/no-img-element */
"use client";

import CardBox from "@/components/boxes/CardBox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

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
  return (
    <CardBox className="sticky md:top-12 top-4 md:h-24 w-full bg-white z-20 shadow-[0px_0px_5px_5px_rgb(150,150,150,0.05)]">
      <div className="flex items-center w-full h-full justify-between">
        <img src="/img/logo.png" alt="logo" className="md:h-12 h-8" />
        <div className="md:flex gap-12 hidden">
          {menus.map((menu: any, index: number) => (
            <div key={index} className="cursor-pointer">
              {menu.title}
            </div>
          ))}
        </div>
        <div className="flex md:gap-4 gap-2 items-center">
          <div className="cursor-pointer md:block hidden">Log In</div>
          <div className="bg-accent text-white md:px-6 px-4 md:py-3 py-2 md:rounded-2xl rounded-lg flex items-center cursor-pointer text-sm text-nowrap">
            Get Started&nbsp;
            <FaArrowRightLong className="w-3 h-3" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="bg-accent-quater md:hidden py-2 text-sm rounded-lg px-2">
                <IoMenu className="w-5 h-5 text-accent" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {menus.map((menu: any, index: number) => (
                <div key={index} className="cursor-pointer py-2 px-2">
                  {menu.title}
                  
                </div>
              ))}
              <hr/>
              <div className="cursor-pointer py-2 px-2">Log In</div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </CardBox>
  );
};

export default TopBar;
