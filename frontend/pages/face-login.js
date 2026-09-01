import axios from "axios";
import React, { useState } from "react";
import Webcam from "react-webcam";
import useAxios from "axios-hooks";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useFaceLogin } from "@apolloo/actions";
import Redirect from "@components/shared/Redirect";
import CommanError from "@components/commanError/CommanError";
import { useSpeechSynthesis } from 'react-speech-kit';
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};
const Profile = () => {
  const [mutate, { loading, error, data }] = useFaceLogin();
  const router = useRouter();

  const [{ data: ip }, refetch] = useAxios("https://ipapi.co/json/");
  const [picture, setPicture] = useState("");
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  async function login(reqBody) {
    const data = {
      file: reqBody,
    };
    console.log(data);

    mutate({ variables: data });
  }
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
    var file = dataURLtoFile(pictureSrc);

    login(file);
  });

  const { speak, voices } = useSpeechSynthesis();




  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
  >
   
       {error && <><CommanError error={error} /></>}
      {data &&
        data.loginFace && (
          <>
            {toast.success(
              `Welcome ${data.loginFace.name} enter otp sent to your email address`, { toastId: "successs" }
          )}
          

          </>
        ) && <Redirect to={`/login/${data.loginFace.token}`}   />   }
      <h1
        style={{ marginBottom: "4rem", color: "black" , textTransform:"uppercase" }}
        className="mb-5 text-center"
      >
        Login with Face Id
      </h1>
      <div >
        {picture == "" ? (
          <Webcam
            audio={false}
            height={530}
            ref={webcamRef}
            width={600}
            style={{border: "2px solid red"}}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img style={{ height: "530px", width: "600px" }} src={picture} />
        )}
      </div>
      <div>
        {loading && (
          <button style={{ marginTop: "4rem" }} id="submit">
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
            </svg>{" "}
            Please wait while verifing your face
          </button>
        )}
        {!loading && (
          <>
            {picture === "" ? (
              <button
                style={{ marginTop: "4rem" }}
                onClick={(e) => {
                  e.preventDefault();
                  capture();
                }}
                id="submit"
              >
                Capture
              </button>
            ) : (
              <button
                style={{ marginTop: "4rem" }}
                onClick={(e) => {
                  setPicture("");
                }}
                id="submit"
              >
                Retake
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default Profile;
