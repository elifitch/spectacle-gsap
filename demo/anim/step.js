/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import IB from '../components/inline-block';
import FromTopFollowThroughCrazy from './from-top-follow-through-crazy';

function Step(props) {
  const splitChildren = props.children.split('').map((c, i) => (
    <FromTopFollowThroughCrazy>
      <IB className="split" key={`split-el-${i}`}>{c === ' ' ? '\u00A0' : c}</IB>
    </FromTopFollowThroughCrazy>
  ));
  return (
    <IB>{splitChildren}</IB>
  );
}
Step.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Step;
