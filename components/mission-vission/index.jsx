"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Shape1Img from "../../public/images/v4/shape1.png";
import URL from "@/components/URL.js"; // Assuming URL.js contains base URL or helper functions

function MissionVision() {
  // State to hold mission and vision data
  const [missionData, setMissionData] = useState({
    info_title: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch mission and vision data when component mounts
  useEffect(() => {
    const fetchMissionData = async () => {
      try {
        // Using fetch to get data from the API
        const response = await fetch(`${URL}/api/mission`);
        
        // Check if response is successful
        if (!response.ok) {
          throw new Error("Failed to fetch mission data");
        }

        const data = await response.json();

        // Update state with fetched data
        setMissionData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching mission data:", err);
        setError("Failed to load mission and vision data");
        setLoading(false);
      }
    };

    fetchMissionData();
  }, []); // Empty dependency array ensures the API call happens only once

  if (loading) {
    return <div></div>;  // Display loading text while data is being fetched
  }

  if (error) {
    return <div>{error}</div>;  // Display error message if there's an issue fetching data
  }

  return (
    <div className="aximo-content-section position-relative overflow-hidden">
      <div className="container">
        <div className="aximo-section-title arimo-font center full-width p-0">
          <span className="aximo-subtitle">{missionData.info_title}</span>
          <h2>{missionData.description}</h2>
        </div>
      </div>
      <div className="aximo-v4-shape1">
        <Image src={Shape1Img} alt="Shape1Img" />
      </div>
    </div>
  );
}

export default MissionVision;
