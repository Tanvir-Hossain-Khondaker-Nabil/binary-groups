"use client";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import SingleImg from "../../public/images/service/service-single.png";
import Single2Img from "../../public/images/service/service-single2.png";
import Star2Img from "../../public/images/v1/star2.png";
import FadeInUp from "../animation/FadeInUp";
import FadeInRight from "../animation/FadeInRight";

const workingApproachData = [
	{
		id: crypto.randomUUID(),
		title: "Research and Competitor Analysis",
		description:
			"Start by understanding the target audience and their needs and analyze similar products to identify best practices and differentiation.",
		icon: "icon-search",
	},
	{
		id: crypto.randomUUID(),
		title: "User Interface Implementation",
		description:
			"Translate the finalized UI design into actual code or design elements, assets, depending on the platform (web, mobile, etc.).",
		icon: "icon-design-tools",
	},
	{
		id: crypto.randomUUID(),
		title: "Launch and Post-Launch",
		description:
			"Prepare for the product's launch, gather user feedback after the product is live, and make iterative improvements based on user data.",
		icon: "icon-start-up",
	},
];

function ServiceDetails() {
	return (
		<div className="section aximo-section-padding2 pb-0">
			<div className="container">
				<div className="aximo-service-details-wrap">
					<FadeInUp className="aximo-service-details-thumb">
						<Image src={SingleImg} alt="Single img" sizes="100vw" />
					</FadeInUp>
					<div className="row">
						<div className="col-lg-8">
							<div className="aximo-default-content">
								<h2>
									<span className="aximo-title-animation">
										UI/UX for modern
										<span className="aximo-title-icon">
											<Image src={Star2Img} alt="star" />
										</span>
									</span>
									product development
								</h2>
								<p>
									UI/UX, which stands for User Interface (UI) and User Experience (UX), are two
									critical components of software design and development of websites and applications.
								</p>
								<p>
									They are often used interchangeably, but they refer to different aspects of the
									design and user interaction process. Here&apos;s a brief overview of each:
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6">
							<div className="aximo-user-interface">
								<h3>1/ User Interface (UI):</h3>
								<ul>
									<li>
										UI refers to the visual elements and the overall look and feel of a product. It
										encompasses the design of screens, pages, buttons, icons, and any other visual
										elements users interact with.
									</li>
									<li>
										UI designers are responsible for creating a visually appealing and consistent
										design that aligns with the brand or product&apos;s identity.
									</li>
									<li>
										Key aspects of UI design include layout, color schemes, typography, icons, and
										graphical elements.
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="aximo-user-interface">
								<h3>2/ User Experience (UX):</h3>
								<ul>
									<li>
										UX focuses on the overall experience of the user when interacting with a
										product. It encompasses how users feel when they use the product and how easy or
										challenging it is to accomplish their goals.
									</li>
									<li>
										UX designers work to understand the user&apos;s needs, behaviors, and pain
										points, and they design the product to maximize user satisfaction.
									</li>
									<li>
										Key aspects of UX design include research, information architecture,
										wireframing, prototyping, usability testing, and user journey mapping.
									</li>
								</ul>
							</div>
						</div>
					</div>
					{/* Working Approach Section */}
					<div className="aximo-faq-wrap">
						<div className="row">
							<div className="col-lg-5 offset-lg-1 order-lg-1">
								<FadeInRight className="aximo-service-details-thumb2">
									<Image src={Single2Img} alt="service" sizes="100vw" />
								</FadeInRight>
							</div>
							<div className="col-lg-6">
								<div className="aximo-default-content">
									<h2>
										<span className="aximo-title-animation">
											Our Approach
											<span className="aximo-title-icon">
												<Image src={Star2Img} alt="star" />
											</span>
										</span>
									</h2>
									<p>
										The working approach for UI/UX design involves a series of steps and methodologies to ensure
										that the user interface and user experience are aligned with user needs. Here&apos;s a typical approach to UI/UX design:
									</p>
								</div>
								<div className="aximo-our-approach">
									{workingApproachData.map((item) => (
										<div className="aximo-iconbox-wrap5" key={item.id}>
											<div className="aximo-iconbox-icon5">
												<i className={`${item.icon}`}></i>
											</div>
											<div className="aximo-iconbox-data5">
												<h3>{item.title}:</h3>
												<div className="aximo-user-interface">
													<ul>
														<li>{item.description}</li>
													</ul>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					{/* End Working Approach Section */}
				</div>
			</div>
		</div>
	);
}

export default ServiceDetails;
