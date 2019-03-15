import React from "react";
import TopoBlob from "../../../components/TopoBlob/TopoBlob";
import colors from "../../../utils/ColorPallete";
function AmBlob() {
  return (
    <TopoBlob
      label="Write"
      labelColor={colors.get("color", "blue")}
      labelFontSizePx={60}
      layers={6}
      baseColor={colors.get("color", "darkblue")}
      complexity={(p, i, l) => (0.999 * p) / l}
      contrast={(p, i, l) => 0.994 * p * p}
      seed={p => p * Math.sinh(p * p + p)}
    />
  );
}
export default AmBlob;
