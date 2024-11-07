"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Shape1Img from "../../../public/images/v1/shape1.png";
import Star2Img from "../../../public/images/v1/star2.png";
import URL from "@/components/Url.js";

function FooterContent() {
    const [footerData, setFooter] = useState(null);

    useEffect(() => {
        const fetchFooterData = async () => {
            try {
                const response = await fetch(`${URL}/api/footer_content`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                setFooter(data);
            } catch (error) {
                console.error("Error fetching footer data:", error);
            }
        };

        fetchFooterData();
    }, []);

    if (!footerData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="aximo-default-content light position-relative">
            <h2>
                <span className="aximo-title-animation">
                    {footerData.primary_title}
                    <span className="aximo-title-icon">
                        <Image src={Star2Img} alt="Star icon" />
                    </span>
                </span>
                <br />
                {footerData.secondary_title}
            </h2>
            <p>{footerData.description}</p>
            <div className="aximo-info-wrap">
                <div className="aximo-info">
                    <ul>
                        <li>{footerData.mobile_title}:</li>
                        <li>
                            <a href={`tel:${footerData.mobile_number}`}>
                                {footerData.mobile_number}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="aximo-info">
                    <ul>
                        <li>{footerData.email_title}:</li>
                        <li>
                            <a href={`mailto:${footerData.email_number}`}>
                                {footerData.email_number}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="aximo-social-icon social-large">
                <ul>
                    <li>
                        <a href={footerData.footer_twitter_url} target="_blank" rel="noopener noreferrer">
                            <i className="icon-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href={footerData.footer_facebook_url} target="_blank" rel="noopener noreferrer">
                            <i className="icon-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href={footerData.footer_instagram_url} target="_blank" rel="noopener noreferrer">
                            <i className="icon-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href={footerData.footer_linkedin_url} target="_blank" rel="noopener noreferrer">
                            <i className="icon-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="aximo-hero-shape aximo-footer-shape">
                <Image src={Shape1Img} alt="Footer shape" />
            </div>
        </div>
    );
}

export default FooterContent;
