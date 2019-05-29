import React, { Component } from "react";

import Spinner from "../../components/spinner";
import ErrorIndicator from './../../components/error-indicator';

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
      error: false,
    };

    componentDidMount() {
      getData()
        .then(data => this.setState({ data }))
        .catch(() => this.setState({
          error: true,
        }));
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