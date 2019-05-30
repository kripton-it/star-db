import React, { Component } from "react";

import Spinner from "../../components/spinner";
import ErrorIndicator from "./../../components/error-indicator";

const withData = View => {
  return class extends Component {
    state = {
      data: null,
      error: false,
      isLoading: true
    };

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this._update();
      }
    }

    componentDidMount() {
      this._update();
    }

    _update() {
      this.setState({
        isLoading: true,
        error: false
      });

      this.props
        .getData()
        .then(data => this.setState({ data, isLoading: false, error: false }))
        .catch(() =>
          this.setState({
            error: true,
            isLoading: false
          })
        );
    }

    render() {
      const { data, error, isLoading } = this.state;

      if (error) {
        return <ErrorIndicator />;
      }

      if (!data || isLoading) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
