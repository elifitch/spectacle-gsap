import React from 'react';
import PropTypes from 'prop-types';
import Tween from '../../src/index';
import SplitText from '../components/split-text';
import IB from '../components/inline-block';

function Letterwave(props) {
  return (
    <Tween
      inline
      anims={[
        [
          {
            method: 'staggerFrom',
            target: child => child.querySelectorAll('.split'),
            duration: 2.0,
            args: [{ y: '-40%', opacity: 0, ease: Elastic.easeOut.config(1, 0.2) }, 0.05],
          },
        ],
      ]}
    >
      <IB>
        <SplitText>
          {props.children}
        </SplitText>
      </IB>
    </Tween>
  );
}
Letterwave.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Letterwave;
