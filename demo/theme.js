/* eslint-disable no-unused-expressions */

import createTheme from 'spectacle/lib/themes/default';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
import { css } from 'emotion';
import loGet from 'lodash.get';
import loSet from 'lodash.set';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved */

export const pink = '#ff4cff';
export const purple = '#9636f5';
export const whitesmoke = '#fafafa';
export const nearBlack = '#333333';
export const translucent = 'rgba(0, 0, 80, 0.2)';
export const islBlue = '#43d8f8';

export const contentWidth = 1600;
export const h1FontSize = '7rem';

export const underline = css`
  display: inline;
  background-size: 100% 0.15em;
  background-repeat: no-repeat;
  background-position: 0 1em;
  overflow: hidden;
  background-image: linear-gradient(to bottom, ${pink} 0%, ${pink} 100%);
  text-shadow: 0px 0.025em 0.1em rgba(0, 0, 0, 0.2);
`;

export const headingLineHeight = 1.2;

let mutableTheme = createTheme({
  primary: whitesmoke, // background
  secondary: nearBlack,
  tertiary: purple,
  quarternary: '#CECECE',
  nearBlack,
  translucent,
}, {
  primary: 'Helvetica, Futura, sans serif',
  secondary: 'monospace',
});

mutableTheme.extendComponent = (pathToComponent, style) => {
  const path = ['screen', 'components', ...pathToComponent];
  const componentStyle = Object.assign(
    {},
    loGet(mutableTheme, path),
    style,
  );
  loSet(mutableTheme, path, componentStyle);
  return mutableTheme;
};

mutableTheme = mutableTheme
  .extendComponent(['quote'], {
    borderLeft: `4px solid ${pink}`,
    color: nearBlack,
    lineHeight: 1.1,
  })
  .extendComponent(['cite'], {
    color: translucent,
  })
  .extendComponent(['listItem'], {
    listStyleType: 'none',
    marginBottom: '0.5em',
    paddingLeft: '0em',
    fontFamily: 'pinopolis',
  })
  .extendComponent(['heading', 'h1'], {
    fontSize: h1FontSize,
  })
  .extendComponent(['heading', 'h2'], {
    fontSize: '5rem',
    lineHeight: '1.2 !important',
    color: purple,
  })
  .extendComponent(['heading', 'h3'], {
    fontSize: '3.5rem',
    color: purple,
  })
  .extendComponent(['heading', 'h4'], {
    fontSize: '2.5rem',
    color: purple,
  })
  .extendComponent(['heading', 'h5'], {
    fontSize: '1.75rem',
    color: purple,
  })
  .extendComponent(['heading', 'h6'], {
    fontSize: '1.4rem',
    color: purple,
    marginTop: '2rem',
  })
  .extendComponent(['link'], {
    color: purple,
    textDecoration: underline,
  });

const theme = JSON.parse(JSON.stringify(mutableTheme));

export default theme;
