import React from 'react';
import PropTypes from 'prop-types';
import Tween from '../../src/index';
import IB from '../components/inline-block';

function FromTopSquashStretch(props) {
  return (
    <Tween
      inline
      anims={[
        [
          {
            method: 'from',
            target: child => child,
            duration: 1.0,
            args: [{
              // scaleX: 0.95, scaleY: 1.05, y: '-20%', ease: Elastic.easeOut.config(1, 0.8),
              scaleX: 0.9, scaleY: 1.1, y: '-20%', ease: Elastic.easeOut.config(1, 0.6),
            }],
          },
          {
            method: 'from',
            target: child => child,
            duration: 0.6,
            args: [{
              opacity: 0, ease: Power2.easeOut,
            }, '-=1'],
          },
        ],
      ]}
    >
      <IB>{props.children}</IB>
    </Tween>
  );
}
FromTopSquashStretch.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FromTopSquashStretch;
