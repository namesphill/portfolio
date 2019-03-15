import React from "react";
import { useSpring, animated } from "react-spring";
function BlobWrapper({
  state,
  styles,
  Blob,
  onClick,
  defaultState,
  breakpoint
}) {
  console.log({ state, styles, Blob, onClick, defaultState, breakpoint });
  const stylesAtDefaultState = styles[defaultState][breakpoint]
    ? styles[defaultState][breakpoint]
    : styles[defaultState][styles[defaultState].length - 1];
  const stylesAtState = styles[state][breakpoint]
    ? styles[state][breakpoint]
    : styles[state][styles[state].length - 1];
  const [spring, updateSpring, stop] = useSpring(() => stylesAtDefaultState);
  updateSpring({
    ...stylesAtDefaultState,
    ...stylesAtState
  });
  stop();
  return (
    <>
      <animated.div style={spring} onClick={onClick}>
        <Blob />
      </animated.div>
    </>
  );
}
export default BlobWrapper;
