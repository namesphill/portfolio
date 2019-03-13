import React, { useState } from "react";
import { useSprings, animated } from "react-spring";
import AnimatedBackdrop from "../AnimatedBackdrop/AnimatedBackdrop";
const computeBreakpintsToRanges = breakpoints =>
  [-1, ...breakpoints, 12000]
    .map((el, i, arr) => (arr[i + 1] ? [el + 1, arr[i + 1]] : false))
    .filter(el => Boolean(el));
const getBreakpoint = (width, breakpoints) => {
  let index;
  computeBreakpintsToRanges(breakpoints).forEach(([start, end], i) => {
    if (width <= end && width >= start) index = i;
  });
  return index;
};
function BlobPositioner({ children, breakpoints = [], styles = [[{}]] }) {
  const [breakpoint, updateBreakpoint] = useState(
    getBreakpoint(window.innerWidth, breakpoints)
  );
  const [openBlob, updateOpenBlob] = useState(-1);
  window.onresize = function({ target: { innerWidth: width } }) {
    const currentBreakpoint = getBreakpoint(width, breakpoints);
    if (currentBreakpoint !== breakpoint) updateBreakpoint(currentBreakpoint);
  };
  const [springs, updateSprings, stop] = useSprings(styles.length, i => ({
    opacity: 1,
    ...styles[i][breakpoint]
  }));
  updateSprings(i => {
    const overriddenStyles =
      openBlob === i
        ? {
            width: window.innerWidth,
            top: 0,
            left: 0,
            zIndex: 100000000
          }
        : {
            opacity: 1,
            zIndex: 0
          };
    return { ...styles[i][breakpoint], ...overriddenStyles };
  });
  stop();

  return (
    <>
      <AnimatedBackdrop
        visible={openBlob !== -1}
        onClick={() => updateOpenBlob(-1)}
      />
      {children.map((el, i) => (
        <animated.div
          key={Math.random()}
          style={springs[i]}
          onClick={() => updateOpenBlob(i)}
        >
          {el}
        </animated.div>
      ))}
    </>
  );
}
export default BlobPositioner;
