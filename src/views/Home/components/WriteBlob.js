import React from "react";
import colors from "../../../utils/ColorPallete";
import { Heading } from "rebass";
import { main as mainTheme } from "../../../containers/Theme/themes";
import TopoBlob from "../../../components/TopoBlob/TopoBlob";
const { breakpoints } = mainTheme;
function WriteBlob({ w, h, label }) {
  let size, xy;
  if (w < breakpoints[1]) {
    size = p => w * 0.5 * p + w * 0.75;
    xy = [w * 0.5, 250 + w * 0.75];
  } else if (w < breakpoints[2]) {
    size = p => w * 0.4 * p + w * 0.6;
    xy = [w * 0.4, w * 0.75];
  } else if (w < breakpoints[3]) {
    console.log("tablet down");
    size = p => w * 0.4 * p + w * 0.6;
    xy = [w * 0.3, w * 0.6];
  } else if (w < breakpoints[4]) {
    console.log("laptop");
    size = p => w * 0.4 * p + w * 0.4;
    xy = [w * 0.25, w * 0.5];
  } else if (w < breakpoints[5]) {
    console.log("desktop");
    size = p => w * 0.39 * p + w * 0.38;
    xy = [w * 0.25, w * 0.25 + 90];
  } else {
    console.log("big ol desktop");
    size = p => w * 0.39 * p + w * 0.38;
    xy = [w * 0.25, w * 0.25 + 90];
  }
  return (
    <React.Fragment>
      <Heading
        fontSize={size(1) / 5}
        color={colors.get("color", "darkpink")}
        style={{
          position: "absolute",
          top: xy[1],
          left: xy[0] * 0.5
        }}
      >
        Write
      </Heading>
      <TopoBlob
        layers={8}
        baseColor={colors.get("color", "darkpink")}
        size={size}
        xyCoords={xy}
        complexity={(p, i, l) => 0.8 * Math.sin(i) + 0.1}
        contrast={(p, i, l) => 0.8 * Math.cos(i) + 0.1}
        seed={(p, i, l) =>
          Math.hypot(p * p * p * (i + l), l * l * i) *
          i *
          i *
          Date.now() *
          32569
        }
      />
    </React.Fragment>
  );
}
export default WriteBlob;
