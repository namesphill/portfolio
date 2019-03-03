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
import _ from "lodash";
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
  xyCoords = (percent, index, layers, size) => ["50%", 200],
  seed = (p, i, l) => "random",
  additionalStyles = (percent, index, layers, [x, y], size) => ({}),
  style = (percent, index, layers, [x, y], size) => ({
    position: "absolute",
    top: `calc(${y} - ${size * 0.5}px)`,
    left: `calc(${x} - ${size * 0.5}px)`
  }),
  layers = 10
}) {
  let blobConfigs = [];
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
    blobConfigs.push(generatedProps);
  }
  blobConfigs = blobConfigs.reverse();
  /*
    Makes sure last blob is rendered first and first atop
  */
  return (
    <React.Fragment>
      {blobConfigs.map(({ svg, g, path }, index) => {
        const pil = [guard(index / layers), index, layers];
        const styleArgs = [
          ...pil,
          val(xyCoords, ...pil, svg.width).map(el =>
            _.isNumber(el) ? el + "px" : el
          ),
          svg.width
        ];
        return (
          <div
            key={Math.random()}
            style={{
              ...val(style, ...styleArgs),
              ...val(additionalStyles, ...styleArgs)
            }}
          >
            <svg {...svg}>
              <g {...g}>
                <path {...path} />
              </g>
            </svg>
          </div>
        );
      })}
    </React.Fragment>
  );
}
export default TopoBlob;
