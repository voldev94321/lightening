"use client";

import TopBar from "@/layouts/TopBar";
import LandingComponent from "./LandingComponent";
import AboutUsComponent from "./AboutUsComponent";
import PricingComponent from "./PricingComponent";
import LearnMoreComponent from "./LearnMoreComponent";
import FAQsComponent from "./FAQsComponent";

const LandingPage = () => {
  return (
    <div className="max-w-default w-5/6 mx-auto">
      <TopBar />
      <LandingComponent />
      <AboutUsComponent />
      <PricingComponent />
      <LearnMoreComponent/>
      <FAQsComponent/>
    </div>
  );
};

export default LandingPage;
