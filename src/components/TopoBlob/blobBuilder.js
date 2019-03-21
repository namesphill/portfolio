/* 
  Creates an stringified html that computes to a blob 
  with a given configuration
*/
import createBlobWithConfig from "blobs";
/* 
  Parses a string of HTML into a component tree
*/
import parser from "html-parse-stringify";
import rgb from "../../utils/colorToRgbaArray";
/* 
  Utility function that takes as a first argument
  something that might or not be a function
  if it is, it resolves it passing it the rest of the args
  if not, it will simply reuturn the value for which it stands
*/
import val from "../../utils/resolveValue";
/* 
  Utility function that takes a hex or rgb or rgba string
  and converts it to a rgba arrray
*/
import guard from "../../utils/guardNumberInRange";
/*
  Makes sure number is in range
*/
import _ from "lodash";
function blobBuilder({
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
  offset = (defaultOffeset, index, axis) => defaultOffeset,
  seed = (p, i, l) => "random",
  scaleFactor = 1.2,
  layers = 10,
  style
}) {
  let blobElemets = [];
  let l = layers;
  for (let i = 0; i < layers; i++) {
    // Common props declaration and color computation
    const p = guard(i / l);
    const pil = [p, i, l];
    const bc = rgb(val(baseColor, ...pil)).slice(0, 3);
    let fcolor = val(color, ...pil, bc);
    if (_.isArray(fcolor)) fcolor = "rgba(" + fcolor.join(",") + ")";
    //Create config to create blobs
    const blobConfig = {
      color: fcolor,
      size: val(size, ...pil),
      contrast: guard(val(contrast, ...pil)),
      complexity: guard(val(complexity, ...pil)),
      seed: val(seed)
    };
    //Parse generated HTML string into props
    const parsedHTML = parser.parse(createBlobWithConfig(blobConfig))[0];
    const generatedProps = {
      svg: parsedHTML.attrs,
      g: parsedHTML.children[1].attrs,
      path: parsedHTML.children[1].children[1].attrs
    };
    //eliminate 'stroke-width' prop to avoid error from react
    generatedProps.path.strokeWidth = generatedProps.path["stroke-width"];
    delete generatedProps.path["stroke-width"];

    blobElemets.push(generatedProps);
  }
  //Makes sure last (largest) blob is rendered first and
  //that the first (smallest) goes atop
  blobElemets = blobElemets.reverse();
  const fullWidth = blobElemets[0].svg.width;
  return {
    fullWidth,
    svgProps: {
      viewBox: blobElemets[0].svg.viewBox,
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid meet",
      style
    },
    gProps: {
      transform: `scale(${scaleFactor}, ${scaleFactor})`
    },
    pathProps: blobElemets.map(({ svg, g, path }, index) => {
      const defaultOffeset = (fullWidth - svg.width * scaleFactor * 0.99) / 2;
      return {
        ...path,
        ...g,
        key: Math.random(),
        style: {
          transform: `translate(${offset(
            defaultOffeset,
            index,
            "x"
          )}px, ${offset(defaultOffeset, index, "y") + 10}px)`
        }
      };
    })
  };
}
export default blobBuilder;
