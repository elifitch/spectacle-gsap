/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import IB from './inline-block';

function SplitText(props) {
  const splitChildren = props.children.split('').map((c, i) => (
    <IB className="split" key={`split-el-${i}`}>{c === ' ' ? '\u00A0' : c}</IB>
  ));
  return (
    <IB {...props}>{splitChildren}</IB>
  );
}

SplitText.defaultProps = {
  style: {},
  className: '',
};

SplitText.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SplitText;
