"use client";

interface PlanProps {
  title: string;
  additionalDescription: string;
  price: number;
  isBest?: boolean;
}

const Plan = ({ title, additionalDescription, price, isBest }: PlanProps) => {
  return (
    <div className={`px-11 py-9 rounded-2xl ${isBest ? "border-2 border-warning bg-warning-background hover:bg-warning-quater transition" : "bg-light-one hover:border-accent border-2 border-transparent transition hover:bg-accent-ten"}`}>
      <div className="flex justify-between items-center">
        <div>
          <div className={`text-lg font-semibold ${isBest && "text-warning"}`}>{title}</div>
          <div className="mt-2 text-sm opacity-75 leading-[17.5px]">Get full access to our <br/>IPv6 Proxies for {additionalDescription}</div>
        </div>
        <div className="text-2xl font-semibold">${price}</div>
      </div>
      <div className={`${isBest ? "bg-warning-background border-2 border-warning hover:bg-warning-quater text-light-75" : "bg-accent-five text-accent hover:bg-accent-quater"} rounded-lg text-center p-3 mt-4 cursor-pointer font-semibold transition`}>Buy Now</div>
    </div>
  );
};

export default Plan;
