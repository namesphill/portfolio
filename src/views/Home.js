import React, { useState } from "react";
import { CodeBlob, WriteBlob, AmBlob } from "../components/Blobs/Blobs";
import BlobWrapper from "../components/Blobs/BlobWrapper";
import {
  open,
  hidden,
  code,
  write,
  am
} from "../components/Blobs/GeneralStyles";
function Home({ layoutProps }) {
  const { width } = layoutProps;
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
  const closeBlob = blob => {
    updateBlobStates({
      code: "closed",
      am: "closed",
      write: "closed"
    });
  };
  return (
    <>
      <BlobWrapper
        state={blobStates["code"]}
        onClick={() =>
          blobStates["code"] === "open" ? closeBlob("code") : openBlob("code")
        }
        defaultState="closed"
        breakpoint={layoutProps.breakpoint}
        Blob={CodeBlob}
        styles={{
          closed: code(width),
          open: open(width),
          hidden: hidden(width)
        }}
      />
      <BlobWrapper
        state={blobStates["write"]}
        onClick={() =>
          blobStates["write"] === "open"
            ? closeBlob("write")
            : openBlob("write")
        }
        defaultState="closed"
        breakpoint={layoutProps.breakpoint}
        Blob={WriteBlob}
        styles={{
          closed: write(width),
          open: open(width),
          hidden: hidden(width)
        }}
      />
      <BlobWrapper
        state={blobStates["am"]}
        onClick={() =>
          blobStates["am"] === "open" ? closeBlob("am") : openBlob("am")
        }
        defaultState="closed"
        breakpoint={layoutProps.breakpoint}
        Blob={AmBlob}
        styles={{
          closed: am(width),
          open: open(width),
          hidden: hidden(width)
        }}
      />
    </>
  );
}
export default Home;
