import React from 'react';
import PropTypes from 'prop-types';
import Tween from '../../src/index';
import IB from '../components/inline-block';

function FromTop(props) {
  return (
    <Tween
      inline
      anims={[
        [
          {
            method: 'from',
            target: child => child,
            duration: 0.5,
            args: [{
              y: '-20%', opacity: 0, ease: Power2.easeOut,
            }],
          },
        ],
      ]}
    >
      <IB>{props.children}</IB>
    </Tween>
  );
}
FromTop.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FromTop;
