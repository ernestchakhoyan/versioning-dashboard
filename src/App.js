import React, { Component } from "react";
import Header from "./components/header"
import Content from "./components/content"
import Footer from "./components/footer"
import "./App.scss";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="app" data-test="app">
				<Header/>
				<Content/>
				<Footer/>
			</div>
		);
	}
}

export default App;
