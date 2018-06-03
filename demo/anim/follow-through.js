import React from 'react';
import PropTypes from 'prop-types';
import Tween from '../../src/index';
import IB from '../components/inline-block';

function FollowThrough(props) {
  return (
    <Tween
      inline
      anims={[
        [
          {
            method: 'from',
            duration: 2.0,
            args: [{ opacity: 0, y: -200, ease: Elastic.easeOut.config(1.3, 1) }],
          },
        ],
      ]}
    >
      <IB>{props.children}</IB>
    </Tween>
  );
}
FollowThrough.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FollowThrough;
