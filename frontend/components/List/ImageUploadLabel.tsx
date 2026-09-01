import UplodSvg from "@components/svg/UplodSvg";
import ImageLayout from "@Image";
import { Backdrop, Fade, Modal } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import ImageUpload from "./ImageUpload";

const ImageUploadLabel = ({ img, setImage, name, width, bg }: any) => {
  const [pop, setPop] = useState(false);
  const coverImage = async (data: any) => {
    await setImage(data);
    await setPop(false);
  };
  return (
    <>
      <div style={{ width: width ? width : "" }} className="input-img">
        <label>
          {name}

          <li>*</li>
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
          <div style={{ background: bg ? bg : "" }} className="img-wrapper">
            <ImageLayout alt={img} objectFit="contain" src={img} />

            <h4>Preview</h4>
          </div>
        )}
      </div>

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
