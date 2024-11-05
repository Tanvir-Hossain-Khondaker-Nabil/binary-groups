import Image from "next/image";
import Shape1Img from "../../public/images/v4/shape1.png";
import TextThumb1Img from "../../public/images/v4/text-thumb1.png";
import TextThumb2Img from "../../public/images/v4/text-thumb2.png";
function MissionVision() {
	return (
		<div className="aximo-content-section position-relative overflow-hidden">
			<div className="container">
				<div className="aximo-section-title arimo-font center full-width p-0">
					<span className="aximo-subtitle">Our mission & vision</span>
					<h2>
						Our mission is to help businesses thrive a fast-paced
						<Image src={TextThumb1Img} alt="TextThumb1Img" sizes="100vw" />
						competitive world by providing expert guidance
						<Image src={TextThumb2Img} alt="TextThumb1Img" sizes="100vw" />& we&apos;re here to provide it.
					</h2>
				</div>
			</div>
			<div className="aximo-v4-shape1">
				<Image src={Shape1Img} alt="Shape1Img" />
			</div>
		</div>
	);
}

export default MissionVision;
