import React from 'react';
import PropTypes from 'prop-types';
import Tween from '../../src/index';
import IB from '../components/inline-block';

require('../lib/CustomEase');
require('../lib/CustomBounce');

function CrazyBounce(props) {
  const ease = makeBounce();
  const fadeArgs = [{ opacity: 0, delay: 0 }];
  const fallArgs = [{ y: -200, delay: 0.5, ease: ease.primary }];
  const squashStretchArgs = [{
    scaleY: 0.5,
    scaleX: 1.3,
    delay: 0,
    ease: ease.secondary,
    transformOrigin: 'center bottom',
  }, '-=2'];

  return (
    <Tween
      inline
      anims={[
        [
          {
            method: 'from',
            duration: 0.2,
            args: fadeArgs,
          },
          {
            method: 'from',
            duration: 2.0,
            args: fallArgs,
          },
          {
            method: 'to',
            duration: 2.0,
            args: squashStretchArgs,
          },
        ],
      ]}
    >
      <IB>{props.children}</IB>
    </Tween>
  );
}
CrazyBounce.propTypes = {
  children: PropTypes.node.isRequired,
};

function makeBounce() {
  const primaryEaseId = 'myBounce';
  const squashEaseId = 'myBounce-squash';
  CustomBounce.create(primaryEaseId, { strength: 0.7, squash: 7, squashID: squashEaseId });
  return { primary: primaryEaseId, secondary: squashEaseId };
}

export default CrazyBounce;
