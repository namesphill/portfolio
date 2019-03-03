import React from "react";
import { Heading } from "rebass";
import colors from "../../../utils/ColorPallete";
import { main as mainTheme } from "../../../containers/Theme/themes";
import TopoBlob from "../../../components/TopoBlob/TopoBlob";
const { breakpoints } = mainTheme;
function CodeBlob({ w, h, label }) {
  let size, xy;
  if (w < breakpoints[1]) {
    console.log("mobile");
    size = p => w * 0.4 * p + w * 0.75;

    xy = [w * 0.5, 250];
  } else if (w < breakpoints[2]) {
    console.log("tablet up");
    size = p => w * 0.3 * p + w * 0.6;
    xy = [w - w * 0.28, w * 0.28];
  } else if (w < breakpoints[3]) {
    size = p => w * 0.2 * p + w * 0.5;
    xy = [w - w * 0.25, w * 0.25];
  } else if (w < breakpoints[4]) {
    size = p => w * 0.2 * p + w * 0.4;
    xy = [w - w * 0.25, w * 0.25];
  } else if (w < breakpoints[5]) {
    size = p => w * 0.2 * p + w * 0.4;
    xy = [w - w * 0.15, w * 0.15];
    size = p => w * 0.2 * p + w * 0.4;
    xy = [w - w * 0.15, w * 0.15];
  } else {
    size = p => w * 0.2 * p + w * 0.4;
    xy = [w - w * 0.15, w * 0.15];
  }
  return (
    <React.Fragment>
      <Heading
        fontSize={size(1) / 5}
        color={colors.get("color", "darkblue")}
        style={{
          position: "absolute",
          top: xy[1],
          left: xy[0] * 0.7
        }}
      >
        Code
      </Heading>
      <TopoBlob
        size={size}
        xyCoords={xy}
        layers={5}
        baseColor={colors.get("color", "darkblue")}
        complexity={(p, i, l) => Math.log10(p) + 1 * l * i}
        contrast={(p, i, l) => (i * i + 0.1) / (l * l + 2 * p)}
        seed={(p, i, l) =>
          Math.pow(Math.E, i * i + i + p * Math.PI * 652) * l * p * p * p
        }
      />
    </React.Fragment>
  );
}
export default CodeBlob;
