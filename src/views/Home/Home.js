import React from "react";
import TopoBlob from "../../components/TopoBlob/TopoBlob";
import BlobPositioner from "../../components/BlobPositioner/BlobPositioner";
import colors from "../../utils/ColorPallete";
function Home() {
  const styles = [
    [
      {
        position: "absolute",
        width: window.innerWidth * 0.9,
        top: window.innerWidth * 0.2,
        left: window.innerWidth * 0.05
      },
      {
        position: "absolute",
        width: 540,
        top: 120,
        left: window.innerWidth - 540
      },
      {
        position: "absolute",
        width: 540,
        top: 0,
        left: 200
      },
      {
        position: "absolute",
        width: 540,
        top: -20,
        left: 330
      }
    ],
    [
      {
        position: "absolute",
        width: window.innerWidth * 0.9,
        top: window.innerWidth,
        left: window.innerWidth * 0.05
      },
      {
        position: "absolute",
        width: 540,
        top: 550,
        left: 0
      },
      {
        position: "absolute",
        width: 540,
        top: 350,
        left: 0
      },
      {
        position: "absolute",
        width: 540,
        top: 300,
        left: 0
      }
    ],
    [
      {
        position: "absolute",
        width: window.innerWidth * 0.9,
        top: window.innerWidth * 1.8,
        left: window.innerWidth * 0.05
      },
      {
        position: "absolute",
        width: 540,
        top: 940,
        left: window.innerWidth - 540
      },
      {
        position: "absolute",
        width: 540,
        top: 750,
        left: 200
      },
      {
        position: "absolute",
        width: 540,
        top: 500,
        left: 400
      }
    ]
  ];
  return (
    <>
      <BlobPositioner breakpoints={[600, 740, 900]} styles={styles}>
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
        <TopoBlob
          label="Write"
          labelColor={colors.get("color", "blue")}
          labelFontSizePx={60}
          layers={6}
          baseColor={colors.get("color", "darkblue")}
          complexity={(p, i, l) => (0.999 * p) / l}
          contrast={(p, i, l) => 0.994 * p * p}
          seed={p => p * Math.sinh(p * p + p)}
        />
        <TopoBlob
          label="Am"
          labelColor={colors.get("color", "teal")}
          labelFontSizePx={60}
          layers={8}
          baseColor={colors.get("colorGroup", "teal").dark}
          complexity={0.999}
          contrast={0.3}
          seed="FelipeAcosta"
        />
      </BlobPositioner>
    </>
  );
}
export default Home;
/*
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
          onClick={() => alert("clicked")}
        />
        <TopoBlob
          label="Write"
          labelColor={colors.get("color", "blue")}
          labelFontSizePx={60}
          layers={6}
          baseColor={colors.get("color", "darkblue")}
          complexity={(p, i, l) => (0.999 * p) / l}
          contrast={(p, i, l) => 0.994 * p * p}
          seed={p => p * Math.sinh(p * p + p)}
        />
        <TopoBlob
          label="Am"
          labelColor={colors.get("color", "teal")}
          labelFontSizePx={60}
          layers={8}
          baseColor={colors.get("colorGroup", "teal").dark}
          complexity={0.999}
          contrast={0.3}
          seed="FelipeAcosta"
        />
*/
