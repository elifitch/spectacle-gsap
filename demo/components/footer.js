import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies */
import styled from 'react-emotion';
/* eslint-enable */
import theme, { translucent, contentWidth, pink } from '../theme';

const SFooter = styled('footer') `
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 100%;
    max-width: ${contentWidth}px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
`;
const SHeading = styled('h5')(() => ({
  ...theme.screen.components.heading.h4,
  margin: '0',
  color: translucent,
}));
const SLink = styled('a') `
  color: ${({ highlight }) => (highlight ? pink : 'inherit')};
  text-decoration: none;
  transition: all 0.2s;
  position: relative;
  &:hover {
    color: ${pink};
  }
`;
const FooterLink = ({ children, href, highlight }) => (
  <SHeading>
    <SLink
      highlight={highlight}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </SLink>
  </SHeading>
);
FooterLink.defaultProps = { highlight: false };
FooterLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  highlight: PropTypes.bool,
};

function Footer() {
  return (
    <SFooter>
      <FooterLink href="http://eli.wtf">
        Eli.wtf
      </FooterLink>
      <FooterLink href="https://twitter.com/elifitch">
        @elifitch
      </FooterLink>
    </SFooter>
  );
}

export default Footer;
