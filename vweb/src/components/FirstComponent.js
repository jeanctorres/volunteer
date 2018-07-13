import React, { Component } from "react";
import Button from "@material-ui/core/Button";
class FirstComponent extends Component {
  render() {
    return (
      <div>
        <h1> FirstComponent </h1>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default FirstComponent;
