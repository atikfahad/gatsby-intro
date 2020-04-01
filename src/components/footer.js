import React from 'react';
import { css } from '@emotion/core';

const Footer = () => (
  <footer
    css={css`
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
    `}
  >
    Made with &hearts; by
    <a href="https://atikfahad.com"> @atikfahad</a>
  </footer>
);

export default Footer;
