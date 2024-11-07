import Image from "next/image";
import Star2Img from "./star2.png";

function Content({ workingProcessData }) {
	return (
		<div className="aximo-default-content">
			<h2>
				<span className="aximo-title-animation">
					{workingProcessData.primary_title}
					<span className="aximo-title-icon">
						<Image src={Star2Img} alt="Star2Img" />
					</span>
				</span>

				{workingProcessData.secondary_title}
			</h2>
			<p>
				{workingProcessData.primary_description}
			</p>
			<p>
				{workingProcessData.secondary_description}
			</p>
		</div>
	);
}

export default Content;
