import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Error Boundary: Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
