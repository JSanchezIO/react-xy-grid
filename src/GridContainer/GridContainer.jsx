import ClassNames from "classnames";
import * as React from "react";
import PropTypes from "prop-types";

const GridContainer = props => {
  const { children, className, component, fluid, full } = props;

  const classes = ClassNames(
    "grid-container",
    {
      fluid,
      full
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

GridContainer.defaultProps = {
  className: undefined,
  component: "div",
  fluid: false,
  full: false
};

GridContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  full: PropTypes.bool
};

export default React.memo(GridContainer);
