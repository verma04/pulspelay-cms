import React from "react";
import Description from "@components/List/Description";
import UplodSvg from "@components/svg/UplodSvg";
import ImageLayout from "@Image";
import ImageUploadLabel from "@components/List/ImageUploadLabel";
export const Social = ({
  column1Img,
  setcolumn1Img,
  column1Img2,
  setcolumn1Img2,
  column2Img,
  setcolumn2Img,
  column2Img2,
  setcolumn2Img2,
  column2Img3,
  setcolumn2Img3,
  column3Img,
  setcolumn3Img,
  column3Img2,
  setcolumn3Img2,
  column3Img3,
  setcolumn3Img3,
  column3Img4,
  setcolumn3Img4,
  column4Img,
  setcolumn4Img,
  mobile,
  setMobile,
}) => {
  const [projectHomePageImage, setprojectHomePageImage] = React.useState("");
  const [state4, setstate4] = React.useState(false);
  return (
    <div id="social" className="box">
      <div className="head">
        <h2>Social Media Activations</h2>
      </div>

      <ImageUploadLabel
        img={mobile}
        setImage={setMobile}
        name={"Mobile Image"}
      />

      <div className="category">
        <div className="label">Column1</div>

        <ImageUploadLabel
          img={column1Img}
          setImage={setcolumn1Img}
          name={"Column 1 Img (1080 × 1080) "}
        />
        <ImageUploadLabel
          img={column1Img2}
          setImage={setcolumn1Img2}
          name={"Column 1 Img (1080 × 1080)"}
        />
      </div>

      <div className="category">
        <div className="label">Column 2</div>
        <ImageUploadLabel
          img={column2Img}
          setImage={setcolumn2Img}
          name={"Column 2 Image1 (1080 × 1080) "}
        />{" "}
        <ImageUploadLabel
          img={column2Img2}
          setImage={setcolumn2Img2}
          name={"Column 2 Image 2 1080 × 1897"}
        />
        <ImageUploadLabel
          img={column2Img3}
          setImage={setcolumn2Img3}
          name={"Column 3 Image 3 (1080 × 1080)"}
        />
      </div>

      <div className="category">
        <div className="label">Column 3</div>
        <ImageUploadLabel
          img={column3Img}
          setImage={setcolumn3Img}
          name={"Column 3 Image1  (1080 × 1080)"}
        />{" "}
        <ImageUploadLabel
          img={column3Img2}
          setImage={setcolumn3Img2}
          name={"Column 3 Image 2 (1080 × 1897)"}
        />
        <ImageUploadLabel
          img={column3Img3}
          setImage={setcolumn3Img3}
          name={"Column 3 Image 3 (1080 × 1080)"}
        />
        <ImageUploadLabel
          img={column3Img4}
          setImage={setcolumn3Img4}
          name={"Column 3 Image 3 (1080 × 1897)"}
        />
      </div>
      <div className="category">
        <div className="label">Column 4</div>
        <ImageUploadLabel
          img={column4Img}
          setImage={setcolumn4Img}
          name={"Column 3 Image 3 (1080 × 1897)"}
        />
      </div>
    </div>
  );
};
