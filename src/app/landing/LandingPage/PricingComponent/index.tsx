"use client";

import React from "react";
import Plan from "./Plan";
import { GoCheck } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

const items = ["IPv6", "Datacenter", "Residential", "AT&T ISP"];
const plans = [
  {
    title: "1 Day",
    additional_description: "24 hours",
    price: 6.99,
    isBest: false,
  },
  {
    title: "1 Week",
    additional_description: "7 days",
    price: 34.99,
    isBest: false,
  },
  {
    title: "1 Month",
    additional_description: "30 days",
    price: 99.99,
    isBest: true,
  },
];
const plansIncludes = [
  "4000 IPv6 Proxies",
  "Individual /48 subnet and server",
  "Whitelist up to 2 IPs",
  "Unlimited Bandwidth",
  "HTTP/s Protocol Support",
  "Unlimited Concurrent Connections",
];

const PricingComponent = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);

  const handleClick = (index: number) => {
    setSelectedItem(index);
  };
  return (
    <div className="mt-44">
      <div className="text-accent text-center font-bold text-sm">PRICING</div>
      <div className="text-center font-semibold text-3xl mt-1">
        Select the plan that suits you best
      </div>
      <div className="flex border-[1px] rounded-lg w-fit mx-auto mt-7 py-2 px-4 gap-2">
        {items.map((value, index) => (
          <div
            key={"pricing-" + index}
            className={`text-lg cursor-pointer py-2 md:w-32 w-28 text-center ${
              selectedItem == index && "bg-accent-ten rounded-lg"
            } relative`}
            onClick={() => {
              handleClick(index);
            }}
          >
            {value}
            {index == 0 && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-accent rounded-full px-2 text-xs py-1 min-w-20">
                10% OFF
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 mt-11 gap-6">
        <div>
          <Plan
            title={plans[0].title}
            additionalDescription={plans[0].additional_description}
            price={plans[0].price}
          />
          <div className="h-6"></div>
          <Plan
            title={plans[2].title}
            additionalDescription={plans[2].additional_description}
            price={plans[2].price}
            isBest
          />
        </div>
        <div>
          <Plan
            title={plans[1].title}
            additionalDescription={plans[1].additional_description}
            price={plans[1].price}
          />
        </div>
        <div>
          <div className="border-2 border-accent rounded-2xl bg-accent-ten px-11 py-8 h-fit">
            <div className="text-xl font-semibold">IPv6</div>
            <div className="mt-4 opacity-75">
              Duis at est et tellus suscipit interdum non id mauris. Aenean
              tempor congue tortor, vitae luctus purus mollis at. Mauris non
              consectetur dolor.
            </div>
            <div className="mt-7 opacity-75 font-semibold mb-2">
              ALL PLANS INCLUDE
            </div>
            {plansIncludes.map((value, index) => (
              <div
                key={`plans-includ-` + index}
                className="mt-1 flex items-center gap-1"
              >
                <GoCheck className="text-accent" />
                <div className="opacity-75">{value}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 border-2 flex justify-between px-9 py-4 rounded-2xl items-center">
            <div className="font-semibold">For any custom plans</div>
            <div className="flex items-center bg-accent-ten text-accent px-8 py-3 rounded-xl font-semibold">Contact Us&nbsp;<FaArrowRightLong className="w-3 h-3" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
