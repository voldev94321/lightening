"use client";

import { BiLogoTelegram } from "react-icons/bi";
import { FaDiscord, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const menus = [
  {
    title: "ACCOUNT",
    items: [
      {
        value: "Create Account",
        link: "",
      },
      {
        value: "Log In",
        link: "",
      },
    ],
  },
  {
    title: "PRODUCTS",
    items: [
      {
        value: "IPv6",
        link: "",
      },
      {
        value: "Datacenter",
        link: "",
      },
      {
        value: "Residential",
        link: "",
      },
      {
        value: "ISP",
        link: "",
      },
    ],
  },
  {
    title: "EXPLORE",
    items: [
      {
        value: "FAQs",
        link: "",
      },
      {
        value: "Terms of Service",
        link: "",
      },
      {
        value: "Privacy Policy",
        link: "",
      },
      {
        value: "Cookie Policy",
        link: "",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-secondary pt-16 pb-7 mt-6">
      <div className="max-w-default w-5/6 mx-auto">
        <div className=" md:flex justify-between items-center">
          <div>
            <img src="/img/logo.png" className="h-12" alt="logo" />
            <div className="mt-6 opacity-75 max-w-80">
              LightningProxies offers a complex proxy
              infrastructure equipped with many proxy solutions 
              in one place. We have Datacenter, Residential, 
              IPv6 & ISP proxies at a cost-effective price.
            </div>
            <div className="flex bg-discord mt-8 py-4 px-5 rounded-lg items-center gap-2 w-fit cursor-pointer">
              <FaDiscord className="text-white w-7 h-7" />
              <div>
                <div className="text-white font-semibold">
                  Join Our Discord Channel
                </div>
                <div className="text-white text-sm opacity-75">
                  Click here to join our discord community
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex gap-28 mt-20 hidden">
            {menus.map((menu, index) => (
              <div key={"footer-menu-" + index}>
                <div className="text-accent font-semibold mb-5">
                  {menu.title}
                </div>
                {menu.items.map((item, index1) => (
                  <div
                    className="opacity-75 mb-3 cursor-pointer"
                    key={"footer-item-" + index1}
                  >
                    {item.value}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="md:hidden flex gap-8 justify-start mt-20">
            <div className="flex flex-col gap-8">
              {menus.map(
                (menu, index) =>
                  index != 1 && (
                    <div key={"footer-menu-" + index}>
                      <div className="text-accent font-semibold mb-5">
                        {menu.title}
                      </div>
                      {menu.items.map((item, index1) => (
                        <div
                          className="opacity-75 mb-3 cursor-pointer"
                          key={"footer-item-" + index1}
                        >
                          {item.value}
                        </div>
                      ))}
                    </div>
                  )
              )}
            </div>
            <div>
              <div className="text-accent font-semibold mb-5">
                {menus[1].title}
              </div>
              {menus[1].items.map((item, index1) => (
                <div
                  className="opacity-75 mb-3 cursor-pointer"
                  key={"footer-item-" + index1}
                >
                  {item.value}
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="mt-12 mb-7" />
        <div className="md:flex justify-between items-center">
          <div className="text-sm opacity-75 text-center md:text-left">
            Copyright © 2023 LightningProxies All rights reserved.
          </div>
          <div className="flex gap-5 mt-6 md:mt-0 justify-center">
            <BiLogoTelegram className="w-5 h-5 cursor-pointer" />
            <RiInstagramFill className="w-5 h-5 cursor-pointer" />
            <FaTwitter className="w-5 h-5 cursor-pointer" />
            <FaFacebookF className="w-5 h-5 cursor-pointer" />
            <FaDiscord className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
