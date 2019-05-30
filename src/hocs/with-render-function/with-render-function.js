import React from 'react';

const withRenderFunction = (fn) => (Wrapped) => {
  return props => {
    return <Wrapped {...props} renderItem={fn} />;
  };
};

export default withRenderFunction;