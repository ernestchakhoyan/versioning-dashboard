import React from "react";
import { shallow } from "enzyme";
import {findBtTestAttr} from "../../utils"
import renderer from "react-test-renderer";
import Header from "./index";


const setUp = (props = {}) => {
	return shallow(<Header {...props} />);
};

describe("Content component >", () => {

	let component;

	beforeEach(() => {
		component = setUp();
	});

	it("Should render component", () => {
		const content = findBtTestAttr(component,"app-content");
		expect(content.length).toBe(1);
	});

});