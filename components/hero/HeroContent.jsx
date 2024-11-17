import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Image from "next/image";
import Link from "next/link";
import RoundShapeImg from "../../public/images/v4/round-shape.png";
function HeroContent({ sliderData }) {
	return (
		<FadeInStaggerTwo className="aximo-hero-content4">
			<FadeInStaggerTwoChildren>
				<p>
					<span>{sliderData.sub_title}</span>
				</p>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<h1>
					{sliderData.primary_title}
					<span className="aximo-hero-shape-title">
						<span className="aximo-hero-round-shape">
							<Image src={RoundShapeImg} alt="RoundShapeImg" sizes="100vw" />
						</span>
					</span>
				</h1>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<p>
					{sliderData.description}
				</p>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="aximo-hero-btn-wrap">
				<Link className="aximo-default-btn pill blue-btn" href='/contact-us'>
					{sliderData.first_button_text}
				</Link>
				<Link className="aximo-default-btn aximo-default-btn-outline pill outline-white" href="/portfolio-two">
					<span className="aximo-label-up">{sliderData.second_button_text}</span>
					<span className="aximo-label-up">View all projects</span>
				</Link>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default HeroContent;
