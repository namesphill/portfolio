import React, { useState } from "react";
import { CodeBlob, WriteBlob, AmBlob } from "../components/Blobs/Blobs";
import TransitionAnimator from "../components/TransitionAnimator/TransitionAnimator";
import { open, hidden, code, write, am } from "../components/Blobs/Styles";
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
  return (
    <>
      <TransitionAnimator
        state={blobStates["code"]}
        onClick={() =>
          blobStates["code"] === "open" ? closeBlobs() : openBlob("code")
        }
        defaultState="closed"
        breakpoint={layoutProps.breakpoint}
        component={CodeBlob}
        styles={{
          closed: code(width),
          open: open(width, height),
          hidden: hidden(width)
        }}
      />
      <TransitionAnimator
        state={blobStates["write"]}
        onClick={() =>
          blobStates["write"] === "open" ? closeBlobs() : openBlob("write")
        }
        defaultState="closed"
        breakpoint={layoutProps.breakpoint}
        component={WriteBlob}
        styles={{
          closed: write(width),
          open: open(width, height),
          hidden: hidden(width)
        }}
      />
      <TransitionAnimator
        state={blobStates["am"]}
        onClick={() =>
          blobStates["am"] === "open" ? closeBlobs() : openBlob("am")
        }
        defaultState="closed"
        breakpoint={layoutProps.breakpoint}
        component={AmBlob}
        styles={{
          closed: am(width),
          open: open(width, height),
          hidden: hidden(width)
        }}
      />
    </>
  );
}
export default Home;
