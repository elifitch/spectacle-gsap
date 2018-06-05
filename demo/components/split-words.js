/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import IB from './inline-block';

function SplitWords(props) {
  const splitChildren = props.children.split(' ').map((c, i) => (
    <IB className="split" key={`split-el-${i}`}>{c}&nbsp;</IB>
  ));
  return (
    <IB {...props}>{splitChildren}</IB>
  );
}

SplitWords.defaultProps = {
  style: {},
  className: '',
};

SplitWords.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SplitWords;
