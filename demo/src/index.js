/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { render } from "react-dom";
import { Cell, Grid, GridContainer } from "../../src";

const Demo = () => {
  return (
    <div>
      <h1>react-xy-grid Demo</h1>
      <GridContainer>
        <Grid>
          <Cell auto>
            <span>test</span>
          </Cell>
        </Grid>
      </GridContainer>
    </div>
  );
};

render(<Demo />, document.querySelector("#demo"));
