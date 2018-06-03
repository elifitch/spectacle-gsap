/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  Deck,
  Heading,
  Slide,
} from 'spectacle';
import theme, { contentWidth } from './theme';
import {
  Letterwave,
  CallFn,
  Anticipation,
  FollowThrough,
  Squash,
  Stretch,
  FromTop,
  FromTopSquashStretch,
  FromTopFollowThroughFun,
  FromTopFollowThroughSerious,
  FromTopSecondaryAction,
  CrazyEase
} from './anim';
import heMan from './assets/he-man.gif';

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        theme={theme}
        transition={['slide']}
        transitionDuration={300}
        controls={false}
        contentHeight={1000}
        contentWidth={contentWidth}
        progress="bar"
      >
        <Slide>
          <Heading size={1}>Spectacle GSAP</Heading>
        </Slide>

        <Slide bgImage={heMan}>
          <Heading size={1}>It gives you the power...</Heading>
        </Slide>

        <Slide>
          <Heading size={2}>To <Squash>squash</Squash> and <Stretch>stretch</Stretch></Heading>
        </Slide>

        <Slide>
          <Heading size={2}>To <Letterwave>stagger animations</Letterwave></Heading>
        </Slide>

        <Slide>
          {/* <Heading size={1}>To have insanely flexible <CrazyEase>easing</CrazyEase></Heading> */}
          <Heading size={2}>To have insanely flexible <FollowThrough>easing</FollowThrough></Heading>
        </Slide>
      </Deck>
    );
  }
}
