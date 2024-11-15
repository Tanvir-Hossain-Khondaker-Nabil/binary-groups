'use client'; // Ensures this runs on the client side

import { useState, useEffect } from "react";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import Shape4Img from "../../public/images/v4/shape4.png";
import URL from "@/components/URL.js"; // Keep this import only once
import QuoteImg from "../../public/images/v4/quote.png"; // No need to import URL here again

// Main Testimonials Component
function Testimonials() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data for client reviews from the new API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${URL}/api/client_review`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch data.");
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Run once when component mounts

    // If data is still loading
    if (loading) {
        return <div></div>;
    }

    // If there's an error fetching data
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="section aximo-section-padding5 position-relative">
            <div className="container">
                <div className="aximo-section-title arimo-font">
                    <div className="row">
                        <div className="col-lg-7">
                            <span className="aximo-subtitle">{data.info_title}</span>
                            <h2>{data.title}</h2>
                        </div>
                        <div className="col-lg-5 d-flex align-items-end justify-content-end">
                            <div className="aximo-title-btn">
                                <Link className="aximo-default-btn pill blue-btn" href="/service">
                                    View all services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <FadeInStaggerTwo>
                    {/* First Counter and Testimonial */}
                    <FadeInStaggerTwoChildren className="row">
                        <div className="col-lg-4">
                            <div className="aximo-counter-wrap4">
                                <div className="aximo-counter-data4">
                                    <h2>
                                        <span className="aximo-counter">
                                            <CountUp end={parseInt(data.first_counter_number)} duration={3} redraw={true} enableScrollSpy />
                                        </span>
                                        {data.first_counter_sub_title}
                                    </h2>
                                    <p>{data.first_counter_content}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="aximo-testimonial-wrap aximo-testimonial-wrap3">
                                <div className="aximo-testimonial-quote">
                                    <Image src={QuoteImg} alt="QuoteImg" />
                                </div>
                                <div className="aximo-testimonial-data">
                                    <p>{data.first_review_description}</p>
                                </div>
                                <div className="aximo-testimonial-author">
                                    <div className="aximo-testimonial-author-thumb">
                                        <Image src={`${URL}/${data.first_review_photo}`} alt="Thumb1Img" sizes="100vw" width="50" height="50"/>
                                    </div>
                                    <div className="aximo-testimonial-author-data">
                                        <span>{data.first_review_name}</span>
                                        <p>{data.first_review_sub_title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeInStaggerTwoChildren>

                    {/* Second Counter and Testimonial */}
                    <FadeInStaggerTwoChildren className="row">
                        <div className="col-lg-4 order-lg-2">
                            <div className="aximo-counter-wrap4">
                                <div className="aximo-counter-data4">
                                    <h2>
                                        <span className="aximo-counter">
                                            <CountUp end={parseInt(data.second_counter_number)} duration={3} redraw={true} enableScrollSpy />
                                        </span>
                                        {data.second_counter_sub_title}
                                    </h2>
                                    <p>{data.second_counter_content}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="aximo-testimonial-wrap aximo-testimonial-wrap3">
                                <div className="aximo-testimonial-quote">
                                    <Image src={QuoteImg} alt="QuoteImg" />
                                </div>
                                <div className="aximo-testimonial-data">
                                    <p>{data.second_review_description}</p>
                                </div>
                                <div className="aximo-testimonial-author">
                                    <div className="aximo-testimonial-author-thumb">
                                        <Image src={`${URL}/${data.second_review_photo}`} alt="Thumb2Img" sizes="100vw" width="50" height="50"/>
                                    </div>
                                    <div className="aximo-testimonial-author-data">
                                        <span>{data.second_review_name}</span>
                                        <p>{data.second_review_sub_title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeInStaggerTwoChildren>
                </FadeInStaggerTwo>

            </div>
            <div className="aximo-v4-shape2">
                <Image src={Shape4Img} alt="Shape4Img" />
            </div>
        </div>
    );
}

export default Testimonials;
