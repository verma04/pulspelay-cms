import React from "react";
import Description from "@components/List/Description";
import UplodSvg from "@components/svg/UplodSvg";
import ImageLayout from "@Image";
import ImageUploadLabel from "@components/List/ImageUploadLabel";

export const OutReach = ({
  outreach,
  setoutReach,
  outreach2,
  setoutReach2,
  outreach3,
  setoutReach3,
  outreach4,
  setoutReach4,
}) => {
  const [projectHomePageImage, setprojectHomePageImage] = React.useState("");
  const [state4, setstate4] = React.useState(false);
  return (
    <div id="outreach" className="box">
      <div className="head">
        <h2>OutReach</h2>
      </div>

      <ImageUploadLabel
        img={outreach}
        setImage={setoutReach}
        name={"Out Reach Image 1"}
      />
      <ImageUploadLabel
        img={outreach2}
        setImage={setoutReach2}
        name={"Out Reach Image 2"}
      />
      <ImageUploadLabel
        img={outreach3}
        setImage={setoutReach3}
        name={"Out Reach Image 3"}
      />
      <ImageUploadLabel
        img={outreach4}
        setImage={setoutReach4}
        name={"Out Reach Image 4"}
      />
    </div>
  );
};
