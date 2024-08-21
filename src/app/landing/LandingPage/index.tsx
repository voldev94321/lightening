'use client'

import TopBar from "@/layouts/TopBar";
import LandingComponent from "./LandingComponent";
import AboutUsComponent from "./AboutUsComponent";

const LandingPage = () => {
    return <div className="max-w-default mx-auto">
        <TopBar/>
        <LandingComponent/> 
        <AboutUsComponent/>
    </div>
};

export default LandingPage;