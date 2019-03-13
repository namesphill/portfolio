import React, { useState } from "react";
import { Home } from "./views";
import Theme, { Themes } from "./containers/Theme/Theme";
import { Box, Flex } from "rebass";
import colors from "./utils/ColorPallete";
import Navbar from "./components/Navbar/Navbar";
import AnimatedBackdrop from "./components/AnimatedBackdrop/AnimatedBackdrop";
const globalStyles = `
* { 
  box-sizing: border-box;
}
body { 
  margin: 0; 
  font-family: 'Josefin Sans', Times, Helvetica Neue;
  background: black;
  color: ${colors.get("color", "gray")};
}
`;
const debugStyle = `*:not(path):not(g) {
  color:                    hsla(210, 100%, 100%, 0.9) !important;
  background:               hsla(210, 100%,  50%, 0.5) !important;
  outline:    solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
  box-shadow: none !important;
}`;
const computeBreakpintsToRanges = breakpoints =>
  [-1, ...breakpoints, 12000]
    .map((el, i, arr) => (arr[i + 1] ? [el + 1, arr[i + 1]] : false))
    .filter(el => Boolean(el));
const getBreakpoint = (width, breakpoints) => {
  let index;
  computeBreakpintsToRanges(breakpoints).forEach(([start, end], i) => {
    if (width <= end && width >= start) index = i;
  });
  return index;
};
function App() {
  const [width, updateWidth] = useState(window.innerWidth);
  window.onresize = function({ target: { innerWidth: width } }) {
    if (width % 10 === 0) updateWidth(width);
  };
  const breakpoint = getBreakpoint(width, Themes.main.breakpoints);
  return (
    <>
      <style>{globalStyles}</style>
      <Theme>
        <div
          style={{
            position: "absolute",
            height: "auto",
            width: "100%",
            left: 0,
            top: 0
          }}
        >
          <Box width={[0.6, 360]}>
            <Navbar />
          </Box>
          <Home
            layoutProps={{
              breakpoint: breakpoint,
              width: width,
              height: window.innerHeight
            }}
          />
        </div>
      </Theme>
    </>
  );
}
export default App;
