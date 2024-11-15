"use client";
import DesktopNav from "@/components/common/navigation/desktop-nav/DesktopNav";
import Dropdown from "@/components/common/navigation/desktop-nav/Dropdown";
import DropdownItem from "@/components/common/navigation/desktop-nav/DropdownItem";
import NavItem from "@/components/common/navigation/desktop-nav/NavItem";
import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import { menuItemsData } from "@/components/common/navigation/mobile-nav/menuItemsData";
import { useState } from "react";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";
import HeaderSideMenu from "./HeaderSideMenu";

function Header() {
	const [showSideMenu, setShowSideMenu] = useState(false);
	return (
		<header
			className="site-header site-header--menu-center aximo-header-section aximo-header4 bg-light4"
			id="sticky-menu"
		>
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopNav>
							<NavItem url="/">Home</NavItem>
							<NavItem url="about-us">About Us</NavItem>
							<NavItem url="service">Service</NavItem>
							<NavItem url="portfolio-two">Portfolio</NavItem>							
							<NavItem url="contact-us">Contact Us</NavItem>
						</DesktopNav>
					</div>
					<HeaderButton setShowSideMenu={setShowSideMenu} />
					<MobileNavbar menuItemsData={menuItemsData} title="Aximo" />
				</nav>
			</div>

			<HeaderSideMenu showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
		</header>
	);
}

export default Header;
