import React from "react";
import Description from "@components/List/Description";
import UplodSvg from "@components/svg/UplodSvg";
import ImageLayout from "@Image";
import Danger from "@components/svg/Danger";
import ImageUploadLabel from "@components/List/ImageUploadLabel";

export const Website = ({
  register,
  errors,
  websiteImgLeft,
  websiteImgRight,
  setwebsiteImgLeft,
  setwebsiteImgRight,
  clients,
}) => {
  const [projectHomePageImage, setprojectHomePageImage] = React.useState("");
  const [state4, setstate4] = React.useState(false);
  return (
    <div id="website" className="box">
      <div className="head">
        <h2>Website</h2>
      </div>

      <ImageUploadLabel
        img={websiteImgLeft}
        setImage={setwebsiteImgLeft}
        name={"Website Image  Left 	(1903 × 2554)"}
      />
      <ImageUploadLabel
        img={websiteImgRight}
        setImage={setwebsiteImgRight}
        name={"Website Image  Right	(1903 × 2554)"}
      />
      <div className="input-field">
        <label>
          Website Url<li>*</li>
        </label>
        <input
          defaultValue={clients.website.websiteUrl}
          type="url"
          id={errors.websiteUrl ? "active" : ""}
          {...register("websiteUrl", { required: true })}
          placeholder="Website Url"
        />
        {errors.projectName && (
          <span id="error">
            <Danger /> <li>Url is required</li>
          </span>
        )}
      </div>
    </div>
  );
};
