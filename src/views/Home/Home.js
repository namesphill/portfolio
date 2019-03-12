import React, { useState } from "react";
import { Box } from "rebass";
import { useSpring, animated } from "react-spring";
import TopoBlob from "../../components/TopoBlob/TopoBlob";
import colors from "../../utils/ColorPallete";
function Home() {
  const screen = {
    width: "100vw",
    height: "100vh"
  };
  const logo = {
    width: "60vw",
    height: "25vw"
  };
  const pink = colors.get("color", "pink");
  const teal = colors.get("color", "teal");
  const [toggle, updateToggle] = useState(false);
  const initialProps = {
    opacity: 1,
    width: 100,
    height: 100,
    position: "absolute",
    backgroundColor: pink,
    top: 40,
    left: 60
  };
  const conclusiveProps = {
    opacity: 0.2,
    backgroundColor: teal,
    position: "absolute",
    top: 0,
    left: 0,
    height: window.innerHeight,
    width: window.innerWidth,
    margin: "none none none none !important"
  };
  const [props, set, stop] = useSpring(() => initialProps);
  set(!toggle ? initialProps : conclusiveProps);
  stop();
  // const props = useSpring({
  //   to: async (next, cancel) => {
  //     await next({ opacity: 1, color: "#ffaaee" });
  //     await next({ opacity: 0, color: "rgb(14,26,19)" });
  //   },
  //   from: { opacity: 0, color: "red" }
  // });
  return (
    <React.Fragment>
      <animated.div style={props} onClick={() => updateToggle(!toggle)}>
        I will fade in and out
      </animated.div>
      {/* <Box width={[0.9, 540]} height={[0.9, 540]} mb={-2} style={props}>
        <TopoBlob
          layers={8}
          label="Code"
          labelColor={colors.get("color", "purple")}
          labelXOffset={-80}
          labelYOffset={-60}
          labelFontSizePx={60}
          baseColor={colors.get("color", "darkpurple")}
          complexity={(p, i, l) => 0.8 * Math.sin(i) + 0.1}
          contrast={(p, i, l) => 0.8 * Math.cos(i) + 0.1}
          seed={(p, i, l) => Date.now() * 1000 * Math.random() * p * p * p}
          onClick={() => alert("clicked")}
        />
      </Box> */}
    </React.Fragment>
  );
}
export default Home;
