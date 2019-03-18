import React from "react";
import { Button, Text } from "rebass";
import { text as textStyles, button as buttonStyles } from "./styles";
import { Link } from "react-router-dom";
const resolveStyle = (st, b, w, h) =>
  st(w, h)[b] ? st(w, h)[b] : st(w, h)[st(w, h).length - 1];
function DescriptionView({ layoutProps, openBlob, text }) {
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
      <Text
        lineHeight={1.5}
        style={{ ...extraTextStyles, ...textStyle, zIndex: 10000 }}
      >
        {text}
      </Text>
      <Link to={"and-i/" + openBlob}>
        <Button
          style={{ ...buttonStyle, zIndex: 10000 }}
          variant="primaryForward"
        >
          Learn More +
        </Button>
      </Link>
    </>
  );
}
export default React.memo(DescriptionView);
