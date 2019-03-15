import React from "react";
import TopoBlob from "../../../components/TopoBlob/TopoBlob";
import colors from "../../../utils/ColorPallete";
function AmBlob() {
  return (
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
    />
  );
}
export default AmBlob;
