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
            <Heading size={1}>The most powerful<br />animation framework</Heading>
          </Slide>

          <Slide>
            <Heading size={1}>Meets the friendliest <Heading size={6}>(or at least reactiest)</Heading> <br />slide deck framework</Heading>
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

          {process.env.GSAP_PLUGINS ? (
            <div hasSlideChildren>
              <Slide>
                <Heading size={2}>To tap into the GSAP plugin ecosystem</Heading>
                <Heading size={6}>FYI these cost money, please <Link href="https://greensock.com/club" target="_blank">support the development of GSAP</Link>.</Heading>
              </Slide>

              <Slide>
                <Heading size={2}>Giving you insanely <FollowThrough>flexible</FollowThrough> <CrazyBounce>easing</CrazyBounce></Heading>
              </Slide>

              <Slide>
                <Heading size={2}><Float>Or even some wild physics</Float></Heading>
              </Slide>
            </div>
          ) : (
            <Slide>
              <Heading size={2}>It even works with GSAP Plugins!</Heading>
              <Heading size={5}>Check out the <Link href="http://demos.eli.wtf/spectacle-gsap" target="_blank">live demo</Link> to see what they can do for you.</Heading>
              <Heading size={5}>FYI these cost money, please <Link href="https://greensock.com/club" target="_blank">support the development of GSAP</Link>.</Heading>
            </Slide>
          )}

          <Slide>
            <Heading size={2}>Spectacle 💖 GSAP,<br />and so will you!</Heading>
          </Slide>

          <Slide>
            <Heading size={2}>👀 it on <Link href="http://github.com">Github 🐙😸</Link>.</Heading>
          </Slide>
        </Deck>
        <Footer />
      </div>
    );
  }
}
