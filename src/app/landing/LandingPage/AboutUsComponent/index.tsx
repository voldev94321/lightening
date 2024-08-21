/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

const items = [
  {
    title: "Lightning Fast Speeds",
    value:
      "Our proxies are hosted on dedicated servers with 10GBps Network Speed, assuring a fast response time and no rate limits.",
    icon: "flash.svg",
  },
  {
    title: "Global Proxies",
    value:
      "Our proxy network contains millions of unique IP addresses from 150+ countries and 1000+ cities. Web scraping has never been so easy since us.",
    icon: "flash.svg",
  },
  {
    title: "Diversity",
    value:
      "Be it Datacenter, Residential, ISP or IPv6 Proxies, we have everything to scale your business up.",
    icon: "3square.svg",
  },
  {
    title: "Enhanced Privacy",
    value:
      "We have a strict no log policy, your privacy is a Top-Priority for us.",
    icon: "lock.svg",
  },
  {
    title: "Priority Support",
    value:
      "We are available 24/7/365 even on holidays to support you every step of the way, in case you need it.",
    icon: "24-support.svg",
  },
  {
    title: "User-Friendly Dashboard",
    value:
      "With our advanced featured dashboard, you can easily manage your plans and keep track of your proxy usage.",
    icon: "element-4.svg",
  },
];

const AboutUsComponent = () => {
  const [selectedItem, setSelectedItem] = React.useState(-1);

  const handleClick = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <div className="mt-48 text-center">
      <div className="mt-2 text-accent font-semibold">ABOUT US</div>
      <div className="mt-2 text-3xl font-semibold">
        Why do businesses choose us for their operations?
      </div>
      <div className="mt-2 ">
        We offer a reliable & complex proxy infrastructure at everyone&apos;s
        <br /> disposal, ready to deliver outstanding performances.
      </div>
      <div className="grid grid-cols-3 mt-12 gap-6">
        {items.map((item, index) => (
          <div
            key={"about-grid-" + index}
            className={`px-11 py-8 cursor-pointer border-2 ${selectedItem == index ? "border-accent bg-accent-ten rounded-xl" : " border-transparent"}`}
            onClick={() => {
              handleClick(index);
            }}
          >
            <div className="p-2 bg-accent-quater w-fit rounded-2xl">
              <img src={`/img/about-items/${item.icon}`} alt="about-items" />
            </div>
            <div className="text-left mt-2 text-lg font-semibold">
              {item.title}
            </div>
            <div className="text-left mt-2 opacity-50 text-sm">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsComponent;
