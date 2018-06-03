import React from 'react';
import PropTypes from 'prop-types';
import Tween from '../../src/index';
import IB from '../components/inline-block';

function FromTopSecondaryAction(props) {
  const dur = 1.2;
  return (
    <Tween
      inline
      anims={[
        [
          {
            method: 'from',
            duration: 0.6,
            args: [{
              y: '-20%', opacity: 0, ease: Power2.easeOut,
            }],
          },
          {
            method: 'staggerFrom',
            target: child => child.querySelectorAll('[data-stagger-target]'),
            duration: dur,
            args: [{
              opacity: 0, y: '-30%', ease: Elastic.easeOut.config(1, 0.9),
            }, 0.05, '-=0.55'],
          },
        ],
      ]}
    >
      <IB>{props.children}</IB>
    </Tween>
  );
}
FromTopSecondaryAction.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FromTopSecondaryAction;
