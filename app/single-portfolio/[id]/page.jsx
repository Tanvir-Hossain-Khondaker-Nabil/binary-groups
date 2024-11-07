"use client";

import { useEffect, useState } from "react";
import BreadCrumb from "@/components/common/Breadcrumb";
import Projects from "@/components/layout/projects";
import FadeInRight from "@/components/animation/FadeInRight";
import FadeInUp from "@/components/animation/FadeInUp";
import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";
import URL from "@/components/Url.js";

function SinglePortfolio() {
    const [portfolioData, setPortfolioData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const pathParts = window.location.pathname.split('/');
        const id = pathParts[pathParts.length - 1]; // Assuming the ID is the last segment of the URL


        const fetchPortfolioData = async () => {
            if (id) {
            try {
                const response = await fetch(`${URL}/api/portfolio/${id}`);
                console.log("Response status:", response.status);
                if (!response.ok) throw new Error("Failed to fetch portfolio data");

                const data = await response.json();
                console.log("Fetched portfolio data:", data);

                if (!data || Object.keys(data).length === 0) {
                    console.error("No data received from the API");
                    return;
                }

                setPortfolioData(data);
            } catch (error) {
                console.error("Error fetching portfolio data:", error);
            } finally {
                setLoading(false);
            }
            }
        };

        fetchPortfolioData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (!portfolioData) return <div>No portfolio data available.</div>;

    return (
        <>
            <BreadCrumb title={`${portfolioData.portfolio_title}`} />
            <div className="aximo-project-single-section">
                <div className="container">
                    <FadeInUp className="aximo-project-single-thumb">
                        <Image 
                            src={`${URL}/${portfolioData.photo.replace(/\\/g, '/')}`} 
                            alt="Project Thumbnail" 
                            width={1300} // Adjust as necessary
                            height={400} // Adjust as necessary
                            style={{
                                height: '400px',
                                objectFit: 'cover'
                            }}
                        />
                    </FadeInUp>
                    <div className="aximo-project-info-wrap">
                        <div className="aximo-project-info">
                            <h3>Client:</h3>
                            <p>{portfolioData.client}</p>
                        </div>
                        <div className="aximo-project-info">
                            <h3>Date:</h3>
                            <p>{portfolioData.date}</p>
                        </div>
                        <div className="aximo-project-info">
                            <h3>Duration:</h3>
                            <p>{portfolioData.duration}</p>
                        </div>
                        <div className="aximo-project-info">
                            <h3>Cost:</h3>
                            <p>{portfolioData.cost}</p>
                        </div>
                    </div>
                    <div className="aximo-project-single-wrap">
                        <div className="row">
                            <div className="col-lg-4 order-lg-2">
                                <FadeInRight className="aximo-project-single-thumb2">
                                    <Image 
                                        src={`${URL}/${portfolioData.container_photo.replace(/\\/g, '/')}`} 
                                        alt="Container Thumbnail" 
                                        width={500} // Adjust as necessary
                                        height={200} // Adjust as necessary
                                        sizes="100vw" 
                                    />
                                </FadeInRight>
                            </div>
                            <div className="col-lg-8">
                                <div className="aximo-default-content m-right-gap">
                                    <h2>
                                        {portfolioData.primary_title} 
                                        <span className="aximo-title-animation">
                                            {portfolioData.secondary_title}
                                            
                                        </span>
                                    </h2>
                                    <p>{portfolioData.description}</p>
                                    <div className="aximo-resolve-project-wrap">
                                        {[{
                                            title: portfolioData.first_container_title,
                                            text: portfolioData.first_container_description,
                                        }, {
                                            title: portfolioData.second_container_title,
                                            text: portfolioData.second_container_description,
                                        }, {
                                            title: portfolioData.third_container_title,
                                            text: portfolioData.third_container_description,
                                        }].map((item, index) => (
                                            <div key={index} className="aximo-resolve-project-item">
                                                <h3>
                                                    {index + 1}. {item.title}:
                                                </h3>
                                                <p>{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Projects />
        </>
    );
}

export default SinglePortfolio;
