// Add this directive at the very top
"use client";

import { useEffect, useState } from "react";
import HeroContent from "./HeroContent";
import HeroThumbs from "./HeroThumbs";
import URL from "@/components/Url.js";

function Hero() {
    const [sliderData, setSliderData] = useState(null);

    useEffect(() => {
        const fetchSliderData = async () => {
            try {
                const response = await fetch(`${URL}/api/slider_content`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setSliderData(data);
            } catch (error) {
                console.error("Error fetching slider data:", error);
            }
        };

        fetchSliderData();
    }, []);

    if (!sliderData) {
        return <div></div>; // Optional loading state
    }
    return (
        <div className="aximo-hero-section dark-bg">
            <div className="container position-relative">
                <div className="row">
                    <div className="col-lg-8">
                        <HeroContent sliderData={sliderData} />
                    </div>
                    <div className="col-lg-4">
                        <HeroThumbs sliderData={sliderData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
