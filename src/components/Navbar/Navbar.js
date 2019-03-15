import React from "react";
import { config } from "react-spring";
import colors from "../../utils/ColorPallete";
import MultiPathInterpolator from "../MultiPathInterpolator/MultiPathInterpolator";
import * as felipe from "./Paths/felipe";
import * as phill from "./Paths/phill";
import { Link } from "rebass";
const felipeChars = Object.values(felipe);
const phillChars = Object.values(phill);
const pathGroups = felipeChars.map((char, i) => [phillChars[i], char]);
function Navbar() {
  return (
    <>
      <Link
        href="/contact"
        color={colors.get("color", "darkpink")}
        fontSize={["1.6em"]}
        style={{
          position: "absolute",
          top: 5,
          right: 10,
          textDecoration: "none"
        }}
      >
        Contact
      </Link>
      <MultiPathInterpolator
        gProps={{
          transform:
            "translate(0.000000,1600.000000) scale(0.100000,-0.100000)",
          fill: colors.get("color", "gray"),
          stroke: "none"
        }}
        svgProps={{
          version: "1.0",
          width: "100%",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 2740.000000 1100.000000",
          preserveAspectRatio: "xMidYMid meet",
          style: {
            // position: "fixed",
            // top: 0,
            // left: 0
          }
        }}
        pathGroups={pathGroups}
        interpolateConfig={{ maxSegmentLength: 100 }}
        springProps={{ delay: 2500, config: config.slow }}
      />
    </>
  );
}
export default Navbar;
