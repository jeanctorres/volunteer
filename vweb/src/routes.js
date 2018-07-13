import React from "react";
import Promise from "promise";
import { Redirect } from "react-router-dom";

import FirstContainer from "./containers/FirstContainer";
import SecondContainer from "./containers/SecondContainer";

export default [
  {
    path: "/first",
    component: FirstContainer
  },
  {
    path: "/second",
    component: SecondContainer
  }
];
