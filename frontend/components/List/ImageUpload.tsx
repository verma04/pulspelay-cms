import React, { useState } from "react";
import { Pop } from "@components/comman/Pop";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import ImageLayout from "@Image";
import { useUploadImage, useGetAllImages } from "@apolloo/actions";
import Danger from "@components/svg/Danger";
import Skeleton from "react-loading-skeleton";
import OpenAi from "./OpenAi/OpenAi";

const ImageUpload = ({ setstate, set }: any) => {
  const defaultImg = "/20211223-6sle4-assa.png";

  const [active, setActive] = useState("gallery");
  const [img, setImg] = useState(null);
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [send, sendImg] = useState({
    imgUrl: "/20211223-6sle4-assa.png",
  });
  const [imgs, setImages] = useState([]);
  const { data: data1, loading: load } = useGetAllImages();

  const [mutate, { loading, error, data }] = useUploadImage();

  const onChange = async (e) => {
    await setImage(e.target.files[0]);
    await setImg(URL.createObjectURL(e.target.files[0]));
    const lastDot = await e.target.files[0].name.lastIndexOf(".");
    await setImageName(e.target.files[0].name.substring(0, lastDot));
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async () => {
    const data = {
      fileName: imageName,
      altName: imageName,
      file: image,
    };

    mutate({
      variables: data,
    });
  };

  if (loading)
    return (
      <Pop>
        <div className="modal-image">
          <div className="modal-image-1">Loading...</div>
        </div>
      </Pop>
    );

  if (data) {
    set(data.singleUpload.imgUrl);
  }

  const senddata = () => {
    if (send.imgUrl === defaultImg) {
      toast.error("Select Image");
    } else {
      set(send.imgUrl);
    }
  };

  const openAiImage = (img) => {
    set(img);
  };

  return (
    <Pop>
      <div className="modal-image">
        <span
          onClick={() => setstate(false)}
          style={{
            fontSize: "2rem",
          }}
          className="close"
        >
          &times;
        </span>
        <div className="modal-top">
          <div className="modal-top-right">
            <h2
              style={{
                marginBottom: "1.2rem",
                fontWeight: "1000",
              }}
            >
              Media Libaray
            </h2>
          </div>

          <div className="modal-top-left">
            <h2
              onClick={() => setActive("upload")}
              id={active === "upload" ? "set" : ""}
            >
              Upload Image
            </h2>

            <h2
              onClick={() => setActive("gallery")}
              id={active === "gallery" && "set"}
            >
              Image Gallery
            </h2>

            <h2
              onClick={() => setActive("open")}
              id={active === "open" && "set"}
            >
              Open Ai
            </h2>
          </div>
        </div>
        {active === "upload" && (
          <div className="modal-image-1">
            {img ? (
              <div className="conatiner">
                <div className="wrapper-img">
                  <Image
                    src={img}
                    layout="fill"
                    alt="logo"
                    objectFit="contain"
                  ></Image>
                </div>
                <form className="form-upload" onSubmit={handleSubmit(onSubmit)}>
                  {/* register your input into the hook by invoking the "register" function */}
                  <div className="head">
                    <h2> Add Image </h2>
                  </div>

                  {imageName == null ? null : (
                    <>
                      <div className="input-field-upload">
                        <label> Image Name </label>
                        <input
                          value={imageName}
                          placeholder=" Enter Image Name"
                        />
                        {/* errors will return when field validation fails  */}
                        {errors.fileName && (
                          <span>
                            <Danger />
                            <li>This field is required </li>
                          </span>
                        )}
                      </div>
                      <div className="input-field-upload">
                        <label> Image AltName </label>
                        {/* include validation with required or other standard HTML validation rules */}
                        <input
                          value={imageName === null ? null : imageName}
                          placeholder=" Enter Image AltName"
                        />
                        {/* errors will return when field validation fails  */}
                        {errors.altName && (
                          <span>
                            {" "}
                            <Danger /> <li>This field is required</li>
                          </span>
                        )}
                      </div>
                    </>
                  )}
                  {/* include validation with required or other standard HTML validation rules */}

                  <div className="input-field-upload">
                    <label> Image Description </label>
                    {/* include validation with required or other standard HTML validation rules */}
                    <input placeholder=" Enter Image Description" />
                    {/* errors will return when field validation fails  */}
                  </div>
                  <div className="btn">
                    <button onClick={onSubmit} id="submit" type="button">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <>
                <input
                  className="image"
                  type="file"
                  accept="image/*"
                  onChange={onChange}
                  id="file-input"
                  style={{
                    display: "none",
                  }}
                />
                <label htmlFor="file-input">
                  <div
                    style={{
                      width: "10rem",
                      position: "relative",
                      height: "10rem",
                      cursor: "pointer",
                    }}
                    className="wrapper-img"
                  >
                    <Image
                      src={
                        "https://pulseplaydigital.sgp1.digitaloceanspaces.com/20230508-ofbgc-uplaodimage"

                      }
                      layout="fill"
                      alt="logo"
                      priority
                      objectFit="contain"
                    ></Image>
                  </div>
                </label>
                <p style={{ textAlign: "center" }}>
                  Rename the image before uploading , according to section
                </p>
              </>
            )}
          </div>
        )}

        {active === "gallery" && (
          <div className="modal-image-1">
            <div className="conatiner">
              {load ? (
                <div className="wrapper-img">
                  <div className="wrapper-images">
                    <Skeleton height={40} /> <Skeleton height={40} />
                    <Skeleton height={40} /> <Skeleton height={40} />
                    <Skeleton height={40} /> <Skeleton height={40} />
                    <Skeleton height={40} /> <Skeleton height={40} />
                    <Skeleton height={40} /> <Skeleton height={40} />
                    <Skeleton height={40} /> <Skeleton height={40} />
                    <Skeleton height={40} /> <Skeleton height={40} />
                    <Skeleton height={40} /> <Skeleton height={40} />
                    <Skeleton height={40} /> <Skeleton height={40} />
                    <Skeleton height={40} /> <Skeleton height={40} />
                  </div>
                </div>
              ) : (
                <div key={set.imgName} className="wrapper-img">
                  {data1.getAllImages.map((set) => (
                    <div
                      onClick={() => sendImg(set)}
                      id={send.imgUrl === set.imgUrl ? "active" : ""}
                      key={set.imgName}
                      className="wrapper-images"
                    >
                      <ImageLayout
                        src={set.imgUrl}
                        alt={set.imgUrl}
                        objectFit="contain"
                      />
                    </div>
                  ))}
                </div>
              )}
              <form className="form-upload" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="head">
                  <h2> Add Image </h2>
                </div>
                <div
                  style={{
                    height: "30%",
                  }}
                  className="wrapper-img"
                >
                  <ImageLayout
                    src={send.imgUrl}
                    alt={send.imgUrl}
                    objectFit="contain"
                  />
                </div>
                <div className="btn">
                  <button onClick={() => senddata()} id="submit" type="button">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {active === "open" && <OpenAi openAiImage={openAiImage} />}
      </div>
    </Pop>
  );
};

export default ImageUpload;
