import Image from "next/image";
import Link from "next/link";
import Shape4Img from "../../public/images/v4/shape4.png";
import TestimonialsCard from "./TestimonialsCard";
function Testimonials() {
	return (
		<div className="section aximo-section-padding5 position-relative">
			<div className="container">
				<div className="aximo-section-title arimo-font">
					<div className="row">
						<div className="col-lg-7">
							<span className="aximo-subtitle">Client success stories</span>
							<h2>Don&apos;t just trust us, hear from others</h2>
						</div>
						<div className="col-lg-5 d-flex align-items-end justify-content-end">
							<div className="aximo-title-btn">
								<Link className="aximo-default-btn pill blue-btn" href="/service">
									View all services
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<TestimonialsCard />
					</div>
				</div>
			</div>
			<div className="aximo-v4-shape2">
				<Image src={Shape4Img} alt="Shape4Img" />
			</div>
		</div>
	);
}

export default Testimonials;
