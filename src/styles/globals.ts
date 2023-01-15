import { css } from '@emotion/react';

export const global = css`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Ycomputer-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/Ycomputer-Regular.woff2')
      format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
  }

  #__next {
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    padding: 0;
  }

  button,
  input,
  textarea {
    color: inherit;
    font-size: 100%;
    border: 0;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
    width: 100%;
    color: none;

    &:visited {
      color: none;
    }
  }
`;
