import ClassNames from "classnames";
import PropTypes from "prop-types";
import * as React from "react";

const Cell = props => {
  const {
    auto,
    children,
    className,
    component,
    lg,
    lgOffset,
    md,
    mdOffset,
    shrink,
    sm,
    smOffset,
    valign
  } = props;

  const classes = ClassNames(
    "cell",
    {
      [`align-self-${valign}`]: valign !== undefined && valign !== null,
      auto,
      [`medium-${md}`]: md !== undefined && md !== null,
      [`medium-offset-${mdOffset}`]: mdOffset !== undefined && mdOffset !== null,
      [`large-${lg}`]: lg !== undefined && lg !== null,
      [`large-offset-${lgOffset}`]: lgOffset !== undefined && lgOffset !== null,
      shrink,
      [`small-${sm}`]: sm !== undefined && sm !== null,
      [`small-offset-${smOffset}`]: smOffset !== undefined && smOffset !== null
    },
    className
  );

  return React.createElement(
    typeof component === "string" ? component : component(),
    {
      className: classes
    },
    children
  );
};

Cell.defaultProps = {
  auto: false,
  className: undefined,
  component: "div",
  lg: undefined,
  lgOffset: undefined,
  md: undefined,
  mdOffset: undefined,
  shrink: false,
  sm: undefined,
  smOffset: undefined,
  valign: undefined
};

Cell.propTypes = {
  auto: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  lg: PropTypes.oneOf(["auto", "shrink", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lgOffset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: PropTypes.oneOf(["auto", "shrink", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  mdOffset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  shrink: PropTypes.bool,
  sm: PropTypes.oneOf(["auto", "shrink", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  smOffset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  valign: PropTypes.oneOf(["bottom", "middle", "stretch", "top"])
};

export default React.memo(Cell);
