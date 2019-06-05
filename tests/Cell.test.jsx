import { shallow } from "enzyme";
import expect from "expect";
import React from "react";
import Cell from "../src/Cell/Cell";

describe("Cell", () => {
  it("renders", () => {
    expect(() => {
      shallow(<Cell>Test</Cell>);
    }).toNotThrow();
  });

  it("renders with default class", () => {
    const wrapper = shallow(<Cell>Test</Cell>);

    expect(wrapper.hasClass("cell")).toBeTruthy();
  });

  it("renders with the appropriate auto class", () => {
    const wrapper = shallow(<Cell auto>Test</Cell>);

    expect(wrapper.hasClass("auto")).toBeTruthy();
  });

  it("renders children", () => {
    const wrapper = shallow(
      <Cell>
        <span className="my-test-class">Child</span>
      </Cell>
    );

    const children = wrapper.find(".my-test-class");

    expect(children.length).toEqual(1);
    expect(children.get(0)).toExist();
  });

  it("renders with denoted class", () => {
    const wrapper = shallow(<Cell className="my-test-class">Test</Cell>);

    expect(wrapper.hasClass("my-test-class")).toBeTruthy();
  });

  it("renders as a `div` tag by default", () => {
    const wrapper = shallow(<Cell>Test</Cell>);

    expect(wrapper.type()).toEqual("div");
  });

  it("renders as a `main` tag", () => {
    const wrapper = shallow(<Cell component="main">Test</Cell>);

    expect(wrapper.type()).toEqual("main");
  });

  it("renders as a `span` tag via function", () => {
    const wrapper = shallow(<Cell component={() => "span"}>Test</Cell>);

    expect(wrapper.type()).toEqual("span");
  });

  it("renders with the appropriate large class", () => {
    const wrapper = shallow(<Cell lg={2}>Test</Cell>);

    expect(wrapper.hasClass("large-2")).toBeTruthy();
  });

  it("renders with the appropriate large offset class", () => {
    const wrapper = shallow(<Cell lgOffset={2}>Test</Cell>);

    expect(wrapper.hasClass("large-offset-2")).toBeTruthy();
  });

  it("renders with the appropriate medium class", () => {
    const wrapper = shallow(<Cell md={2}>Test</Cell>);

    expect(wrapper.hasClass("medium-2")).toBeTruthy();
  });

  it("renders with the appropriate medium offset class", () => {
    const wrapper = shallow(<Cell mdOffset={2}>Test</Cell>);

    expect(wrapper.hasClass("medium-offset-2")).toBeTruthy();
  });

  it("renders with the appropriate shrink class", () => {
    const wrapper = shallow(<Cell shrink>Test</Cell>);

    expect(wrapper.hasClass("shrink")).toBeTruthy();
  });

  it("renders with the appropriate small class", () => {
    const wrapper = shallow(<Cell sm={2}>Test</Cell>);

    expect(wrapper.hasClass("small-2")).toBeTruthy();
  });

  it("renders with the appropriate small offset class", () => {
    const wrapper = shallow(<Cell smOffset={2}>Test</Cell>);

    expect(wrapper.hasClass("small-offset-2")).toBeTruthy();
  });

  it("renders with the appropriate vertical align class", () => {
    const wrapper = shallow(<Cell valign="middle">Test</Cell>);

    expect(wrapper.hasClass("align-self-middle")).toBeTruthy();
  });
});
