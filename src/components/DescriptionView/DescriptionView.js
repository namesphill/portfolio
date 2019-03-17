import React from "react";
import { Button, Text } from "rebass";
import { text as textStyles, button as buttonStyles } from "./styles";
const resolveStyle = (st, b, w, h) =>
  st(w, h)[b] ? st(w, h)[b] : st(w, h)[st(w, h).length - 1];
function description({ layoutProps, openBlob, text }) {
  const { breakpoint, width, height } = layoutProps;
  const textStyle = resolveStyle(textStyles, breakpoint, width, height);
  const buttonStyle = resolveStyle(buttonStyles, breakpoint, width, height);
  const extraTextStyles = {
    minHeight: 200,
    overflowY: "scroll",
    padding: 12,
    boxShadow: "inset 0 0 180px 0 rgba(255,255,255,0.2)",
    borderRadius: 16
  };
  return (
    <>
      <Text lineHeight={1.5} style={{ ...extraTextStyles, ...textStyle }}>
        {text}
      </Text>
      <Button
        style={{ ...buttonStyle }}
        variant="primaryRight"
        onClick={() => window.location.replace("and-i/" + openBlob)}
      >
        Learn More +
      </Button>
    </>
  );
}
export default React.memo(description);
