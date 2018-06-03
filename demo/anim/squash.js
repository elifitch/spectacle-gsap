import React from 'react';
import PropTypes from 'prop-types';
import Tween from '../../src/index';
import IB from '../components/inline-block';

function Squash(props) {
  return (
    <Tween
      inline
      anims={[
        [
          {
            method: 'to',
            duration: 1.0,
            args: [{
              scaleX: 1.25, scaleY: 0.75, y: '8%', ease: Power2.easeOut,
            }],
          },
          {
            method: 'to',
            duration: 2.0,
            args: [{
              scaleX: 1.0, scaleY: 1.0, y: '0%', ease: Elastic.easeOut.config(1, 0.2),
            }],
          },
        ],
      ]}
    >
      <IB>{props.children}</IB>
    </Tween>
  );
}
Squash.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Squash;
