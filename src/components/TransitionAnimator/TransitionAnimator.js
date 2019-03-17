import React from "react";
import { useSpring, animated, config } from "react-spring";
/// Recieves an object with responsive styles
/// where each key stands for an state of the component
/// upon state change the component will animate its transition
/// taken that theres a default state that is predicatble
function TransitionAnimator({
  state,
  styles,
  component,
  onClick,
  defaultState,
  breakpoint,
  springConfig = "slow"
}) {
  console.log({ state, styles, Blob, onClick, defaultState, breakpoint });
  const stylesAtDefaultState = styles[defaultState][breakpoint]
    ? styles[defaultState][breakpoint]
    : styles[defaultState][styles[defaultState].length - 1];
  const stylesAtState = styles[state][breakpoint]
    ? styles[state][breakpoint]
    : styles[state][styles[state].length - 1];
  const spring = useSpring({
    to: stylesAtState,
    from: stylesAtDefaultState,
    native: true,
    config: config[springConfig]
  });
  return (
    <>
      <animated.div style={spring} onClick={onClick}>
        {component}
      </animated.div>
    </>
  );
}
export default React.memo(TransitionAnimator);
