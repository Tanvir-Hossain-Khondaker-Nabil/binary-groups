"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";
import AboutCounter from "./AboutCounter";
import Video from "./Video";
import URL from "@/components/URL.js"; // Import URL from the url.js file

function About() {
    const [introData, setIntroData] = useState(null);

    useEffect(() => {
        const fetchIntroData = async (URL) => {
            try {
                const response = await fetch(`${URL}/api/intro_content`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                setIntroData(data);
            } catch (error) {
                console.error("Error fetching intro data:", error);
            }
        };

        fetchIntroData(URL);
    }, []);

    if (!introData) {
        return <div></div>;
    }

    return (
        <div className="section aximo-section-padding">
            <div id="aximo-counter"></div>
            <div className="container">
                <div className="aximo-section-title">
                    <div className="row">
                        <div className="col-lg-7">
                            <h2>
                                <span className="aximo-title-animation">
                                    {introData.primary_title}
                                    <span className="aximo-title-icon">
                                        <Image src={Star2Img} alt="Star Icon" />
                                    </span>
                                </span>
                                {introData.secondary_title}
                            </h2>
                        </div>
                        <div className="col-lg-4 offset-lg-1 d-flex align-items-center">
                            <p>{introData.description}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <Video photo={`${URL}/${introData.photo.replace(/\\/g, '/')}`} youtubeUrl={introData.youtube_url} />
                    </div>
                    <div className="col-lg-4">
                        <AboutCounter introData={introData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
