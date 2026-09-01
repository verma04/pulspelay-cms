import React from "react";
import { useUploadVedio, useGetAllImages } from "@apolloo/actions";
import UplodSvg from "@components/svg/UplodSvg";
import Image from "next/image";
import ImageLayout from "@Image";
export default function video({ vedio, setVedio }) {
  const [mutate, { loading, error, data }] = useUploadVedio();
  const onChange = (e) => {
    const data = {
      file: e.target.files[0],
      fileName: e.target.files[0].name,
      altName: e.target.files[0].name,
    };

    mutate({
      variables: data,
    });
  };

  if (data) {
    setVedio(data.videoUpload.vedioUrl);
  }

  return (
    <div className="input-img">
      <label>
        Service Vedio <li> * </li>
      </label>
      <div className="wrapper">
        <label htmlFor="file-inputs" id="file">
          Choose file
        </label>
        {setVedio === null ? <p> No file Choosen </p> : <p> {vedio} </p>}
        <label htmlFor="file-inputs">
          <UplodSvg />
        </label>
      </div>
      {loading && (
        <div className="img-wrapper">
          <ImageLayout
            alt="20220422-1ydlq-weew"
            objectFit="contain"
            src={"/Spinner-1s-200px.gif"}
          />
        </div>
      )}
      {!loading && (
        <>
          {vedio !== null && (
            <div className="img-wrapper">
              <video width="400" height="300" controls>
                <source
                  src={`https://assets.pulseplaydigital.com/assert${vedio}.mp4`}
                  type="video/mp4"
                />
              </video>
              <h4> Preview </h4>
            </div>
          )}
        </>
      )}
      <input
        id="file-inputs"
        style={{
          display: "none",
        }}
        onChange={onChange}
        type="file"
        accept="video/mp4,video/x-m4v,video/*"
      />
    </div>
  );
}
