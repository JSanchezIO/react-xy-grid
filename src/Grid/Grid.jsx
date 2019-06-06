import ClassNames from "classnames";
import * as React from "react";
import PropTypes from "prop-types";

const Grid = props => {
  const {
    align,
    children,
    className,
    component,
    gridX,
    gridY,
    height,
    lgCollapse,
    lgUp,
    marginX,
    marginY,
    mdCollapse,
    mdUp,
    paddingX,
    paddingY,
    smCollapse,
    smUp,
    valign
  } = props;

  const classes = ClassNames(
    {
      [`align-${align}`]: align !== undefined && align !== null,
      [`align-${valign}`]: valign !== undefined && valign !== null,
      "grid-x": gridX,
      "grid-y": gridY,
      "grid-margin-x": marginX,
      "grid-margin-y": marginY,
      "grid-padding-x": paddingX,
      "grid-padding-y": paddingY,
      [`large-${lgCollapse}-collapse`]: lgCollapse !== undefined && lgCollapse !== null,
      [`large-up-${lgUp}`]: lgUp !== undefined && lgUp !== null,
      [`medium-${mdCollapse}-collapse`]: mdCollapse !== undefined && mdCollapse !== null,
      [`medium-up-${mdUp}`]: mdUp !== undefined && mdUp !== null,
      [`small-${smCollapse}-collapse`]: smCollapse !== undefined && smCollapse !== null,
      [`small-up-${smUp}`]: smUp !== undefined && smUp !== null
    },
    className
  );

  const style = {};

  if (height !== undefined && height !== null && gridY) {
    style.height = typeof height === "number" ? `${height}px` : height;
  }

  return React.createElement(component, { className: classes, style }, children);
};

Grid.defaultProps = {
  align: undefined,
  className: undefined,
  component: "div",
  gridX: false,
  gridY: false,
  height: undefined,
  lgCollapse: undefined,
  lgUp: undefined,
  marginX: false,
  marginY: false,
  mdCollapse: undefined,
  mdUp: undefined,
  paddingX: false,
  paddingY: false,
  smCollapse: undefined,
  smUp: undefined,
  valign: undefined
};

Grid.propTypes = {
  align: PropTypes.oneOf(["center", "justify", "right", "spaced"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.string,
  gridX: PropTypes.bool,
  gridY: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lgCollapse: PropTypes.oneOf(["margin", "padding"]),
  lgUp: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  marginX: PropTypes.bool,
  marginY: PropTypes.bool,
  mdCollapse: PropTypes.oneOf(["margin", "padding"]),
  mdUp: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  paddingX: PropTypes.bool,
  paddingY: PropTypes.bool,
  smCollapse: PropTypes.oneOf(["margin", "padding"]),
  smUp: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  valign: PropTypes.oneOf(["bottom", "middle", "stretch", "top"])
};

export default React.memo(Grid);
