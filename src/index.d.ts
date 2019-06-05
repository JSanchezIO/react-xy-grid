declare module "react-xy-grid" {
  import * as React from "react";

  type Columns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

  type HorizontalAlignment = "center" | "justify" | "right" | "spaced";

  type GutterTypes = "margin" | "padding";

  type VerticalAlignment = "bottom" | "middle" | "stretch" | "top";

  type CellProps = {
    auto: boolean;
    children: React.ReactNode;
    className?: string;
    component: () => string | string;
    lg?: "auto" | "shrink" | Columns;
    lgOffset?: Columns;
    md?: "auto" | "shrink" | Columns;
    mdOffset?: Columns;
    shrink: boolean;
    sm?: "auto" | "shrink" | Columns;
    smOffset?: Columns;
    valign?: VerticalAlignment;
  };

  type GridProps = {
    align?: HorizontalAlignment;
    children: React.ReactNode;
    className?: string;
    component: () => string | string;
    gridX: boolean;
    gridY: boolean;
    height?: number | string;
    lgCollapse?: GutterTypes;
    lgUp?: Columns;
    marginX: boolean;
    marginY: boolean;
    mdCollapse?: GutterTypes;
    mdUp?: Columns;
    paddingX: boolean;
    paddingY: boolean;
    smCollapse?: GutterTypes;
    smUp?: Columns;
    valign?: VerticalAlignment;
  };

  type GridContainerProps = {
    children: React.ReactNode;
    className?: string;
    component: () => string | string;
    fluid: boolean;
    full: boolean;
  };

  export class Cell extends React.PureComponent<CellProps> {}

  export class Grid extends React.PureComponent<GridProps> {}

  export class GridContainer extends React.PureComponent<GridContainerProps> {}
}
