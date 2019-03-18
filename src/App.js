import React, { useState, useLayoutEffect } from "react";
import Routes from "./routes/Routes";
import Theme, { Themes } from "./containers/Theme/Theme";
import { Box } from "rebass";
import Navbar from "./components/Navbar/Navbar";
import { withRouter } from "react-router-dom";
import { Spring, animated } from "react-spring/renderprops";
import getBreakpoint from "./utils/getBreakpoint";
function App(props) {
  const [width, updateWidth] = useState(window.innerWidth);
  window.onresize = function({ target: { innerWidth: width } }) {
    if (width % 5 === 0) updateWidth(width);
  };
  const [counter, increment] = useState(0);
  useLayoutEffect(() => increment(counter + 1), [props.location.pathname]);
  const breakpoint = getBreakpoint(width, Themes.main.breakpoints);
  return (
    <>
      <Theme>
        <Box width={[0.6, 360]}>
          <Navbar />
        </Box>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          native
          reset={counter % 2}
        >
          {style => (
            <animated.div style={style}>
              <Routes
                layoutProps={{
                  breakpoint: breakpoint,
                  width: width,
                  height: window.innerHeight
                }}
              />
            </animated.div>
          )}
        </Spring>
      </Theme>
    </>
  );
}
export default withRouter(React.memo(App));
