import React, { Component } from "react";

import Spinner from "../../components/spinner";
import ErrorIndicator from "./../../components/error-indicator";

const withData = View => {
  return class extends Component {
    state = {
      data: null,
      error: false
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
      this.props
        .getData()
        .then(data => this.setState({ data }))
        .catch(() =>
          this.setState({
            error: true
          })
        );
    }

    render() {
      const { data, error } = this.state;

      if (error) {
        return <ErrorIndicator />;
      }

      if (!data) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
