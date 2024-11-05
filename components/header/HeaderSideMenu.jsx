"use client";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo/logo-white.svg";
import InstagramThumb from "../../public/images/v4/instagram-thumb3.png";
function HeaderSideMenu({ showSideMenu, setShowSideMenu }) {
	return (
		<div className="aximo-sidemenu-wraper">
			<div className={`aximo-sidemenu-column ${showSideMenu === true ? "active" : ""}`}>
				<FadeInStaggerTwo className="aximo-sidemenu-body">
					<FadeInStaggerTwoChildren className="aximo-sidemenu-logo">
						<Link href="/">
							<Image src={Logo} alt="Logo" sizes="100vw" />
						</Link>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren>
						<p>
							We&apos;re dedicated to helping business grow and succeed. With years of industry experience
							and a passion for problem-solving, we offer top-level consulting service tailored to your
							unique needs.
						</p>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="aximo-sidemenu-thumb">
						<Image src={InstagramThumb} alt="InstagramThumb" />
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="aximo-info-wrap">
						<div className="aximo-info">
							<ul>
								<li>Give us a call:</li>
								<li>
									<a href="tel:1234567890">(123) 456-7890</a>
								</li>
							</ul>
						</div>
						<div className="aximo-info">
							<ul>
								<li>Send us an email:</li>
								<li>
									<a href="mailto:info@mthemeus.com">info@mthemeus.com</a>
								</li>
							</ul>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="aximo-social-icon aximo-social-icon3">
						<ul>
							<li>
								<a href="https://twitter.com" target="_blank">
									<i className="icon-twitter"></i>
								</a>
							</li>
							<li>
								<a href="https://facebook.com" target="_blank">
									<i className="icon-facebook"></i>
								</a>
							</li>
							<li>
								<a href="https://instagram.com" target="_blank">
									<i className="icon-instagram"></i>
								</a>
							</li>
							<li>
								<a href="https://linkedin.com" target="_blank">
									<i className="icon-linkedin"></i>
								</a>
							</li>
						</ul>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="aximo-copywright4 light">
						<p>© Copyright 2024, All Rights Reserved by Mthemeus</p>
					</FadeInStaggerTwoChildren>
				</FadeInStaggerTwo>
				<span className="aximo-sidemenu-close" onClick={() => setShowSideMenu(!showSideMenu)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path
							d="M6 18L18 6M6 6L18 18"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</svg>
				</span>
			</div>
			<div className={`offcanvas-overlay ${showSideMenu === true ? "active" : ""}`}></div>
		</div>
	);
}

export default HeaderSideMenu;
