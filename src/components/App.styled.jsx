import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.03em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  margin: 0;
}

p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  display: block;
  height: 100%;
  width: 100%;
}

li {
  list-style-type: none;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;
