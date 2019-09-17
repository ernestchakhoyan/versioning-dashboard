import React from "react";
import Logo from "../../assets/logo.png";
import "./styles.scss";

const Header = (props) => {
	return (
		<header
			data-test="header-component"
			className="header"
		>
			<div className="header__logo">
				<img
					src={Logo}
					alt="logo"
					data-test="logo-img"
				/>
			</div>
			<div className="header__title">
				Behive Versioning Dashboard
			</div>
		</header>
	);
};

export default Header;