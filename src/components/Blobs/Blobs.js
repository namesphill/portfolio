import React from "react";
import TopoBlob from "../TopoBlob/TopoBlob";
import colors from "../../utils/ColorPallete";
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
      complexity={(p, i, l) => 0.8 * Math.sin(new Date().getDay())}
      contrast={(p, i, l) => 0.8 * Math.cos(new Date().getDay())}
      seed={(p, i, l) => new Date().getDay()}
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
      complexity={(p, i, l) => 0.95 * new Date().getHours()}
      contrast={(p, i, l) => 0.87 * p}
      seed={(p, i, l) => Math.sinh(Math.PI)}
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
