import React, { Component } from "react";
import "./app.scss";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="App" data-test="app">
				header
			</div>
		);
	}
}

export default App;
