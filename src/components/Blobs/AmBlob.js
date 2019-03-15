import React from "react";
import TopoBlob from "../../../components/TopoBlob/TopoBlob";
import colors from "../../../utils/ColorPallete";
function AmBlob() {
  return (
    <TopoBlob
      label="Am"
      labelColor={colors.get("color", "teal")}
      labelFontSizePx={60}
      layers={8}
      baseColor={colors.get("colorGroup", "teal").dark}
      complexity={0.999}
      contrast={0.3}
      seed="FelipeAcosta"
    />
  );
}
export default AmBlob;
