"use client";
import { useEffect, useState } from "react";
import HeroContent from "./HeroContent";
import HeroVideo from "./HeroVideo";
import URL from "@/components/Url.js";

function Hero() {
    const [sliderData, setSliderData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                console.error("Error fetching slider data:", error.message);
                setError("Failed to load slider data.");
            } finally {
                setLoading(false);
            }
        };

        fetchSliderData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="aximo-hero-section4" style={{ backgroundImage: `url(${URL}/${sliderData.photo.replace(/\\/g, '/')})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <HeroContent sliderData={sliderData} />
                    </div>
                    <div className="col-lg-4 d-flex align-items-end justify-content-center">
                        <HeroVideo sliderData={sliderData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
