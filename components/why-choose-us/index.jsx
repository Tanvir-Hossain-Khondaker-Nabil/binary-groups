'use client'; // Add this at the top of the file

import { useEffect, useState } from "react";
import FadeInLeft from "@/components/animation/FadeInLeft";
import Image from "next/image";
import Shape2Img from "../../public/images/v4/shape2.png";
import URL from "@/components/URL.js"; // assuming this is your base API URL

function WhyChooseUs() {
    // State to hold API data
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from the API on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${URL}/api/why_choose_us`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
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
    }, []); // Empty array ensures this runs only once when the component mounts

    // If data is still loading
    if (loading) {
        return <div></div>;
    }

    // If there's an error fetching data
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <FadeInLeft className="aximo-content-thumb border-radius">
                            <Image
                                src={`${URL}/${data.photo.replace(/\\/g, '/')}`} // Fallback to default image if no photo in API
                                alt="Thumbnail Image"
                                sizes="100vw"
								width="600"
								height="200"
                            />
                            <div className="aximo-thumb-shape4">
                                <Image src={Shape2Img} alt="Shape Image" />
                            </div>
                        </FadeInLeft>
                    </div>
                    <div className="col-lg-7">
                        <div className="aximo-default-content arimo-font m-left-gap">
                            <span className="aximo-subtitle">{data.info_title}</span>
                            <h2>{data.title}</h2>
                            <p>{data.description}</p>
                            <p>
                                <strong>{data.first_container_title}</strong>: {data.first_container_description}
                            </p>
                            <p>
                                <strong>{data.second_container_title}</strong>: {data.second_container_description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;
