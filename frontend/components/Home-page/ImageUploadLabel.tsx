import ImageUpload from "@components/List/ImageUpload";
import UplodSvg from "@components/svg/UplodSvg";
import ImageLayout from "@Image";
import { Backdrop, Fade, Modal } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ImageUploadLabel = ({ img, setImage, name }) => {
  const [pop, setPop] = useState(false);
  const coverImage = async (data: any) => {
    await setImage(data);
    await setPop(false);
  };
  return (
    <>
      <Section>
        <div className="input-img">
          <label>
            {name} <li>*</li>
          </label>

          <div className="wrapper">
            <label onClick={() => setPop(true)} id="file">
              Choose file
            </label>

            {img === null || !img ? <p>No file Choosen</p> : <p>{img}</p>}

            <label onClick={() => setPop(true)}>
              <UplodSvg />
            </label>
          </div>

          {img && (
            <div className="img-wrapper">
              <ImageLayout alt={img} objectFit="cover" src={img} />

              <h4>Preview</h4>
            </div>
          )}
        </div>
      </Section>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={pop}
        onClose={() => setPop(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={pop}>
          <div>
            <ImageUpload setstate={setPop} set={coverImage} />
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default ImageUploadLabel;

import styled from "styled-components";
export const Section = styled.form`
  label {
    text-transform: capitalize;
    display: flex;
    align-items: center;
    font-weight: 1000;
    li {
      list-style: none;
      color: red;
      margin-left: 0.3rem;
      font-size: 1rem;
      margin-top: 0.4rem;
    }
  }

  .input-img {
    width: 70%;
    margin-top: 2rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    .wrapper {
      width: 100%;
      height: 3rem;
      margin-top: 0.5rem;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #ced4da;
      border-radius: 0.2rem;
      label {
        height: 100% !important;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3rem;
        font-size: 1rem;
        background-color: #303030;
        padding: 0.5rem;
        color: white;
        cursor: pointer;
      }
      p {
        width: 50%;
        font-size: 0.8rem;
      }
      #file {
        width: 25%;
      }
    }

    .img-wrapper {
      margin-top: 2rem;
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      height: 10rem;
      margin-top: 1rem;
      position: relative;
      video {
        height: 15rem !important;
        width: 100% !important;
      }
      h4 {
        position: absolute;
        top: 0rem;
        font-weight: 600;
        left: 0%;
      }
    }
  }
`;
