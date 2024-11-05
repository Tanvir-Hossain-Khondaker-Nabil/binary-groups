import FadeInLeft from "@/components/animation/FadeInLeft";
import Image from "next/image";
import Shape2Img from "../../public/images/v4/shape2.png";
import Thumb1Img from "../../public/images/v4/thumb1.png";
function WhyChooseUs() {
	return (
		<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="aximo-content-thumb border-radius ">
							<Image src={Thumb1Img} alt="Thumb1Img" sizes="100vw" />
							<div className="aximo-thumb-shape4">
								<Image src={Shape2Img} alt="Shape2Img" />
							</div>
						</FadeInLeft>
					</div>
					<div className="col-lg-7">
						<div className="aximo-default-content arimo-font m-left-gap">
							<span className="aximo-subtitle">Why choose us</span>
							<h2>We help companies achieve their goals</h2>
							<p>
								In today&apos;s complex and rapidly changing business environment, we help businesses
								adapt, grow & succeed. Our expertise, objectivity, and ability to provide customized
								solutions.
							</p>
							<p>
								<strong>Industry Expertise:</strong> Our team of seasoned consultants brings wealth of
								knowledge and experience across various industries.
							</p>
							<p>
								<strong>Results-Driven Approach:</strong> Our proven methodologies and data-driven
								strategies ensure that your business reaches.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhyChooseUs;
