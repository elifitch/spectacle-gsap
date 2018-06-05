import React from 'react';
import {
  Deck,
  Heading,
  Slide,
  Link,
} from 'spectacle';
import theme, { contentWidth } from './theme';
import {
  Letterwave,
  FollowThrough,
  Squash,
  Stretch,
  CrazyBounce,
  Float,
} from './anim';
import Footer from './components/footer';
import heMan from './assets/he-man.gif';

export default class Presentation extends React.Component {
  render() {
    return (
      <div>
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

          <Slide>
            <Heading size={1}>The most powerful animation framework</Heading>
          </Slide>

          <Slide>
            <Heading size={1}>In the most powerful slide deck framework</Heading>
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
            <Heading size={2}>To tap into the GSAP plugin ecosystem</Heading>
            <Heading size={6}>These cost money, please support the development of GSAP.</Heading>
          </Slide>

          <Slide>
            <Heading size={2}>Giving you insanely <FollowThrough>flexible</FollowThrough> <CrazyBounce>easing</CrazyBounce></Heading>
          </Slide>

          <Slide>
            <Heading size={2}><Float>Or even some wild physics</Float></Heading>
          </Slide>

          <Slide>
            <Heading size={2}>Spectacle 💖 GSAP,<br />and so will you!</Heading>
          </Slide>

          <Slide>
            <Heading size={2}>👀 me on <Link href="http://github.com">Github 🐙😸</Link></Heading>
          </Slide>
        </Deck>
        <Footer />
      </div>
    );
  }
}
