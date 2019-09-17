import React from "react";
import { shallow } from "enzyme";
import { findBtTestAttr,testStore } from "./utils";

import App from "./App";

const setUp = (initialState = {}) => {
	const store = testStore(initialState);
	const wrapper = shallow(<App store={store} />);

	return wrapper;
};

describe("App component", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = setUp();
	});

	it("Should render without errors", () => {
		const component = findBtTestAttr(wrapper, "app");
		expect(component.length).toBe(1);
	});
});