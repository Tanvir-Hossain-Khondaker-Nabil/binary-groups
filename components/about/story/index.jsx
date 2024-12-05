"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import URL from "@/components/URL.js"; // Assuming this is your API base URL
import Star2Img from "../../../public/images/v1/star2.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";

// Merged Story Component
function Story() {
  const [storyData, setStoryData] = useState(null); // Store the fetched data
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch story data from API when component mounts
  useEffect(() => {
    const fetchStoryData = async () => {
      try {
        const response = await fetch(`${URL}/api/about_us`);
        const data = await response.json();
        setStoryData(data); // Save the fetched data
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching story data:", error);
        setLoading(false);
      }
    };

    fetchStoryData();
  }, []); // Empty array means the effect runs only once when the component mounts

  // If still loading, show a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If no data is fetched or data is empty, return null or stop rendering the section
  if (!storyData || Object.keys(storyData).length === 0) {
    return null; // Stops rendering this component if no data is available
  }

  return (
    <div className="section aximo-section-padding6">
      <div className="container">
        {/* Section Title */}
        <div className="aximo-section-title center title-description">
          <h2>
            <span className="aximo-title-animation">
              {storyData.primary_title}
              <span className="aximo-title-icon">
                <Image src={Star2Img} alt="star" />
              </span>
            </span>
            <br />
            {storyData.secondary_title}
          </h2>
          <p>{storyData.description}</p>
        </div>

        {/* Story Photos Section */}
        <FadeInStaggerTwo className="row">
          <FadeInStaggerTwoChildren className="col-lg-8">
            <div className="aximo-story-thumb">
              <Image
                src={`${URL}/${storyData.first_photo}`}
                alt="Story1Img"
                sizes="100vw"
                width={800}
                height={533}
              />
            </div>
          </FadeInStaggerTwoChildren>

          <FadeInStaggerTwoChildren className="col-lg-4">
            <div className="aximo-story-thumb">
              <Image
                src={`${URL}/${storyData.second_photo}`}
                alt="Story2Img"
                sizes="100vw"
                width={800}
                height={533}
              />
            </div>
          </FadeInStaggerTwoChildren>

          <FadeInStaggerTwoChildren className="col-lg-4">
            <div className="aximo-story-thumb">
              <Image
                src={`${URL}/${storyData.third_photo}`}
                alt="Story3Img"
                sizes="100vw"
                width={800}
                height={533}
              />
            </div>
          </FadeInStaggerTwoChildren>

          <FadeInStaggerTwoChildren className="col-lg-8">
            <div className="aximo-story-thumb">
              <Image
                src={`${URL}/${storyData.four_photo}`}
                alt="Story4Img"
                sizes="100vw"
                width={800}
                height={533}
              />
            </div>
          </FadeInStaggerTwoChildren>
        </FadeInStaggerTwo>

        {/* Story Content Section */}
        <div className="aximo-story-content">
          <div className="row">
            <div className="col-lg-6">
              <h3>{storyData.first_container_title}</h3>
              <p>{storyData.first_primary_description}</p>
              <p>{storyData.first_secondary_description}</p>
            </div>
            <div className="col-lg-6">
              <h3>{storyData.second_container_title}</h3>
              <p>{storyData.second_primary_description}</p>
              <p>{storyData.second_secondary_description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
