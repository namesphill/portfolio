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
  return (
    <React.Fragment>
      <animated.div
        width={[0.9, 540]}
        height={[0.9, 540]}
        style={{ position: "absolute" }}
      >
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
      </animated.div>
    </React.Fragment>
  );
}
export default Home;
