"use client";

import { useEffect, useState } from "react";
import FadeInStagger from "@/components/animation/FadeInStagger";
import Image from "next/image";
import Star2Img from "../../public/images/v1/star2.png";
import URL from "@/components/URL.js";

function Testimonial() {
	const [reviewData, setReviewData] = useState(null);
	const [reviewContentData, setReviewContentData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPortfolioData = async () => {
			try {
				const response = await fetch(`${URL}/api/review`);
				if (!response.ok) throw new Error("Failed to fetch portfolio data");

				const data = await response.json();
				setReviewData(data);
			} catch (error) {
				console.error("Error fetching portfolio data:", error);
			} finally {
				setLoading(false);
			}
		};

		const fetchReviewContentData = async () => {
			try {
				const response = await fetch(`${URL}/api/review_content`);
				if (!response.ok) throw new Error("Failed to fetch review content data");

				const data = await response.json();
				setReviewContentData(data);
				console.log(reviewContentData)
			} catch (error) {
				console.error("Error fetching review content data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchPortfolioData();
		fetchReviewContentData();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (!reviewData) return <div>No portfolio data available.</div>;

	// Transforming reviewContentData into the format used in testimonialsData
	const testimonialsData = reviewContentData.map((review) => ({
		id: review.id,
		rating: review.start,
		title: review.title,
		description: review.description,
		author: review.name,
		designation: review.sub_title,
		img: review.photo.replace(/\\/g, '/'), // Use a default image path
	}));

	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						{reviewData.primary_title}
						<span className="aximo-title-animation">
							{reviewData.secondary_title}
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					{testimonialsData.map((testimonial, index) => (
						<FadeInStagger index={index} className="col-lg-6" key={testimonial.id}>
							<div className="aximo-testimonial-wrap">
								<div className="aximo-testimonial-rating">
									<ul>
										{[...Array(5)].map((_, i) => (
											<li key={i}>
												<i className={`icon-star${i < testimonial.rating ? '' : '-empty'}`}></i>
											</li>
										))}									</ul>
								</div>
								<div className="aximo-testimonial-data">
									<h3>{testimonial.title}</h3>
									<p>{testimonial.description}</p>
								</div>
								<div className="aximo-testimonial-author">
									<div className="aximo-testimonial-author-thumb">
										<Image 
											src={`${URL}/${testimonial.img}`} 
											alt={testimonial.title} 
											width={100} // Set a default width
											height={100} // Set a default height
										/>
									</div>
									<div className="aximo-testimonial-author-data">
										<p>
											{testimonial.author} <span>{testimonial.designation}</span>
										</p>
									</div>
								</div>
							</div>
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
