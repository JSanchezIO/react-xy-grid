import { shallow } from "enzyme";
import expect from "expect";
import React from "react";
import GridContainer from "../src/GridContainer/GridContainer";

describe("GridContainer", () => {
  it("renders", () => {
    expect(() => {
      shallow(<GridContainer>Test</GridContainer>);
    }).toNotThrow();
  });

  it("renders with default class", () => {
    const wrapper = shallow(<GridContainer>Test</GridContainer>);

    expect(wrapper.hasClass("grid-container")).toBeTruthy();
  });

  it("renders children", () => {
    const wrapper = shallow(
      <GridContainer>
        <span className="my-test-class">Child</span>
      </GridContainer>
    );

    const children = wrapper.find(".my-test-class");

    expect(children.length).toEqual(1);
    expect(children.get(0)).toExist();
  });

  it("renders with denoted class", () => {
    const wrapper = shallow(<GridContainer className="my-test-class">Test</GridContainer>);

    expect(wrapper.hasClass("my-test-class")).toBeTruthy();
  });

  it("renders as a `div` tag by default", () => {
    const wrapper = shallow(<GridContainer>Test</GridContainer>);

    expect(wrapper.type()).toEqual("div");
  });

  it("renders as a `main` tag", () => {
    const wrapper = shallow(<GridContainer component="main">Test</GridContainer>);

    expect(wrapper.type()).toEqual("main");
  });

  it("renders with the appropriate fluid class", () => {
    const wrapper = shallow(<GridContainer fluid>Test</GridContainer>);

    expect(wrapper.hasClass("fluid")).toBeTruthy();
  });

  it("renders with the appropriate full class", () => {
    const wrapper = shallow(<GridContainer full>Test</GridContainer>);

    expect(wrapper.hasClass("full")).toBeTruthy();
  });
});
