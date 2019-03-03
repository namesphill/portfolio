import React from "react";
import { Home } from "./views";
import Theme from "./containers/Theme/Theme";
import { Box } from "rebass";
import colors from "./utils/ColorPallete";
const globalStyles = `
  * { 
    box-sizing: border-box; 
  }
  body { 
    margin: 0; 
    font-family: 'Josefin Sans', Times, Helvetica Neue;
    background: ${colors.get("color", "darknight")};
    color: ${colors.get("color", "gray")}
  }
`;
function App() {
  return (
    <React.Fragment>
      <Theme theme="main">
        <style>{globalStyles}</style>
        <Box className="mecho">
          <Home />
        </Box>
      </Theme>
    </React.Fragment>
  );
}
export default App;
