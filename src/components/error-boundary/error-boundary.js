import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { hasError } = this.state;
    return hasError ? <ErrorIndicator /> : this.props.children;
  }
}

export default ErrorBoundary;
