import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Loader from "../loader";

import "./styles.scss";

const useStyles = makeStyles(theme => ({
	textField: {
		width: 200,
	},
	inputRoot: {
		color: "#3F4244"
	},
	inputUnderLine: {
		"&:after": {
			borderBottomColor: "#80A1FD"
		}
	},
	menuPaper: {
		boxShadow: "2px 4px rgba(0,0,0,0.5)",
		borderRadius: 0
	}
}));

const Content = () => {
	const classes = useStyles();

	const [ platformValue, setValue ] = useState(1);

	const handlePlatformChange = event => {
		const { value } = event.target;
		setValue(value);
	};

	const [ envValue, setEnvValue ] = useState(1);

	const handleEnvChange = event => {
		const { value } = event.target;
		setEnvValue(value);
	};

	const [ versionValue, setVersion ] = useState("");

	const handleVersionChange = event => {
		const { value } = event.target;
		setVersion(value);
	};

	const [loading, setLoadingState] = useState(false);

	const sendVersion = () => {
		console.log("set version")
	}

	return (
		<div
			className="content"
			data-test="app-content"
		>
			<div className="content__row">
				<TextField
					id="select-platform"
					select
					label="Please select the platform"
					className={classes.textField}
					value={platformValue}
					onChange={handlePlatformChange}
					SelectProps={{
						MenuProps: {
							classes: {
								paper: classes.menuPaper
							},
						},
					}}
					margin="normal"
					InputProps={{
						classes: {
							root: classes.inputRoot,
							underline: classes.inputUnderLine
						}
					}}
				>
					<MenuItem value={1}>IOS</MenuItem>
					<MenuItem value={2}>Android</MenuItem>
					<MenuItem value={3}>Desktop</MenuItem>
				</TextField>
			</div>
			<div className="content__row">
				<TextField
					id="select-platform"
					select
					label="Please select the platform"
					className={classes.textField}
					value={envValue}
					onChange={handleEnvChange}
					SelectProps={{
						MenuProps: {
							className: classes.menu,
						},
					}}
					margin="normal"
					InputProps={{
						classes: {
							root: classes.inputRoot,
							underline: classes.inputUnderLine
						}
					}}
				>
					<MenuItem
						value={1}
						classes={{
							root: classes.menuListItem,
							selected: classes.menuListItemSelected,
						}}
					>Dev
					</MenuItem>
					<MenuItem value={2}>Staging</MenuItem>
					<MenuItem value={3}>Lab</MenuItem>
					<MenuItem value={4}>Production</MenuItem>
				</TextField>
			</div>
			<div className="content__row">
				<TextField
					id="standard-name"
					label="Version"
					className={classes.textField}
					value={versionValue}
					onChange={handleVersionChange}
					margin="normal"
					InputProps={{
						classes: {
							root: classes.inputRoot,
							underline: classes.inputUnderLine
						}
					}}
				/>
			</div>
			<div className="content__row">
				<div
					className="send-btn"
					onClick={sendVersion}
				>
					{loading ? <Loader/> : "Send Version"}
				</div>
			</div>
		</div>
	);
};

export default Content;