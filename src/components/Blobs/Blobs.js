import React from "react";
import TopoBlob from "../TopoBlob/TopoBlob";
import colors from "../../utils/ColorPallete";
function codeBlob() {
  return (
    <TopoBlob
      labelProps={{
        text: "Code",
        color: colors.get("color", "purple"),
        xOffset: -60,
        fontSizePx: 60
      }}
      blobBuilderProps={{
        baseColor: colors.get("color", "darkpurple"),
        complexity: (p, i, l) => 0.8 * Math.sin(i) + 0.1,
        contrast: (p, i, l) => 0.8 * Math.cos(i) + 0.1,
        seed: (p, i, l) => Date.now() * 1000 * p * p * p,
        layers: 8
      }}
    />
  );
}
export const CodeBlob = React.memo(codeBlob);
function writeBlob() {
  return (
    <TopoBlob
      labelProps={{
        text: "Write",
        color: colors.get("color", "blue"),
        fontSizePx: 60
      }}
      blobBuilderProps={{
        baseColor: colors.get("color", "darkblue"),
        complexity: (p, i, l) => (0.999 * p) / l,
        contrast: (p, i, l) => 0.994 * p * p,
        seed: p => p * Math.sinh(p * p + p),
        layers: 6
      }}
    />
  );
}
export const WriteBlob = React.memo(writeBlob);
function amBlob() {
  return (
    <TopoBlob
      labelProps={{
        text: "Am",
        color: colors.get("color", "teal"),
        fontSizePx: 60
      }}
      blobBuilderProps={{
        baseColor: colors.get("color", "darkteal"),
        complexity: 0.999,
        contrast: 0.3,
        seed: "FelipeAcosta",
        layers: 8
      }}
    />
  );
}
export const AmBlob = React.memo(amBlob);
