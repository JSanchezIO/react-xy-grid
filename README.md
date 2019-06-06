# react-xy-grid

React component that wraps [Foundation's XY Grid](https://foundation.zurb.com/sites/docs/xy-grid.html).

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![npm version](https://badge.fury.io/js/react-xy-grid.svg)](https://badge.fury.io/js/react-xy-grid)

## Table of Contents

- [Installation](#installation)
- [Cell](#cell)
- [Grid](#grid)
- [GridContainer](#grid-container)
- [Notes](#notes)

## Installation

Begin by installing the package as a dependency.

```sh
npm i -S react-xy-grid
```

Start utilizing the components where needed.

```jsx
import * as React from "react";
import { Cell, Grid, GridContainer } from "react-xy-grid";

const Home = () => {
  return (
    <GridContainer>
      <Grid gridX valign="middle">
        <Cell sm={12} lg={6}>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
        </Cell>
        <Cell sm={12} lg={6}>
          <a href="/explicabo">Explicabo!</a>
        </Cell>
      </Grid>
    </GridContainer>
  );
};

export default Home;
```

## Cell

| Name        | Type                                                                                   | Required | Default Value |
| ----------- | -------------------------------------------------------------------------------------- | -------- | ------------- |
| `auto`      | `boolean`                                                                              | `false`  | `false`       |
| `children`  | `ReactNode`                                                                            | `true`   | `undefined`   |
| `className` | `string`                                                                               | `false`  | `undefined`   |
| `component` | `string`                                                                               | `false`  | `"div"`       |
| `lg`        | `"auto"`, `"shrink"`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, or `12` | `false`  | `undefined`   |
| `lgOffset`  | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, or `12`                       | `false`  | `undefined`   |
| `md`        | `"auto"`, `"shrink"`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, or `12` | `false`  | `undefined`   |
| `mdOffset`  | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, or `12`                       | `false`  | `undefined`   |
| `shrink`    | `boolean`                                                                              | `false`  | `false`       |
| `sm`        | `"auto"`, `"shrink"`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, or `12` | `false`  | `undefined`   |
| `smOffset`  | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, or `12`                       | `false`  | `undefined`   |
| `valign`    | `"bottom"`, `"middle"`, `"stretch"`, or `"top"`                                        | `false`  | `undefined`   |

## Grid

| Name         | Type                                                             | Required | Default Value |
| ------------ | ---------------------------------------------------------------- | -------- | ------------- |
| `align`      | `"center"`, `"justify"`, `"right"`, or `"spaced"`                | `false`  | `undefined`   |
| `children`   | `ReactNode`                                                      | `true`   | `undefined`   |
| `className`  | `string`                                                         | `false`  | `undefined`   |
| `component`  | `string`                                                         | `false`  | `"div"`       |
| `gridX`      | `boolean`                                                        | `false`  | `false`       |
| `gridY`      | `boolean`                                                        | `false`  | `false`       |
| `height`     | `number` or `string`                                             | `false`  | `undefined`   |
| `lgCollapse` | `"margin"` or `"padding"`                                        | `false`  | `undefined`   |
| `lgUp`       | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, or `12` | `false`  | `undefined`   |
| `marginX`    | `boolean`                                                        | `false`  | `false`       |
| `marginY`    | `boolean`                                                        | `false`  | `false`       |
| `mdCollapse` | `"margin"` or `"padding"`                                        | `false`  | `undefined`   |
| `mdUp`       | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, or `12` | `false`  | `undefined`   |
| `paddingX`   | `boolean`                                                        | `false`  | `false`       |
| `paddingY`   | `boolean`                                                        | `false`  | `false`       |
| `smCollapse` | `"margin"` or `"padding"`                                        | `false`  | `undefined`   |
| `smUp`       | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, or `12` | `false`  | `undefined`   |
| `valign`     | `"bottom"`, `"middle"`, `"stretch"`, or `"top"`                  | `false`  | `undefined`   |

## Grid Container

| Name        | Type        | Required | Default Value |
| ----------- | ----------- | -------- | ------------- |
| `children`  | `ReactNode` | `true`   | `undefined`   |
| `className` | `string`    | `false`  | `undefined`   |
| `component` | `string`    | `false`  | `"div"`       |
| `fluid`     | `boolean`   | `false`  | `false`       |
| `full`      | `boolean`   | `false`  | `false`       |

## Notes

If you import the components for use via the module namespace like so:

```js
import { Cell, Grid, GridContainer } from "react-xy-grid";
```

Using this syntax, you will not have to manually import the CSS file as the module's index file import's a compiled CSS version of the Foundation styles.

> This assumes that your build system is configured to handle importing `.css` files in your scripts.

However, there is a `.scss` in the module's directory that can be used to generate the Foundation styles at compile time. If this is the desired result, you will need to adjust the above import statement, to avoid importing the `.css` file.

```js
import Cell from "react-xy-grid/Cell/Cell";
import Grid from "react-xy-grid/Grid/Grid";
import GridContainer from "react-xy-grid/GridContainer/GridContainer";
```

> This may be valuable if your build system is **not** configured to handle importing `.css` files in your scripts.

Additionally, you will have to import the module's `.scss` file.

```scss
@import "~react-xy-grid/index.scss";

// or

@import "../../node_modules/react-xy-grid/index.scss";
```

> The first import example assumes your sass compiler supports the `~` syntax to import from `node_modules`
