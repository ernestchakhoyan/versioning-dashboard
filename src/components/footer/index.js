import React from "react";
import LogoPortrait from "../../assets/logo_portrait.png";
import "./styles.scss";

const Footer = (props) => {
	return (
		<footer
			data-test="footer-component"
			className="footer"
		>
			<div className="footer__logo">
				<img
					src={LogoPortrait}
					alt="logo"
					data-test="footer-logo-img"
				/>
			</div>
			<div className="footer__title">
				© 2019 Behive, Inc. All Rights Reserved
			</div>
		</footer>
	);
};

export default Footer;