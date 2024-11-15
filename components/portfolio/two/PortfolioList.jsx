"use client"; // Marking the component as a Client Component

import { useEffect, useState } from "react";
import FadeInStagger from "@/components/animation/FadeInStagger";
import Image from "next/image";
import Link from "next/link";
import URL from "@/components/URL.js"; 

function PortfolioList() {
    const [portfolioData, setPortfolioData] = useState([]);

    useEffect(() => {
        const fetchPortfolioData = async () => {
            try {
                const response = await fetch(`${URL}/api/portfolio`);
                const data = await response.json();
                
                console.log("Fetched Data:", data);

                // Check if data is an array or an object
                if (Array.isArray(data)) {
                    // Handle array case
                    const formattedData = data.map((item) => ({
                        id: item.id,
                        title: item.portfolio_title,
                        description: item.description,
                        img: `${URL}/${item.photo.replace(/\\/g, '/')}`, // Fix image path with leading slash
                    }));
                    setPortfolioData(formattedData);
                } else if (data && typeof data === "object") {
                    // Handle single object case
                    const formattedData = [{
                        id: data.id,
                        title: data.portfolio_title,
                        description: data.description,
                        img: `${URL}/${data.photo.replace(/\\/g, '/')}`, // Fix image path with leading slash
                    }];
                    setPortfolioData(formattedData);
                } else {
                    console.error("Unexpected data format:", data);
                }
            } catch (error) {
                console.error("Error fetching portfolio data:", error);
            }
        };

        fetchPortfolioData();
    }, []);

    return (
        <div className="section aximo-project-page aximo-section-padding5 mt-5">
            <div className="container">
                <div className="row">
                    {portfolioData.length > 0 ? (
                        portfolioData.map((portfolio, index) => (
                            <FadeInStagger className="col-lg-6" key={portfolio.id} index={index}>
                                <div className="aximo-project-thumb">
                                    <Image 
                                        src={portfolio.img} 
                                        alt={portfolio.title} 
                                        sizes="100vw" 
                                        layout="responsive" 
                                        width={800} 
                                        height={400} 
                                        style={{
                                            height: '400px !important',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <div className="aximo-project-wrap">
                                        <div className="aximo-project-data">
                                            <Link href={`/single-portfolio/${portfolio.id}`}>
                                                <h3>{portfolio.title}</h3>
                                            </Link>
                                            <p>{portfolio.description}</p>
                                        </div>
                                        <Link className="aximo-project-icon" href={`/single-portfolio/${portfolio.id}`}>
                                            <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                                                    stroke="#FDFDE1"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </FadeInStagger>
                        ))
                    ) : (
                        <p>Loading portfolio data...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PortfolioList;
