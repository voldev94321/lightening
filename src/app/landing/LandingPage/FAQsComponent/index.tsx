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
    <div className="mt-56 py-10 px-16 border-accent-ten border-2 rounded-3xl flex flex-col max-w-[892px] mx-auto">
      <div className="text-accent font-semibold text-lg">FAQs</div>
      <div className="text-3xl font-semibold mt-2 mb-8">
        All your Questions, Answered
      </div>
      {QAs.map((item, index) => (
        <div
          key={"qa-" + index}
          className={`p-7 border-2 rounded-2xl mb-3 cursor-pointer ${selectedQA == index && "border-accent"}`}
          onClick={()=>{handleClick(index)}}
        >
          <div className="flex justify-between items-center">
            <div className="font-semibold text-lg">{item.question}</div>
            <IoIosArrowDown />
          </div>
          {selectedQA == index && <div className="mt-3 opacity-50">{item.answer}</div>}
        </div>
      ))}
      <div className="mt-6 flex items-center mx-auto px-7 py-3 border-2 border-accent rounded-full cursor-pointer">Read all FAQs <IoIosArrowForward /></div>
    </div>
  );
};

export default FAQsComponent;
