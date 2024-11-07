import Blogs from "@/components/blogs";
import BrandLogo from "@/components/brand-logo";
import Hero from "@/components/hero";
import Instagrams from "@/components/instagrams";
import MissionVision from "@/components/mission-vission";
import NumberBox from "@/components/number-box";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/why-choose-us";

function HomeFour() {
	return (
		<div className="aximo-all-section bg-light4">
			<Hero />
			<MissionVision />
			<BrandLogo />
			<Services />
			<WhyChooseUs />
			<NumberBox />
			<Projects />
			<Testimonials />
			{/*<Blogs />
			<Instagrams />*/}
		</div>
	);
}

export default HomeFour;
