import React, { useState } from "react";
import { useSprings, animated } from "react-spring";
import AnimatedBackdrop from "../AnimatedBackdrop/AnimatedBackdrop";
function BlobPositioner({ children, styles, layoutProps }) {
  const { breakpoint, width, height } = layoutProps;
  const [openBlob, updateOpenBlob] = useState(-1);
  console.log(breakpoint, width);
  const centeredPaddings = blobWidth => ({
    paddingLeft: (width - blobWidth) / 2,
    paddingRight: (width - blobWidth) / 2,
    paddingTop: (height - blobWidth) / 2,
    paddingBottom: (height - blobWidth) / 2
  });
  const fullPosition = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "block"
  };
  const normalStyles = {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    position: "absolute",
    zIndex: 1,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,0)",
    display: "block"
  };
  const [springs, updateSprings, stop] = useSprings(styles.length, i => ({
    ...(styles[i][breakpoint]
      ? styles[i][breakpoint]
      : styles[i][styles[i].length - 1]),
    ...normalStyles
  }));
  updateSprings(i => {
    const blobWidth = width <= height ? width : height;
    const overriddenStyles =
      openBlob === i
        ? {
            ...fullPosition,
            ...centeredPaddings(blobWidth),
            width,
            height,
            zIndex: 100000,
            opacity: 0.999,
            backgroundColor: "rgba(0,0,0,0.9)"
          }
        : {
            ...normalStyles,
            zIndex: -100
          };
    return {
      ...(styles[i][breakpoint]
        ? styles[i][breakpoint]
        : styles[i][styles[i].length - 1]),
      ...overriddenStyles
    };
  });
  stop();

  return (
    <>
      {children.map((el, i) => (
        <animated.div
          key={Math.random()}
          style={springs[i]}
          onClick={() => updateOpenBlob(i === openBlob ? -1 : i)}
        >
          {el}
        </animated.div>
      ))}
    </>
  );
}
export default BlobPositioner;
