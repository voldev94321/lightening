'use client';

import MainProvider from "../../providers/MainProvider";
import LandingPage from "./LandingPage";

const Landing = () => {
    return <MainProvider>
        <LandingPage/>
    </MainProvider>
}

export default Landing;