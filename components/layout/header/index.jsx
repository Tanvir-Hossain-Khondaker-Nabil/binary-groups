"use client";
import DesktopNav from "@/components/common/navigation/desktop-nav/DesktopNav";
/* eslint-disable for-direction */
import Dropdown from "@/components/common/navigation/desktop-nav/Dropdown";
import DropdownItem from "@/components/common/navigation/desktop-nav/DropdownItem";
import NavItem from "@/components/common/navigation/desktop-nav/NavItem";
import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import { menuItemsData } from "@/components/common/navigation/mobile-nav/menuItemsData";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";

function Header() {
	return (
		<header className="site-header aximo-header-section aximo-header1 dark-bg" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopNav>
							<NavItem url="/">Home</NavItem>
							<NavItem url="about-us">About Us</NavItem>
							<NavItem url="portfolio-two">Portfolio</NavItem>
							<NavItem url="service">Service</NavItem>
							<NavItem url="contact-us">Contact Us</NavItem>
							{/* <NavItem dropdown title="Pages">
								<Dropdown>
									<DropdownItem url="about-us">About Us</DropdownItem>
									<DropdownItem url="pricing">Pricing</DropdownItem>
									<DropdownItem dropdown title="Blog">
										<Dropdown noShape>
											<DropdownItem url="blog">Our Blog</DropdownItem>
											<DropdownItem url="blog-grid">Blog Grid</DropdownItem>
											<DropdownItem url="single-blog">Blog Details</DropdownItem>
										</Dropdown>
									</DropdownItem>
									<DropdownItem dropdown title="Service">
										<Dropdown noShape>
											<DropdownItem url="service">Service</DropdownItem>
											<DropdownItem url="single-service">Service Details</DropdownItem>
										</Dropdown>
									</DropdownItem>
									<DropdownItem dropdown title={"Team"}>
										<Dropdown noShape>
											<DropdownItem url="team">Team</DropdownItem>
											<DropdownItem url="single-team">Team Details</DropdownItem>
										</Dropdown>
									</DropdownItem>
									<DropdownItem dropdown title={"Portfolio"}>
										<Dropdown noShape>
											<DropdownItem url="portfolio-one">Portfolio One Column</DropdownItem>
											<DropdownItem url="portfolio-two">Portfolio Two Column</DropdownItem>
											<DropdownItem url="single-portfolio">Portfolio Details</DropdownItem>
										</Dropdown>
									</DropdownItem>
									<DropdownItem dropdown title="Utility">
										<Dropdown noShape>
											<DropdownItem url="faq">FAQ</DropdownItem>
											<DropdownItem url="error-page">Error Page</DropdownItem>
											<DropdownItem url="testimonial">Testimonial</DropdownItem>
											<DropdownItem url="coming-soon">Coming Soon</DropdownItem>
										</Dropdown>
									</DropdownItem>
									<DropdownItem dropdown title="Account">
										<Dropdown noShape>
											<DropdownItem url="sign-up">Sign Up</DropdownItem>
											<DropdownItem url="sign-in">Sign In</DropdownItem>
											<DropdownItem url="reset-password">Reset Password</DropdownItem>
										</Dropdown>
									</DropdownItem>
								</Dropdown>
							</NavItem>
							<NavItem dropdown title="Blog">
								<Dropdown>
									<DropdownItem url="blog">Our Blog</DropdownItem>
									<DropdownItem url="blog-grid">Blog Grid</DropdownItem>
									<DropdownItem url="single-blog">Blog Details</DropdownItem>
								</Dropdown>
							</NavItem>
							<NavItem url="contact-us">Contact Us</NavItem> */}
						</DesktopNav>
					</div>
					<HeaderButton />

					<MobileNavbar menuItemsData={menuItemsData} title="Binary Echoes" />
				</nav>
			</div>
		</header>
	);
}

export default Header;
