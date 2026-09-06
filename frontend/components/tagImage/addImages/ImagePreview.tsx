import React from "react";
import ImageMarker, { Marker } from "react-image-marker";
import CustomMarker from "./CustomMaker";
import { v4 as uuidv4 } from "uuid";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
function ImagePreview({ src, markers, setMarkers }) {
  console.log(markers);
  const newMakers = (marker) => {
    console.log(marker);
    const data1 = {
      id: uuidv4(),
      ...marker,
      tag: {},
    };
    setMarkers([...markers, data1]);
  };
  const handle = useFullScreenHandle();
  const resolveSrc = (rawSrc: string) => {
    if (!rawSrc) return "/20211223-6sle4-assa.png";
    if (rawSrc.startsWith("http://") || rawSrc.startsWith("https://") || rawSrc.startsWith("data:")) return rawSrc;
    return `http://localhost:4000${rawSrc.startsWith("/") ? "" : "/"}${rawSrc}`;
  };

  return (
    <>
      <button
        style={{ backgroundColor: "black", color: "white", padding: "10px" }}
        type="button"
        onClick={handle.enter}
      >
        Enter fullscreen Image to Tag Image
      </button>
      <FullScreen handle={handle}>
        <div style={{ padding: "2rem" }}>
          <ImageMarker
            src={resolveSrc(src)}
            markers={markers}
            onAddMarker={(marker: Marker) => newMakers(marker)}
            markerComponent={(props) => (
              <>
                <CustomMarker
                  markers={markers}
                  data={props}
                  setMakers={setMarkers}
                />
              </>
            )}
          />
        </div>
      </FullScreen>
    </>
  );
}

export default ImagePreview;
