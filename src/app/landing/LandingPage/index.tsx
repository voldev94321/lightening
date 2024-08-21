"use client";

import TopBar from "@/layouts/TopBar";
import LandingComponent from "./LandingComponent";
import AboutUsComponent from "./AboutUsComponent";
import PricingComponent from "./PricingComponent";
import LearnMoreComponent from "./LearnMoreComponent";

const LandingPage = () => {
  return (
    <div className="max-w-default mx-auto">
      <TopBar />
      <LandingComponent />
      <AboutUsComponent />
      <PricingComponent />
      <LearnMoreComponent/>
    </div>
  );
};

export default LandingPage;
