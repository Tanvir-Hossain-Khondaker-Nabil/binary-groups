"use client";
import { useEffect, useState } from "react";
import Accordion from "./Accordion";
import Content from "./Content";
import URL from "@/components/URL.js"; // Import URL from the url.js file
function WhyChooseUs() {
	const [workingProcessData, setWorkingProcess] = useState(null);

    useEffect(() => {
        const fetchIntroData = async (URL) => {
            try {
                const response = await fetch(`${URL}/api/working_process_content`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                setWorkingProcess(data);
            } catch (error) {
                console.error("Error fetching intro data:", error);
            }
        };

        fetchIntroData(URL);
    }, []);

    if (!workingProcessData) {
        return <div></div>;
    }
	return (
		<div className="section">
			<div className="container">
				<div className="aximo-faq-wrap">
					<div className="row">
						<div className="col-lg-7 d-flex align-items-center">
							<Content workingProcessData={workingProcessData}/>
						</div>
						<div className="col-lg-5">
							<Accordion workingProcessData={workingProcessData}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhyChooseUs;
