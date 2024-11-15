"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; 
import ArrowRightImg from "../../public/images/icon/arrow-right.svg";
import Star2Img from "../../public/images/v1/star2.png";
import { useEffect, useState } from "react";
import URL from "@/components/URL.js";

function Services() {
    const [serviceData, setServiceData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServiceData = async () => {
            try {
                const response = await fetch(`${URL}/api/service_detail`);
                if (!response.ok) throw new Error("Network response was not ok");
                const data = await response.json();
                setServiceData(Array.isArray(data) ? data : [data]);
            } catch (error) {
                console.error("Error fetching service data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchServiceData();
    }, []);

    if (loading) return <div></div>;
    if (!serviceData.length) return <div>No service data available.</div>;

    return (
        <div className="section aximo-section-padding4">
            <div className="container">
                <div className="aximo-section-title center">
                    <h2>
                        Seasoned Solutions:
                        <span className="aximo-title-animation">
                            Our Expert Services
                            <span className="aximo-title-icon">
                                <Image src={Star2Img} alt="Star" />
                            </span>
                        </span>
                    </h2>
                </div>
                <div className="aximo-service-wrap">
                    <div className="row">
                        {serviceData.map((service) => (
                            <div key={service.id} className="col-md-6">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="aximo-iconbox-wrap4">
                                        <div className="aximo-iconbox-icon4">
                                            {service.service_logo ? (
                                                <Image
                                                    src={`${URL}/${service.service_logo.replace(/\\/g, '/')}`}
                                                    alt={service.service_title}
                                                    width={80}
                                                    height={80}
                                                />
                                            ) : <div>No Image Available</div>}
                                        </div>
                                        <div className="aximo-iconbox-data4">
                                            <h3>{service.service_title}</h3>
                                            <p>{service.primary_description}</p>
                                            <Link href={`/single-service/${service.id}`} className="aximo-icon">
                                                <Image src={ArrowRightImg} alt="arrow right" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>                            
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
