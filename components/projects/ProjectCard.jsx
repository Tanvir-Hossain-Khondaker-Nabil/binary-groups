import Image from "next/image";
import Link from "next/link";
import LinkImg from "../../public/images/v4/link.svg";
function ProjectCard({ project: { title, description, img } }) {
	return (
		<div className="aximo-project-wrap2">
			<div className="aximo-project-thumb2">
				<Image src={img} alt={title} sizes="100vw" />
				<Link className="aximo-project-icon2" href="/single-portfolio">
					<Image src={LinkImg} alt="LinkImg" />
				</Link>
			</div>
			<div className="aximo-project-data2">
				<Link href="/single-portfolio">
					<h3>{title}</h3>
				</Link>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ProjectCard;
