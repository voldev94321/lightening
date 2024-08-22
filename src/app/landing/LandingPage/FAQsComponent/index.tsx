"use client";

import React from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const QAs = [
  {
    question: "What payments method do you accept?",
    answer:
      "Phasellus accumsan augue augue, ac aliquam odio porttitor ut. Ut sollicitudin neque lectus. Pellentesque varius eu ex a imperdiet. Mauris sed eleifend ex. Nam elementum viverra ex, sit amet convallis felis ultrices interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    question: "Do you provide trials before purchasing any plans?",
    answer:
      "Phasellus accumsan augue augue, ac aliquam odio porttitor ut. Ut sollicitudin neque lectus. Pellentesque varius eu ex a imperdiet. Mauris sed eleifend ex. Nam elementum viverra ex, sit amet convallis felis ultrices interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    question: "There are any limitations on proxies?",
    answer:
      "Phasellus accumsan augue augue, ac aliquam odio porttitor ut. Ut sollicitudin neque lectus. Pellentesque varius eu ex a imperdiet. Mauris sed eleifend ex. Nam elementum viverra ex, sit amet convallis felis ultrices interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    question: "Do you offer proxies based on time or based on GBs?",
    answer:
      "Phasellus accumsan augue augue, ac aliquam odio porttitor ut. Ut sollicitudin neque lectus. Pellentesque varius eu ex a imperdiet. Mauris sed eleifend ex. Nam elementum viverra ex, sit amet convallis felis ultrices interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    question: "Can i pay with Credit Card/Paypal?",
    answer:
      "Phasellus accumsan augue augue, ac aliquam odio porttitor ut. Ut sollicitudin neque lectus. Pellentesque varius eu ex a imperdiet. Mauris sed eleifend ex. Nam elementum viverra ex, sit amet convallis felis ultrices interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
];
const FAQsComponent = () => {
  const [selectedQA, setSelectedQA] = React.useState(0);

  const handleClick = (index: number) => {
    setSelectedQA(index);
  };
  return (
    <div className="md:mt-56 mt-20 md:py-10 md:px-16 py-5 px-6 border-accent-ten border-2 rounded-3xl flex flex-col max-w-[892px] mx-auto bg-light-one lg:-mb-[98px] z-10 relative">
      <div className="text-accent font-semibold text-lg">FAQs</div>
      <div className="md:text-3xl text-2xl font-semibold mt-2 mb-8">
        All your Questions, Answered
      </div>
      {QAs.map((item, index) => (
        <div
          key={"qa-" + index}
          className={`md:px-6 md:py-4 p-3 border-2 rounded-lg mb-3 cursor-pointer ${selectedQA == index && "border-accent"} transition delay-150 duration-300`}
          onClick={()=>{handleClick(index)}}
        >
          <div className="flex justify-between items-center">
            <div className="font-semibold text-lg">{item.question}</div>
            <IoIosArrowDown />
          </div>
          <div className={`opacity-50 overflow-hidden transition-all delay-150 duration-300 ${selectedQA == index ? "scale-y-100 mt-3" : "scale-y-0 h-0"}`}>{item.answer}</div>
        </div>
      ))}
      <div className="mt-6 flex items-center mx-auto px-7 py-3 border-2 border-accent rounded-full cursor-pointer font-semibold  hover:bg-accent-ten transition">Read all FAQs <IoIosArrowForward /></div>
    </div>
  );
};

export default FAQsComponent;
