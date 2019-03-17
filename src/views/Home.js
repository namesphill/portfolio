import React, { useState } from "react";
import { Button } from "rebass";
import { CodeBlob, WriteBlob, AmBlob } from "../components/Blobs/Blobs";
import TransitionAnimator from "../components/TransitionAnimator/TransitionAnimator";
import DescriptionView from "../components/DescriptionView/DescriptionView";
import descriptions from "../components/Blobs/descriptions";
import { open, hidden, code, write, am } from "../components/Blobs/styles";
const blobComponents = {
  code: <CodeBlob />,
  write: <WriteBlob />,
  am: <AmBlob />
};
const blobStyles = {
  code,
  write,
  am
};
function Home({ layoutProps }) {
  const { width, height } = layoutProps;
  const [blobStates, updateBlobStates] = useState({
    code: "closed",
    am: "closed",
    write: "closed"
  });
  const openBlob = blob => {
    const allhidden = {
      code: "hidden",
      am: "hidden",
      write: "hidden"
    };
    allhidden[blob] = "open";
    updateBlobStates(allhidden);
  };
  const closeBlobs = () => {
    updateBlobStates({
      code: "closed",
      am: "closed",
      write: "closed"
    });
  };
  const currentlyOpenBlob = Object.entries(blobStates).filter(
    ([k, v]) => v === "open"
  )[0]
    ? Object.entries(blobStates).filter(([k, v]) => v === "open")[0][0]
    : "none";
  return (
    <>
      {["code", "write", "am"].map(blob => (
        <>
          <TransitionAnimator
            state={currentlyOpenBlob !== blob ? "invisible" : "visible"}
            defaultState="invisible"
            breakpoint={layoutProps.breakpoint}
            component={
              <DescriptionView
                openBlob={currentlyOpenBlob}
                text={descriptions[blob]}
                layoutProps={layoutProps}
                onGoBack={closeBlobs}
              />
            }
            styles={{
              visible: [{ right: 0, position: "absolute", width, top: 0 }],
              invisible: [{ right: -500, position: "absolute", width, top: 0 }]
            }}
          />
          <TransitionAnimator
            state={blobStates[blob]}
            onClick={() =>
              blobStates[blob] === "open" ? closeBlobs() : openBlob(blob)
            }
            defaultState="closed"
            breakpoint={layoutProps.breakpoint}
            component={blobComponents[blob]}
            styles={{
              closed: blobStyles[blob](width),
              open: open(width, height),
              hidden: hidden(width)
            }}
          />
        </>
      ))}
      <TransitionAnimator
        state={currentlyOpenBlob === "none" ? "invisible" : "visible"}
        defaultState="invisible"
        breakpoint={layoutProps.breakpoint}
        component={
          <Button variant="outlineLeft" onClick={closeBlobs}>
            &#8592;
          </Button>
        }
        styles={{
          visible: [{ left: 20, position: "absolute", top: 200 }],
          invisible: [{ left: -200, position: "absolute", top: 200 }]
        }}
      />
    </>
  );
}
export default Home;
