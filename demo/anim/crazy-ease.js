import React from 'react';
import PropTypes from 'prop-types';
import Tween from '../../src/index';
import IB from '../components/inline-block';

function CrazyEase(props) {
  const dur = 0.5;
  const zipDur = 0.6;
  const zipSkew = 6;
  // const secondSkewDelay = zipDur * 0.58;
  const secondSkewDelay = zipDur * 0.7;
  const ease = Elastic.easeOut.config(1.3, 1);

  const zipLeft = [{
    method: 'to',
    target: child => child,
    duration: zipDur,
    args: [{
      x: '-50%', ease,
    }],
  },
  {
    method: 'to',
    target: child => child,
    duration: zipDur * 0.5,
    args: [{
      skewX: `-${zipSkew}deg`, ease,
    }, `-=${zipDur}`],
  },
  {
    method: 'to',
    target: child => child,
    duration: zipDur * 0.5,
    args: [{
      skewX: '0deg', ease,
    }, `-=${secondSkewDelay}`],
  }];

  const zipRight = [{
    method: 'to',
    target: child => child,
    duration: zipDur,
    args: [{
      x: '50%', ease,
    }],
  },
  {
    method: 'to',
    target: child => child,
    duration: zipDur * 0.5,
    args: [{
      skewX: `${zipSkew * 2}deg`, ease,
    }, `-=${zipDur}`],
  },
  {
    method: 'to',
    target: child => child,
    duration: zipDur * 0.5,
    args: [{
      skewX: '0deg', ease,
    }, `-=${secondSkewDelay}`],
  }];

  const zipCenter = [{
    method: 'to',
    target: child => child,
    duration: zipDur,
    args: [{
      x: '0%', ease,
    }],
  },
  {
    method: 'to',
    target: child => child,
    duration: zipDur * 0.5,
    args: [{
      skewX: `-${zipSkew}deg`, ease,
    }, `-=${zipDur}`],
  },
  {
    method: 'to',
    target: child => child,
    duration: zipDur * 0.5,
    args: [{
      skewX: '0deg', ease,
    }, `-=${secondSkewDelay}`],
  }];
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
              y: '-200%', ease,
            }],
          },
          {
            method: 'from',
            target: child => child,
            duration: dur,
            args: [{
              opacity: 0, ease,
            }, `-=${dur * 1.2}`],
          },
        ],
        [
          ...zipLeft,
          ...zipRight,
          ...zipCenter,
        ],
      ]}
    >
      <IB>{props.children}</IB>
    </Tween>
  );
}
CrazyEase.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CrazyEase;
