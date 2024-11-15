'use client'; // Add this to specify that this is a client component

import { useEffect, useState } from "react";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo"; // Make sure to import animation components
import URL from "@/components/URL.js";
function NumberBox() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from the API on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${URL}/api/container`);
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
    }, []);

    // If data is still loading
    if (loading) {
        return <div></div>;
    }

    // If there's an error fetching data
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="aximo-numberbox-section">
            <div className="container">
                <FadeInStaggerTwo className="row">
                    <FadeInStaggerTwoChildren className="col-xl-4 col-lg-6">
                        <div className="aximo-numberbox-wrap">
                            <div className="aximo-numberbox-number">1</div>
                            <div className="aximo-numberbox-data">
                                <p>
                                    <span>{data.first_container_title}</span>
                                </p>
                                <p>{data.first_container_description}</p>
                            </div>
                        </div>
                    </FadeInStaggerTwoChildren>

                    <FadeInStaggerTwoChildren className="col-xl-4 col-lg-6">
                        <div className="aximo-numberbox-wrap">
                            <div className="aximo-numberbox-number">2</div>
                            <div className="aximo-numberbox-data">
                                <p>
                                    <span>{data.second_container_title}</span>
                                </p>
                                <p>{data.second_container_description}</p>
                            </div>
                        </div>
                    </FadeInStaggerTwoChildren>

                    <FadeInStaggerTwoChildren className="col-xl-4 col-lg-6">
                        <div className="aximo-numberbox-wrap">
                            <div className="aximo-numberbox-number">3</div>
                            <div className="aximo-numberbox-data">
                                <p>
                                    <span>{data.third_container_title}</span>
                                </p>
                                <p>{data.third_container_description}</p>
                            </div>
                        </div>
                    </FadeInStaggerTwoChildren>
                </FadeInStaggerTwo>
            </div>
        </div>
    );
}

export default NumberBox;
