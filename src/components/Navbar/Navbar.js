import React from "react";
import { config } from "react-spring";
import colors from "../../utils/ColorPallete";
import MultiPathInterpolator from "../MultiPathInterpolator/MultiPathInterpolator";
import * as felipe from "./Paths/felipe";
import * as phill from "./Paths/phill";
import { Text } from "rebass";
import { Link } from "react-router-dom";
const felipeChars = Object.values(felipe);
const phillChars = Object.values(phill);
const pathGroups = felipeChars.map((char, i) => [phillChars[i], char]);
function Navbar() {
  return (
    <>
      <Link to="/contact">
        <Text
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
        </Text>
      </Link>
      <Link to="/">
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
            preserveAspectRatio: "xMidYMid meet"
          }}
          pathGroups={pathGroups}
          interpolateConfig={{ maxSegmentLength: 100 }}
          springProps={{ delay: 2500, config: config.slow }}
        />
      </Link>
    </>
  );
}
export default Navbar;
