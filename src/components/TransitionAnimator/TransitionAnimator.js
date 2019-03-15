import React from "react";
import { useSpring, animated } from "react-spring";
/// Recieves an object with responsive styles
/// where each key stands for an state of the component
/// upon state change the component will animate its transition
/// taken that theres a default state that is predicatble
function BlobWrapper({
  state,
  styles,
  component: Component,
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
        <Component />
      </animated.div>
    </>
  );
}
export default BlobWrapper;
