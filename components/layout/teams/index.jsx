"use client";

import { useEffect, useState } from "react";
import FadeInStagger from "@/components/animation/FadeInStagger";
import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";
import URL from "@/components/URL.js";

function Teams() {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [mainContent, setMainContent] = useState(null);

    useEffect(() => {
        const fetchMainContent = async () => {
            try {
                const response = await fetch(`${URL}/api/team_member_content`);
                if (!response.ok) throw new Error("Failed to fetch main content");

                const data = await response.json();
                setMainContent(data);
                console.log("Main content fetched:", data);
            } catch (error) {
                console.error("Error fetching main content:", error);
            }
        };

        const fetchTeamMembers = async () => {
            try {
                const membersResponse = await fetch(`${URL}/api/team_member_content_multiple`);
                if (!membersResponse.ok) throw new Error("Failed to fetch team members");

                const membersData = await membersResponse.json();
                console.log("Fetched team members data:", membersData);
                setTeams(membersData);
            } catch (error) {
                console.error("Error fetching team members:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMainContent();
        fetchTeamMembers();
    }, []);

    if (loading) return <div></div>;

    return (
        <div className="section aximo-section-padding3">
            <div className="container">
                {mainContent && (
                    <div className="aximo-section-title center">
                        <h2>
                            {mainContent.primary_title}
                            <span className="aximo-title-animation">
                                {mainContent.secondary_title}
                                <span className="aximo-title-icon">
                                    <Image src={Star2Img} alt="Star" />
                                </span>
                            </span>
                        </h2>
                    </div>
                )}
                <div className="row">
                    {teams.length > 0 ? (
                        teams.map((team, index) => (
                            <FadeInStagger key={team.id} index={index} className="col-xl-3 col-md-6">
                                <div className="aximo-team-wrap">
                                    <div className="aximo-team-thumb">
                                        <Image 
                                            src={`${URL}/${team.photo.replace(/\\/g, '/')}`} 
                                            alt={team.title} 
                                            width={400} 
                                            height={400} 
                                            sizes="100vw" 
                                            className="img-fluid"
                                        />
                                        <div className="aximo-social-icon team-social">
                                            <ul>
                                                {team.facebook_url && (
                                                    <li>
                                                        <a href={team.facebook_url} target="_blank" rel="noopener noreferrer">
                                                            <i className="icon-facebook"></i>
                                                        </a>
                                                    </li>
                                                )}
                                                {team.twitter_url && (
                                                    <li>
                                                        <a href={team.twitter_url} target="_blank" rel="noopener noreferrer">
                                                            <i className="icon-twitter"></i>
                                                        </a>
                                                    </li>
                                                )}
                                                {team.instagram_url && (
                                                    <li>
                                                        <a href={team.instagram_url} target="_blank" rel="noopener noreferrer">
                                                            <i className="icon-instagram"></i>
                                                        </a>
                                                    </li>
                                                )}
                                                {team.linkedin_url && (
                                                    <li>
                                                        <a href={team.linkedin_url} target="_blank" rel="noopener noreferrer">
                                                            <i className="icon-linkedin"></i>
                                                        </a>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="aximo-team-data">
                                        <h3>{team.title}</h3>
                                        <p>{team.sub_title}</p>
                                    </div>
                                </div>
                            </FadeInStagger>
                        ))
                    ) : (
                        <div>No team members found.</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Teams;
