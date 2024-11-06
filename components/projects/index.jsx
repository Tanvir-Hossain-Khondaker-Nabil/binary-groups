"use client";
import React, { useEffect, useState } from "react";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import LinkImg from "../../public/images/v4/link.svg";
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
        scrollbar: {
            draggable: true,
        },
        modules: [Scrollbar],
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            900: {
                slidesPerView: 2,
            },
            1600: {
                slidesPerView: 3,
            },
        },
    };

    if (loading) return <div>Loading...</div>;
    if (projectData.length === 0) return <div>No projects available.</div>;

    return (
        <div className="aximo-project-section aximo-section-padding extra-side-margin">
            <div className="container">
                <div className="aximo-section-title center light arimo-font">
                    <span className="aximo-subtitle">Our stunning creation</span>
                    <h2>Our dedication shines through our work</h2>
                </div>
            </div>
            <div className="swiper aximo-project-slider2">
                <Swiper {...swiperSettings}>
                    {projectData.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className="aximo-project-wrap2">
                                <div className="aximo-project-thumb2">
                                    <Image 
                                        src={`${URL}/${project.photo.replace(/\\/g, '/')}`} 
                                        alt={project.portfolio_title} 
                                        width={1300} 
                                        height={800} 
                                        sizes="100vw" 
                                    />
                                    <Link className="aximo-project-icon2" href={`/single-portfolio/${project.id}`}>
                                        <Image src={LinkImg} alt="Link icon" />
                                    </Link>
                                </div>
                                <div className="aximo-project-data2">
                                    <Link href={`/single-portfolio/${project.id}`}>
                                        <h3>{project.portfolio_title}</h3>
                                    </Link>
                                    <p>{project.description}</p>
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
