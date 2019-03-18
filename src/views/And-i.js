import React from "react";
function AndI(props) {
  return <div>{props.match.params.verb}</div>;
}
export default AndI;
