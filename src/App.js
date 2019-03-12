import React from "react";
import { Home } from "./views";
import Theme from "./containers/Theme/Theme";
import { Box, Flex } from "rebass";
import colors from "./utils/ColorPallete";
import Navbar from "./components/Navbar/Navbar";
const globalStyles = `
* { 
  box-sizing: border-box;
}
body { 
  margin: 0; 
  font-family: 'Josefin Sans', Times, Helvetica Neue;
  background: ${colors.get("color", "darknight")};
  color: ${colors.get("color", "gray")};
}
`;
function App() {
  return (
    <React.Fragment>
      <Theme theme="main">
        <style>{globalStyles}</style>
        <Flex flexWrap="wrap" justifyContent="start">
          <Box width={[0.6, 360]} style={{ placeSelf: "flex-start" }}>
            <Navbar />
          </Box>
          <Home />
        </Flex>
      </Theme>
    </React.Fragment>
  );
}
export default App;
