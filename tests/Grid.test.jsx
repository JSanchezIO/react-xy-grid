import { shallow } from "enzyme";
import expect from "expect";
import React from "react";
import Grid from "../src/Grid/Grid";

describe("Grid", () => {
  it("renders", () => {
    expect(() => {
      shallow(<Grid>Test</Grid>);
    }).toNotThrow();
  });

  it("renders with the appropriate align class", () => {
    const wrapper = shallow(<Grid align="center">Test</Grid>);

    expect(wrapper.hasClass("align-center")).toBeTruthy();
  });

  it("renders children", () => {
    const wrapper = shallow(
      <Grid>
        <span className="my-test-class">Child</span>
      </Grid>
    );

    const children = wrapper.find(".my-test-class");

    expect(children.length).toEqual(1);
    expect(children.get(0)).toExist();
  });

  it("renders with denoted class", () => {
    const wrapper = shallow(<Grid className="my-test-class">Test</Grid>);

    expect(wrapper.hasClass("my-test-class")).toBeTruthy();
  });

  it("renders as a `div` tag by default", () => {
    const wrapper = shallow(<Grid>Test</Grid>);

    expect(wrapper.type()).toEqual("div");
  });

  it("renders as a `main` tag", () => {
    const wrapper = shallow(<Grid component="main">Test</Grid>);

    expect(wrapper.type()).toEqual("main");
  });

  it("renders as a `span` tag via function", () => {
    const wrapper = shallow(<Grid component={() => "span"}>Test</Grid>);

    expect(wrapper.type()).toEqual("span");
  });

  it("renders with the appropriate gridX class", () => {
    const wrapper = shallow(<Grid gridX>Test</Grid>);

    expect(wrapper.hasClass("grid-x")).toBeTruthy();
  });

  it("renders with the appropriate gridY class", () => {
    const wrapper = shallow(<Grid gridY>Test</Grid>);

    expect(wrapper.hasClass("grid-y")).toBeTruthy();
  });

  it("renders with the appropriate height style", () => {
    const wrapper = shallow(
      <Grid gridY height={200}>
        Test
      </Grid>
    );

    expect(wrapper.find('[style="200px"]')).toExist();
  });

  it("renders with the appropriate height as pixels when numeric", () => {
    const wrapper = shallow(
      <Grid gridY height={200}>
        Test
      </Grid>
    );

    expect(wrapper.find('[style="200px"]')).toExist();
  });

  it("renders with the appropriate height as is when string", () => {
    const wrapper = shallow(
      <Grid gridY height="50%">
        Test
      </Grid>
    );

    expect(wrapper.find('[style="50%"]')).toExist();
  });

  it("renders without height style when not `gridY`", () => {
    const wrapper = shallow(<Grid height={200}>Test</Grid>);

    expect(wrapper.find('[style="200px"]').length).toEqual(0);
  });

  it("renders with the appropriate large collapse class", () => {
    const wrapper = shallow(<Grid lgCollapse="margin">Test</Grid>);

    expect(wrapper.hasClass("large-margin-collapse")).toBeTruthy();
  });

  it("renders with the appropriate large up class", () => {
    const wrapper = shallow(<Grid lgUp={2}>Test</Grid>);

    expect(wrapper.hasClass("large-up-2")).toBeTruthy();
  });

  it("renders with the appropriate marginX class", () => {
    const wrapper = shallow(<Grid marginX>Test</Grid>);

    expect(wrapper.hasClass("grid-margin-x")).toBeTruthy();
  });

  it("renders with the appropriate marginY class", () => {
    const wrapper = shallow(<Grid marginY>Test</Grid>);

    expect(wrapper.hasClass("grid-margin-y")).toBeTruthy();
  });

  it("renders with the appropriate medium collapse class", () => {
    const wrapper = shallow(<Grid mdCollapse="margin">Test</Grid>);

    expect(wrapper.hasClass("medium-margin-collapse")).toBeTruthy();
  });

  it("renders with the appropriate medium up class", () => {
    const wrapper = shallow(<Grid mdUp={2}>Test</Grid>);

    expect(wrapper.hasClass("medium-up-2")).toBeTruthy();
  });

  it("renders with the appropriate paddingX class", () => {
    const wrapper = shallow(<Grid paddingX>Test</Grid>);

    expect(wrapper.hasClass("grid-padding-x")).toBeTruthy();
  });

  it("renders with the appropriate paddingY class", () => {
    const wrapper = shallow(<Grid paddingY>Test</Grid>);

    expect(wrapper.hasClass("grid-padding-y")).toBeTruthy();
  });

  it("renders with the appropriate small collapse class", () => {
    const wrapper = shallow(<Grid smCollapse="margin">Test</Grid>);

    expect(wrapper.hasClass("small-margin-collapse")).toBeTruthy();
  });

  it("renders with the appropriate small up class", () => {
    const wrapper = shallow(<Grid smUp={2}>Test</Grid>);

    expect(wrapper.hasClass("small-up-2")).toBeTruthy();
  });

  it("renders with the appropriate vertical align class", () => {
    const wrapper = shallow(<Grid valign="middle">Test</Grid>);

    expect(wrapper.hasClass("align-middle")).toBeTruthy();
  });
});
