import React from "react";
import { Svg, G, Path, Text } from "react-primitives-svg";
import BlobBuilder from "./blobBuilder";
function TopoBlob({
  blobBuilderProps,
  labelProps: {
    text = "",
    fontSizePx = 12,
    xOffset = 0,
    yOffset = 0,
    color = "red"
  },
  ...rest
}) {
  const { pathProps, svgProps, fullWidth, gProps } = BlobBuilder(
    blobBuilderProps
  );
  return (
    <Svg {...svgProps} {...rest}>
      <G {...gProps}>
        {pathProps.map((p, i) => (
          <Path {...p} />
        ))}
        <Text
          x={(fullWidth - text.length * fontSizePx) / 2}
          y={(fullWidth - text.length) / 2}
          dx={xOffset}
          dy={yOffset}
          style={{ zIndex: 10, fill: color, fontSize: fontSizePx }}
        >
          {text}
        </Text>
      </G>
    </Svg>
  );
}
export default React.memo(TopoBlob);
