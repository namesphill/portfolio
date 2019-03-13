import React from "react";
import { useSpring, animated } from "react-spring";
function AnimatedBackdrop({ visible, children, ...rest }) {
  const allScreenProps = {
    postion: "fixed",
    width: "100%",
    height: "100vh",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  };
  const [style, updateStyle, stop] = useSpring(() => ({
    opacity: 0,
    zIndex: -100,
    backgroundColor: "pink",
    ...allScreenProps
  }));
  updateStyle({
    opacity: visible ? 1 : 0,
    zIndex: visible ? 1000000 : -100,
    backgroundColor: visible ? "blue" : "pink",
    ...allScreenProps
  });
  stop();
  return (
    <>
      <animated.div style={style} {...rest} />
      <div style={{ ...allScreenProps, zIndex: 100000000 }} className="mecho">
        {children}
      </div>
    </>
  );
}
export default AnimatedBackdrop;
