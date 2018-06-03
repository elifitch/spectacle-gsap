import React from 'react';
import PropTypes from 'prop-types';
import Tween from '../../src/index';
import IB from '../components/inline-block';

function FromTopFollowThroughFun(props) {
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
              y: '-20%', ease: Elastic.easeOut.config(1, 0.5),
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
FromTopFollowThroughFun.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FromTopFollowThroughFun;
