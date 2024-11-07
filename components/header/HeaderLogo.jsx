import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo/blogo.png";
function HeaderLogo() {
	return (
		<div className="brand-logo">
			<Link href="/">
				<Image src={Logo} alt="Logo" className="light-version-logo" sizes="100vw"
				style={{width:'80px'}} />
			</Link>
		</div>
	);
}

export default HeaderLogo;
