import Image from "next/image";
import LogoWhiteImg from "../../../public/images/logo/logo.svg";
function FooterBottom() {
	return (
		<>
			<div className="col-lg-6">
				<div className="aximo-footer-logo">
					<a href="#">
					<Image 
					src={LogoWhiteImg} 
					alt="Logo" 
					style={{
						marginTop: '-15px',
						objectFit: 'cover',
						height: 'auto',
						width: '250px'
					}} 
					/>
					</a>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="aximo-copywright one">
					<p> &copy; Copyright 2024, All Rights Reserved by Binary Group.</p>
				</div>
			</div>
		</>
	);
}

export default FooterBottom;
