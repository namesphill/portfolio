import React, { useState } from "react";
import { Box } from "rebass";
import WriteBlob from "./components/WriteBlob";
import AmBlob from "./components/AmBlob";
import CodeBlob from "./components/CodeBlob";
import Name from "./components/Name";
function Home() {
  const [w, updateW] = useState(window.innerWidth);
  const [h, updateH] = useState(window.innerHeight);
  const updateDimensions = () => {
    const { innerWidth: W, innerHeight: H } = window;
    updateH(H);
    updateW(W);
  };
  window.addEventListener("resize", updateDimensions);
  return (
    <Box width={1}>
      <Name />
      <WriteBlob w={w} h={h} />
      {console.log("rendered Write")}
      <AmBlob w={w} h={h} />
      {console.log("rendered Am")}
      <CodeBlob w={w} h={h} />
      {console.log("rendered Code")}
    </Box>
  );
}
export default Home;
