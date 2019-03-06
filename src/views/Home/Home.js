import React from "react";
import { Box } from "rebass";
import TopoBlob from "../../components/TopoBlob/TopoBlob";
import colors from "../../utils/ColorPallete";
function Home() {
  return (
    <React.Fragment>
      <Box width={[1, 0.65, 0.54, 0.45, 0.45]} mt={[-1, -2, -1, -1, -1, -6]}>
        <TopoBlob
          layers={8}
          label="Code"
          labelColor={colors.get("color", "purple")}
          labelXOffset={-80}
          labelYOffset={-60}
          labelFontSizePx={60}
          baseColor={colors.get("color", "darkpurple")}
          complexity={(p, i, l) => 0.8 * Math.sin(i) + 0.1}
          contrast={(p, i, l) => 0.8 * Math.cos(i) + 0.1}
          seed={(p, i, l) => Date.now() * 1000 * Math.random() * p * p * p}
        />
      </Box>
      <Box width={[0, 0, 0, 0.48, 0.48]} />
      <Box
        width={[1, 0.63, 0.52, 0.43, 0.45]}
        ml="auto"
        mt={[-4, -7, -5, -230, -230, -480]}
        mr={[0, -2, 0, -3]}
      >
        <TopoBlob
          label="Write"
          labelColor={colors.get("color", "blue")}
          labelFontSizePx={60}
          layers={5}
          baseColor={colors.get("color", "darkblue")}
          complexity={(p, i, l) => Math.log10(p) + 1 * l * i}
          contrast={(p, i, l) => (i * i + 0.1) / (l * l + 2 * p)}
          seed={p => p * Math.sinh(p * p + p)}
        />
      </Box>
      <Box
        width={[1, 0.75, 0.65, 0.52, 0.45]}
        mt={[-4, -6, -230, -350, "-48vw", "-52vw"]}
        ml={[0, 0, 2, 4]}
        mr={[0, 0, 0]}
      >
        <TopoBlob
          label="Am"
          labelColor={colors.get("color", "teal")}
          labelFontSizePx={60}
          layers={8}
          baseColor={colors.get("colorGroup", "teal").dark}
          complexity={0.9}
          contrast={0.9}
          seed={p => p * p * p * 298}
        />
      </Box>
    </React.Fragment>
  );
}
export default Home;
