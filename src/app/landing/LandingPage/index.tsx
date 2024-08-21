"use client";

import TopBar from "@/layouts/TopBar";
import LandingComponent from "./LandingComponent";
import AboutUsComponent from "./AboutUsComponent";
import PricingComponent from "./PricingComponent";

const LandingPage = () => {
  return (
    <div className="max-w-default mx-auto">
      <TopBar />
      <LandingComponent />
      <AboutUsComponent />
      <PricingComponent />
    </div>
  );
};

export default LandingPage;
