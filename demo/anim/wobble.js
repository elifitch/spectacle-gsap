import React from 'react';
import PropTypes from 'prop-types';
import Tween from '../../src/index';

function Wobble(props) {
  const iterations = 10;
  const animation = [
    {
      method: 'to',
      duration: 0.4,
      args: [{ rotation: '-20' }],
    },
    {
      method: 'to',
      duration: 0.4,
      args: [{ rotation: '20' }],
    },
    {
      method: 'to',
      duration: 0.4,
      args: [{ rotation: '0' }],
    },
  ];
  const anims = [];
  for (let i = 0; i < iterations; i += 1) {
    anims.push(animation);
  }
  // const makeAnims = new Array(iterations).map(() => anims);

  return (
    <Tween
      inline
      anims={[
        ...anims
      ]}
    >
      <div>{props.children}</div>
    </Tween>
  );
}
Wobble.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wobble;
