import React, { Component } from "react";
import Header from "./components/header"
import "./App.scss";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="App" data-test="app">
				<Header/>
			</div>
		);
	}
}

export default App;
