import React from "react";
import { shallow } from "enzyme";
import {findBtTestAttr} from "../../utils"
import renderer from "react-test-renderer";
import Footer from "./index";


const setUp = (props = {}) => {
	return shallow(<Footer {...props} />);
};

describe("Footer component >", () => {

	let component;

	beforeEach(() => {
		component = setUp();
	});

	it("Should render without errors", () => {
		const footer = findBtTestAttr(component,"footer-component");
		expect(footer.length).toBe(1);
	});

	it("Should render logo", () => {
		const logo = findBtTestAttr(component,"footer-logo-img");
		expect(logo.length).toBe(1);
	});

	it("Capture component snapshot" ,() => {
		const tree = renderer.create(<Footer />).toJSON();

		expect(tree).toMatchSnapshot();
	})
});