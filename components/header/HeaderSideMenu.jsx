"use client";
import { useEffect, useState } from "react";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo/logo-white.svg";
import InstagramThumb from "../../public/images/v4/instagram-thumb3.png";
import LogoWhiteImg from "../../public/images/logo/logo-footer.png";
import URL from "@/components/URL.js";
function HeaderSideMenu({ showSideMenu, setShowSideMenu }) {
	const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
	const currentYear = new Date().getFullYear();
    // Fetch data from the API on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${URL}/api/footer_content`);
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
        return <div>Loading...</div>;
    }

    // If there's an error fetching data
    if (error) {
        return <div>{error}</div>;
    }

	return (
		<div className="aximo-sidemenu-wraper">
			<div className={`aximo-sidemenu-column ${showSideMenu === true ? "active" : ""}`}>
				<FadeInStaggerTwo className="aximo-sidemenu-body">
					<FadeInStaggerTwoChildren className="aximo-sidemenu-logo">
						<Link href="/">
							<Image src={LogoWhiteImg} alt="Logo" sizes="100vw" style={{ width: '100px'}} />
						</Link>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren>
						<p>
						{data.description}
						</p>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="aximo-sidemenu-thumb">
						<Image src={`${URL}/${data.photo}`} alt="InstagramThumb" height="100" width="500"/>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="aximo-info-wrap">
						<div className="aximo-info">
							<ul>
								<li>{data.mobile_title}:</li>
								<li>
									<a href="tel:1234567890">{data.mobile_number}</a>
								</li>
							</ul>
						</div>
						<div className="aximo-info">
							<ul>
								<li>{data.email_title}:</li>
								<li>
									<a href="mailto:info@mthemeus.com">{data.email_number}</a>
								</li>
							</ul>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="aximo-social-icon aximo-social-icon3">
						<ul>
							<li>
								<a href={`${data.footer_twitter_url}`} target="_blank">
									<i className="icon-twitter"></i>
								</a>
							</li>
							<li>
								<a href={`${data.footer_facebook_url}`} target="_blank">
									<i className="icon-facebook"></i>
								</a>
							</li>
							<li>
								<a href={`${data.footer_instagram_url}`} target="_blank">
									<i className="icon-instagram"></i>
								</a>
							</li>
							<li>
								<a href={`${data.footer_linkedin_url}`} target="_blank">
									<i className="icon-linkedin"></i>
								</a>
							</li>
						</ul>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="aximo-copywright4 light">
						<p>© Copyright {currentYear}, All Rights Reserved by Binary Group</p>
					</FadeInStaggerTwoChildren>
				</FadeInStaggerTwo>
				<span className="aximo-sidemenu-close" onClick={() => setShowSideMenu(!showSideMenu)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path
							d="M6 18L18 6M6 6L18 18"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</svg>
				</span>
			</div>
			<div className={`offcanvas-overlay ${showSideMenu === true ? "active" : ""}`}></div>
		</div>
	);
}

export default HeaderSideMenu;
