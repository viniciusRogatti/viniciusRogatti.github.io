import {createGlobalStyle} from "styled-components"

const GlobalStyled = createGlobalStyle`
:root {
  --blue: #72a5ae;
  --black: #131212;
  --yellow: #e0e05a;
  --secondary-blue: #2bc6ff;
  --white: #fefefe;
  --purple: #8c12f0;
  --green: green;
}

/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
  padding: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  /* -webkit-font-smoothing: antialiased; */
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}

.app {
  width: 100vw;
  height: 100vh;
  background: #131212;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}

.appLight {
  width: 100vw;
  height: 100vh;
  background: #72a5ae;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}
`;

export default GlobalStyled;