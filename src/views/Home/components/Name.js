import React from "react";
import { config } from "react-spring";
import colors from "../../../utils/ColorPallete";
import MultiPathInterpolator from "../../../components/MultiPathInterpolator/MultiPathInterpolator";
import * as felipe from "../Paths/felipe";
import * as phill from "../Paths/phill";
const felipeChars = Object.values(felipe);
const phillChars = Object.values(phill);
const pathGroups = felipeChars.map((char, i) => [phillChars[i], char]);
function Name({ width = "40%" }) {
  return (
    <MultiPathInterpolator
      gProps={{
        transform: "translate(0.000000,1600.000000) scale(0.100000,-0.100000)",
        fill: colors.get("color", "gray"),
        stroke: "none"
      }}
      svgProps={{
        version: "1.0",
        xmlns: "http://www.w3.org/2000/svg",
        width,
        viewBox: "0 0 2740.000000 2100.000000",
        preserveAspectRatio: "xMidYMid meet"
      }}
      pathGroups={pathGroups}
      interpolateConfig={{ maxSegmentLength: 100 }}
      springProps={{ delay: 2500, config: config.slow }}
    />
  );
}
export default Name;
