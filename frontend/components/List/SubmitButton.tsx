import React from "react";
import { useRouter } from "next/router";
import Switch from "@mui/material/Switch";
import ImageLayout from "@Image";

export const SubmitButton = ({ loading, text, status, setStatus }: any) => {
  const router = useRouter();
  return (
    <div className="btn-fixed">
      {loading ? (
        <button id="submit" type="submit">
          <span>{text}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{
              margin: "auto",

              display: "block",
              shapeRendering: "auto",
            }}
            width="17px"
            height="17px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <path
                d="M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843"
                fill="none"
                stroke="#ffffff"
                stroke-width="12"
              />
              <path d="M49 3L49 27L61 15L49 3" fill="#ffffff" />
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
              />
            </g>
          </svg>
        </button>
      ) : (
        <button id="submit" type="submit">
          <span>{text}</span>
        </button>
      )}
      <button type="button" className="cancel" onClick={() => router.back()}>
        Cancel
      </button>
      {status !== undefined && (
        <div className="status">
          <label>Status ({status ? "enabled" : "disabled"}) </label>
          <Switch
            checked={status}
            onChange={() => setStatus(!status)}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
      )}
    </div>
  );
};
