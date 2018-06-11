import React from 'react';
import PropTypes from 'prop-types';
import Tween from '../../src/index';
import IB from '../components/inline-block';

function FromTopFollowThroughCrazy(props) {
  const dur = 1.5;
  return (
    <Tween
      inline
      anims={[
        [
          {
            method: 'from',
            duration: dur,
            args: [{
              y: '-40%', ease: Elastic.easeOut.config(1, 0.2),
            }],
          },
          {
            method: 'from',
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
FromTopFollowThroughCrazy.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FromTopFollowThroughCrazy;
