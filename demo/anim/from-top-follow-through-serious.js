import React from 'react';
import PropTypes from 'prop-types';
import Tween from '../../src/index';
import IB from '../components/inline-block';

function FromTopFollowThroughSerious(props) {
  const dur = 1.2;
  return (
    <Tween
      inline
      anims={[
        [
          {
            method: 'from',
            target: child => child,
            duration: dur,
            args: [{
              y: '-20%', ease: Elastic.easeOut.config(1, 0.9),
            }],
          },
          {
            method: 'from',
            target: child => child,
            duration: 0.6,
            args: [{
              opacity: 0, ease: Power2.easeOut,
            }, `-=${dur}`],
          },
        ],
      ]}
    >
      <IB>{props.children}</IB>
    </Tween>
  );
}
FromTopFollowThroughSerious.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FromTopFollowThroughSerious;
