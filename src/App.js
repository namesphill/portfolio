import React from "react";
import { Home } from "./views";
import Theme from "./containers/Theme/Theme";
import { Box, Flex } from "rebass";
import colors from "./utils/ColorPallete";
import Navbar from "./components/Navbar/Navbar";
import AnimatedBackdrop from "./components/AnimatedBackdrop/AnimatedBackdrop";
const globalStyles = `
* { 
  box-sizing: border-box;
}
body { 
  margin: 0; 
  font-family: 'Josefin Sans', Times, Helvetica Neue;
  background: black;
  color: ${colors.get("color", "gray")};
}
`;
const debugStyle = `*:not(path):not(g) {
  color:                    hsla(210, 100%, 100%, 0.9) !important;
  background:               hsla(210, 100%,  50%, 0.5) !important;
  outline:    solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
  box-shadow: none !important;
}`;
function App() {
  return (
    <>
      <style>{globalStyles}</style>
      <Theme>
        <div
          style={{
            position: "absolute",
            height: "auto",
            width: "100%",
            left: 0,
            top: 0
          }}
        >
          <Box width={[0.6, 360]}>
            <Navbar />
          </Box>
          <Home />
        </div>
      </Theme>
    </>
  );
}
export default App;
