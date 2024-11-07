"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Star2Img from "../../../public/images/v1/star2.png";
import Link from "next/link";
import URL from "@/components/Url.js";

function Projects() {
    const [projectData, setProjectData] = useState([]); // Ensure it's an array
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjectData = async () => {
            try {
                const response = await fetch(`${URL}/api/portfolio`);
                if (!response.ok) throw new Error("Failed to fetch portfolio data");

                const data = await response.json();
                console.log("Fetched project data:", data);

                // If the data is not an array, wrap it in an array
                setProjectData(Array.isArray(data) ? data : [data]);
            } catch (error) {
                console.error("Error fetching project data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjectData();
    }, []);

    const swiperSettings = {
        spaceBetween: 24,
        direction: "horizontal",
        pagination: {
            clickable: true,
        },
        modules: [Pagination, Mousewheel],
        mousewheel: true,
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            900: {
                slidesPerView: 2,
            },
            1600: {
                slidesPerView: 3.5,
            },
        },
    };

    if (loading) return <div></div>;
    if (projectData.length === 0) return <div>No projects available.</div>; // Check for an empty array

    return (
        <div className="section dark-bg aximo-section-padding">
            <div className="container">
                <div className="aximo-section-title center light">
                    <h2>
                        Our Portfolio &amp;
                        <span className="aximo-title-animation">
                            creative projects
                            <span className="aximo-title-icon">
                                <Image src={Star2Img} alt="Star2Img" />
                            </span>
                        </span>
                    </h2>
                </div>
            </div>
            <div className="swiper aximo-project-slider">
                <Swiper {...swiperSettings}>
                    {projectData.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className="swiper-slide">
                                <div className="aximo-project-thumb">
                                    <Image 
                                        src={`${URL}/${project.photo.replace(/\\/g, '/')}`} 
                                        alt={project.portfolio_title} 
                                        width={1300} // Adjust the width as needed
                                        height={800} // Adjust the height as needed
                                        sizes="100vw" 
                                        style={{
                                            height: '400px',
                                        }}
                                    />
                                    <div className="aximo-project-wrap">
                                        <div className="aximo-project-data">
                                            <Link href={`/single-portfolio/${project.id}`}>
                                                <h3>{project.portfolio_title}</h3>
                                            </Link>
                                            <p>{project.description}</p>
                                        </div>
                                        <Link className="aximo-project-icon" href={`/single-portfolio/${project.id}`}>
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
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Projects;
