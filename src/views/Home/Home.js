import React from "react";
import TopoBlob from "../../components/TopoBlob/TopoBlob";
import BlobPositioner from "../../components/BlobPositioner/BlobPositioner";
import colors from "../../utils/ColorPallete";
function Home({ layoutProps }) {
  const { width, height, breakpoint } = layoutProps;
  const styles = [
    [
      /*
       *
       * PURPLE!!!!!!
       *
       */
      {
        position: "absolute",
        width: width * 0.9,
        top: width * 0.2,
        left: width * 0.05,
        right: width * 0.05
      },
      {
        position: "absolute",
        width: 540,
        top: 120,
        left: width - 540,
        right: 0
      },
      {
        position: "absolute",
        width: 540,
        top: 0,
        left: 200,
        right: width - 740
      },
      {
        position: "absolute",
        width: 540,
        top: -20,
        left: 300,
        rigth: width - 840
      }
    ],
    [
      /*
       *
       * BLUE!!!!!!
       *
       */
      {
        position: "absolute",
        width: width * 0.9,
        top: width,
        left: width * 0.05,
        right: width * 0.05
      },
      {
        position: "absolute",
        width: 540,
        top: 550,
        left: 0,
        right: width - 540
      },
      {
        position: "absolute",
        width: 540,
        top: 350,
        left: 0,
        right: width - 540
      },
      {
        position: "absolute",
        width: 540,
        top: 300,
        left: 0,
        right: width - 540
      }
    ],
    [
      /*
       *
       * GREEN!!!!!!
       *
       */
      {
        position: "absolute",
        width: width * 0.9,
        top: width * 1.8,
        left: width * 0.05,
        right: width * 0.05
      },
      {
        position: "absolute",
        width: 540,
        top: 940,
        left: width - 540,
        right: 0
      },
      {
        position: "absolute",
        width: 540,
        top: 750,
        left: 200,
        right: width - 540
      },
      {
        position: "absolute",
        width: 540,
        top: 500,
        left: width - 540,
        right: 0
      },
      {
        position: "absolute",
        width: 540,
        top: 500,
        left: width - 540,
        right: 0
      },
      {
        position: "absolute",
        width: 540,
        top: 500,
        left: 400,
        right: width - 140
      }
    ]
  ];
  return (
    <>
      <BlobPositioner layoutProps={layoutProps} styles={styles}>
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
