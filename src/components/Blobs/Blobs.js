import React from "react";
import TopoBlob from "../../../components/TopoBlob/TopoBlob";
import colors from "../../../utils/ColorPallete";
export function CodeBlob() {
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
export function WriteBlob() {
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
export function AmBlob() {
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
