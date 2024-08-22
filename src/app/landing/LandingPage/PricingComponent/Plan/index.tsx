"use client";

interface PlanProps {
  title: string;
  additionalDescription: string;
  price: number;
  isBest?: boolean;
}

const Plan = ({ title, additionalDescription, price, isBest }: PlanProps) => {
  return (
    <div className={`px-11 py-9 rounded-2xl ${isBest ? "border-2 border-warning bg-warning-background " : "bg-secondary bg-opacity-5"}`}>
      <div className="flex justify-between items-center">
        <div>
          <div className={`text-lg font-semibold ${isBest && "text-warning"}`}>{title}</div>
          <div className="mt-2 text-sm opacity-75">Get full access to our </div>
          <div className="mt-2 text-sm opacity-75">IPv6 Proxies for {additionalDescription}</div>
        </div>
        <div className="text-2xl font-semibold">${price}</div>
      </div>
      <div className={`${isBest ? "bg-warning-background border-2 border-warning" : "bg-accent-ten text-accent"} rounded-lg text-center p-3 mt-4 cursor-pointer`}>Buy Now</div>
    </div>
  );
};

export default Plan;
