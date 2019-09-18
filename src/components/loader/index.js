import React from "react";
import * as PropTypes from "prop-types";


import "./styles.scss";

const Loader = (props) => {

	return (
		<>
			<div className="lds-ring">
				<div />
				<div />
				<div />
				<div />
			</div>
		</>
	);
};

Loader.propTypes = {
	size: PropTypes.number,
	loaderWidth: PropTypes.number,
	color: PropTypes.string
};

export default Loader;
