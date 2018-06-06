/* eslint-disable global-require, import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import Tween from '../../src/index';
import IB from '../components/inline-block';
import SplitWords from '../components/split-words';

// if (process.env.GSAP_PLUGINS) {
//   require('../lib/gsap/Physics2DPlugin');
// }

function Float(props) {
  if (!process.env.GSAP_PLUGINS) {
    return (
      <IB>{props.children}</IB>
    );
  }
  
  const numWords = props.children.split(' ').length;
  const tweens = [];
  const duration = 3.0;
  const gravity = 1000;

  for (let i = 0; i < numWords; i += 1) {
    const target = child => child.querySelectorAll('.split')[i];
    const velocity = (Math.random() * 400) + 450;
    const angle = (Math.random() * 40) + 250;
    const TLDelay = (Math.random() * duration) / 4;
    const floatTween = {
      method: 'to',
      duration,
      target,
      args: [{ physics2D: { velocity, angle, gravity } }, TLDelay],
    };
    const opacityTween = {
      method: 'to',
      duration,
      target,
      args: [{ opacity: 0 }, TLDelay + (duration / 5)],
    };
    tweens.push(floatTween);
    tweens.push(opacityTween);
  }

  return (
    <Tween
      inline
      anims={[
        tweens,
      ]}
    >
      <IB><SplitWords>{props.children}</SplitWords></IB>
    </Tween>
  );
}
Float.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Float;
