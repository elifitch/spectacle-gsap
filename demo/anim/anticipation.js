/* global CustomEase */
import React from 'react';
import PropTypes from 'prop-types';
import Tween from '../../src/index';
import IB from '../components/inline-block';

function Anticipation(props) {
  return (
    <Tween
      inline
      anims={[
        [
          {
            method: 'from',
            target: child => child,
            duration: 0.4,
            args: [{ opacity: 0 }],
          },
          {
            method: 'from',
            target: child => child,
            duration: 1.0,
            args: [{ y: -200, ease: CustomEase.create('custom', 'M0,0 C0.192,0 0.36,-0.308 0.552,-0.234 0.671,-0.187 0.832,0.19 1,1') }],
          },
        ],
      ]}
    >
      <IB>{props.children}</IB>
    </Tween>
  );
}
Anticipation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Anticipation;
