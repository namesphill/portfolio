import React from "react";
import { Heading } from "rebass";
import colors from "../../../utils/ColorPallete";
import { main as mainTheme } from "../../../containers/Theme/themes";
import TopoBlob from "../../../components/TopoBlob/TopoBlob";
const { breakpoints } = mainTheme;
function AmBlob({ w, h, label }) {
  let size, xy;
  if (w < breakpoints[1]) {
    size = p => w * 0.6 * p + w * 0.75;
    xy = [w * 0.5, 250 + w * 1.5];
  } else if (w < breakpoints[2]) {
    size = p => w * 0.4 * p + w * 0.6;
    xy = [w * 0.53, w * 1.3];
  } else if (w < breakpoints[3]) {
    size = p => w * 0.4 * p + w * 0.6;
    xy = [w * 0.55, w * 0.9];
  } else if (w < breakpoints[4]) {
    size = p => w * 0.25 * p + w * 0.5;
    xy = [w * 0.6, w * 0.65 + 90];
  } else if (w < breakpoints[5]) {
    size = p => w * 0.25 * p + w * 0.55;
    xy = [w * 0.6, w * 0.5 + 90];
  } else {
    size = p => w * 0.25 * p + w * 0.55;
    xy = [w * 0.6, w * 0.4 + 90];
  }
  return (
    <React.Fragment>
      <Heading
        fontSize={size(1) / 5}
        color={colors.get("color", "darkteal")}
        style={{
          position: "absolute",
          top: xy[1] * 0.8,
          left: xy[0]
        }}
      >
        Am
      </Heading>
      <TopoBlob
        size={size}
        layers={8}
        xyCoords={xy}
        baseColor={(p, i) => colors.get("colorGroupArray", "teal")[i % 2]}
        complexity={(p, i, l) => 0.9}
        contrast={(p, i, l) => 0.9}
        seed={p => p * p * p * 298}
      />
    </React.Fragment>
  );
}
export default AmBlob;
