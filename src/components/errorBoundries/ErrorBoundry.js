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
      return (
        <div
          className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          <span className="font-medium">Error Boundary:</span> Something went
          wrong in your application!
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
