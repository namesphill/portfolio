import React from "react";
import createBlobWithConfig from "blobs";
/* 
  Creates an stringified html that computes to a blob 
  with a given configuration
*/
import parser from "html-parse-stringify";
/* 
  Parses a string of HTML into a component tree
*/
import rgb from "../../utils/colorToRgbaArray";
/* 
  Utility function that takes a hex or rgb or rgba string
  and converts it to a rgba arrray
*/
import val from "../../utils/resolveValue";
/* 
  Utility function that takes as a first argument
  something that might or not be a function
  if it is, it resolves it passing it the rest of the args
  if not, it will simply reuturn the value for which it stands
*/
import guard from "../../utils/guardNumberInRange";
/*
  Makes sure number is in range
*/
import { Svg, G, Path, Text } from "react-primitives-svg";
/*
  Make code platform agnostic
*/
import { Spring, animated } from "react-spring/renderprops";
import _ from "lodash";
const AnimatedPath = animated(Path);
function TopoBlob({
  /*
    Most props can be functions to enable complex 
    configurations for each blob layer generated
    Percent refers to a (0,1) number that marks how close 
    the the last layer any particular layer is
    It is non-inclusive for 0 or 1 due to the createBlobWithConfig
    requirements
  */
  size = (percent, index, layers) => 250 + 250 * percent,
  color = (percent, index, layers, bColor) => [...bColor, 1.8 / layers],
  contrast = (percent, index, layers) => percent,
  complexity = (percent, index, layers) => percent,
  baseColor = (percent, index, layers) => "white",
  seed = (p, i, l) => "random",
  layers = 10,
  label = "",
  labelFontSizePx = 12,
  labelXOffset = 0,
  labelYOffset = 0,
  labelColor = "red",
  scaleFactor = 1.3,
  style,
  ...rest
}) {
  let blobElemets = [];
  let l = layers;
  for (let i = 0; i < layers; i++) {
    const p = guard(i / l);
    const pil = [p, i, l];
    const bc = rgb(val(baseColor, ...pil)).slice(0, 3);
    let fcolor = val(color, ...pil, bc);
    if (_.isArray(fcolor)) fcolor = "rgba(" + fcolor.join(",") + ")";
    /*
      Common props declaration and color computation
    */
    const blobConfig = {
      color: fcolor,
      size: val(size, ...pil),
      contrast: guard(val(contrast, ...pil)),
      complexity: guard(val(complexity, ...pil)),
      seed: val(seed)
    };
    /*
      Create config to create blobs
    */
    const parsedHTML = parser.parse(createBlobWithConfig(blobConfig))[0];
    const generatedProps = {
      svg: parsedHTML.attrs,
      g: parsedHTML.children[1].attrs,
      path: parsedHTML.children[1].children[1].attrs
    };
    /*
      Parse generated HTML string into props
    */
    generatedProps.path.strokeWidth = generatedProps.path["stroke-width"];
    delete generatedProps.path["stroke-width"];
    /*
      eliminate 'stroke-width' prop to avoid error from react
    */
    blobElemets.push(generatedProps);
  }
  blobElemets = blobElemets.reverse();
  /*
    Makes sure last (largest) blob is rendered first and 
    that the first (smallest) goes atop
  */
  const fullWidth = blobElemets[0].svg.width;
  return (
    <Svg
      viewBox={blobElemets[0].svg.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style={{
        display: "inline-block",
        ...style
      }}
      {...rest}
    >
      <G transform={`scale(${scaleFactor}, ${scaleFactor})`}>
        {blobElemets.map(({ svg, g, path }, i) => {
          const offset = (fullWidth - svg.width * scaleFactor * 0.99) / 2;
          return (
            <Path
              {...path}
              {...g}
              key={Math.random()}
              style={{
                transform: `translate(${offset}px, ${offset + 10}px)`
              }}
            />
          );
        })}
        <Text
          x={(fullWidth - label.length * labelFontSizePx) / 2}
          y={(fullWidth - label.length) / 2}
          dx={labelXOffset}
          dy={labelYOffset}
          style={{ zIndex: 10, fill: labelColor, fontSize: labelFontSizePx }}
        >
          {label}
        </Text>
      </G>
    </Svg>
  );
}
export default TopoBlob;
