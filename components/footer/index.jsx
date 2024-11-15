'use client'; // Add this to specify that this is a client component

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoWhiteImg from "../../public/images/logo/logo-footer.png";
import FooterCopyright from "./FooterCopyright";
import FooterSubscription from "./FooterSubscription";
import URL from "@/components/URL.js";
function Footer() {
	const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
        return <div></div>;
    }

    // If there's an error fetching data
    if (error) {
        return <div>{error}</div>;
    }

	return (
		<footer className="aximo-footer-section4">
			<div className="aximo-subscription-wrap extra-side-margin">
				<div className="container">
					<FooterSubscription />
				</div>
			</div>

			<div className="container">
				<div className="aximo-footer-top4">
					<div className="row">
						<div className="col-xl-4 col-lg-12">
							<div className="aximo-footer-textarea light-one">
								<Link href="/">
									<Image src={LogoWhiteImg} alt="Logo" sizes="100vw" width="100" style={{width:'80px'}}/>
								</Link>
								<p>
									{data.description}
								</p>
								<div className="aximo-social-icon aximo-social-icon3">
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
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-md-4">
							<div className="aximo-footer-menu extar-margin light-one">
								<div className="aximo-footer-title light-one">
									<p>Special Links</p>
								</div>
								<ul>
									<li>
										<Link href="/about">About us</Link>
									</li>
									<li>
										<Link href="/service">Our services</Link>
									</li>
									<li>
										<Link href="/portfolio-tw0">Portfolio</Link>
									</li>
									<li>
										<Link href="/contact-us">Contact Us</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-md-4">
							<div className="aximo-footer-menu light-one">
								<div className="aximo-footer-title light-one">
									<p>Utility pages</p>
								</div>
								<ul>
									<li>
										<Link href="/about">About us</Link>
									</li>
									<li>
										<Link href="/service">Our services</Link>
									</li>
									<li>
										<Link href="/portfolio-one">Portfolio</Link>
									</li>
									<li>
										<Link href="/">Premium member</Link>
									</li>
									<li>
										<Link href="/contact-us">Contact Us</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-md-4">
							<div className="aximo-footer-menu light-one m-0">
								<div className="aximo-footer-title light-one">
									<p>Contact us</p>
								</div>
								<div className="aximo-contact-info2">
									<ul>
										<li>
											<a href="tel: +088-234-6849">
												<i className="icon-phone"></i>
												{data.mobile_number}
											</a>
										</li>
										<li>
											<a href="mailto:example@gmail.com">
												<i className="icon-message"></i>
												{data.email_number}
											</a>
										</li>
										<li>
											<i className="icon-map"></i>
											{data.address}
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="aximo-footer-bottom four">
					<FooterCopyright />
				</div>
			</div>
		</footer>
	);
}

export default Footer;
