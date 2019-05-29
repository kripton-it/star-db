import React from 'react';

const withRenderFunction = (Wrapped, fn) => {
  return props => {
    return <Wrapped {...props} renderItem={fn} />;
  };
};

export default withRenderFunction;