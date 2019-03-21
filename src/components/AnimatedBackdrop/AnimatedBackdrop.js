import React from "react";
import { useSpring, animated } from "react-spring";
function AnimatedBackdrop({ visible, children, ...rest }) {
  const overriddenStyles = visible
    ? {
        opacity: 0.9999,
        zIndex: 10000000,
        backgroundColor: "pink",
        transform: "rotate(360deg)",
        display: "initial"
      }
    : {
        opacity: 0,
        zIndex: -1000,
        backgroundColor: "pink",
        transform: "none",
        display: "none"
      };

  const allScreenStyles = {
    position: "fixed",
    width: "100%",
    height: "100vh",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backfaceVisibility: "hidden"
  };
  const [style] = useSpring(() => ({
    ...allScreenStyles,
    ...overriddenStyles
  }));
  return (
    <>
      <animated.div style={style} {...rest} />
      <div style={{ ...allScreenStyles, zIndex: 100000000 }} className="mecho">
        {children}
      </div>
    </>
  );
}
export default AnimatedBackdrop;
