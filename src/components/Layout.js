import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import GithubCorner from './GithubCorner';

const GlobalStyle = createGlobalStyle`
  :root {
  --pokemon-yellow: #ffcb05;
  --pokemon-blue: #2a75bb;
  --pokemon-yellow-shadow: #c7a008;
  /* --pokemon-blue-shadow: #3c5aa6; */
  --pokemon-blue-shadow: #003a70;
  --pokemon-blue-light: #7091C5;

  --red: #ee0e33;
  --red-d: #e41237;
  --red-dd: #5c0e0a;
  --red-l: #ff3b5c;
}
`;

const StyledLayout = styled.main`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--red-l);
  background: linear-gradient(
    to top right,
    var(--red),
    var(--red-l),
    var(--red-d)
  );
  overflow: hidden;
  box-sizing: border-box;
  padding: 20px;
  h1,
  h2 {
    font-family: 'pokemon-solid';
    color: var(--pokemon-yellow);
    -webkit-text-stroke: 1px var(--pokemon-blue);
    text-shadow: var(--pokemon-blue-shadow) -0.75px 1px,
      var(--pokemon-blue-shadow) -1.5px 2px,
      var(--pokemon-blue-shadow) -2.25px 3px,
      var(--pokemon-blue-shadow) -3px 4px;
  }
  h1 {
    font-size: 2em;
    letter-spacing: 0.1em;
    @media screen and (max-width: 767px) {
      display: ${(props) => (props.playing ? 'none' : 'block')};
    }
    @media screen and (min-width: 768px) {
      font-size: 4em;
      letter-spacing: 0.12em;
      -webkit-text-stroke: 2px var(--pokemon-blue);
    }
  }
  h2 {
    font-size: 1.6em;
    letter-spacing: 0.08em;
    @media screen and (min-width: 768px) {
      font-size: 3.2em;
      letter-spacing: 0.1em;
      -webkit-text-stroke: 1.6px var(--pokemon-blue);
    }
  }
`;

const Layout = ({ playing, children }) => {
  return (
    <StyledLayout playing={playing}>
      <GlobalStyle />
      {children}
      <GithubCorner />
    </StyledLayout>
  );
};

export default Layout;
