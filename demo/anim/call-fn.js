import React from 'react';
import PropTypes from 'prop-types';
import Tween from '../../src/index';

function CallFn({ fn }) {
  return (
    <Tween
      anims={[
        [
          {
            method: 'from',
            target: child => child,
            duration: 0.01,
            args: [{ onComplete: fn }],
          },
        ],
      ]}
    >
      <div />
    </Tween>
  );
}
CallFn.propTypes = {
  fn: PropTypes.func.isRequired,
};

export default CallFn;
