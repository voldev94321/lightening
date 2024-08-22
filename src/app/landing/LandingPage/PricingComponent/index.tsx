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
    <div className="md:mt-44 mt-20">
      <div className="text-accent text-center font-bold text-sm">PRICING</div>
      <div className="text-center font-semibold text-3xl mt-1">
        Select the plan that suits you best
      </div>
      <div className="flex border-[1px] rounded-lg w-full max-w-fit md:w-fit mx-auto mt-7 py-2 md:px-4 px-2 md:gap-2 gap-0 bg-light-one">
        {items.map((value, index) => (
          <div
            key={"pricing-" + index}
            className={`md:text-lg text-xs cursor-pointer py-2 md:w-[123px] md:h-[49px] w-20 text-center font-semibold rounded-lg  hover:bg-accent-five transition ${
              selectedItem == index && "bg-accent-ten text-accent"
            } relative`}
            onClick={() => {
              handleClick(index);
            }}
          >
            {value}
            {index == 0 && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-accent rounded-full text-xs py-1 w-[68px]">
                10% OFF
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-11 gap-6">
        <div className="hidden md:block">
          <Plan
            title={plans[0].title}
            additionalDescription={plans[0].additional_description}
            price={plans[0].price}
          />
          <div className="h-6"></div>
          <div className="hidden md:block lg:hidden">
            <Plan
              title={plans[1].title}
              additionalDescription={plans[1].additional_description}
              price={plans[1].price}
            />
          </div>
          <div className="h-6"></div>
          <Plan
            title={plans[2].title}
            additionalDescription={plans[2].additional_description}
            price={plans[2].price}
            isBest
          />
        </div>
        <div className="hidden lg:block">
          <Plan
            title={plans[1].title}
            additionalDescription={plans[1].additional_description}
            price={plans[1].price}
          />
        </div>
        <div className="flex flex-col">
          <div className="border-2 border-accent rounded-2xl bg-accent-ten px-11 py-8 lg:h-fit md:flex-grow">
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
          <div className="mt-5 border-2 justify-between px-9 py-4 rounded-2xl items-center hidden lg:flex md:block bg-light-one border-light-ten">
            <div className="font-semibold">For any custom plans</div>
            <div className="flex items-center bg-accent-five text-accent px-8 py-3 rounded-xl font-semibold  hover:bg-accent-ten transition cursor-pointer md:mt-4 lg:mt-0">
              Contact Us&nbsp;
              <FaArrowRightLong className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        {plans.map((plan, index) => (
          <div className="my-4" key={"plan-" + index}>
            <Plan
              title={plan.title}
              additionalDescription={plan.additional_description}
              price={plan.price}
              isBest={plan.isBest}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingComponent;
