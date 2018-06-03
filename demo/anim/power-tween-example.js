import React from 'react';
import PropTypes from 'prop-types';
import Tween from '../../src/index';
import SplitText from '../split-text';

function PowerTweenExample(props) {
  return (
    <Tween
      anims={[
        [
          {
            method: 'staggerFrom',
            target: child => child.querySelectorAll('.split'),
            duration: 1.0,
            args: [{ y: -100, ease: Elastic.easeOut.config(1, 0.6) }, 0.05],
          },
          {
            method: 'staggerTo',
            target: child => child.querySelectorAll('.split'),
            duration: 1.0,
            args: [{ y: 200, ease: Elastic.easeOut.config(1, 0.6) }, 0.05],
          },
        ],
        [
          {
            method: 'staggerTo',
            target: child => child.querySelectorAll('.split'),
            duration: 1.0,
            args: [{ y: 300, ease: Elastic.easeOut.config(1, 0.6) }, 0.05],
          },
        ],
      ]}
    >
      <div>
        <SplitText>
          {props.children}
        </SplitText>
      </div>
    </Tween>
  );
}
PowerTweenExample.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PowerTweenExample;
