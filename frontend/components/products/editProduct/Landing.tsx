import Danger from "@components/svg/Danger";
import React from "react";

import ImageUploadLabel from "@components/List/ImageUploadLabel";
import Description from "@components/List/Description";
import { usePdfUpload } from "@apolloo/actions";

import Calendar from "react-calendar";
import { arrayMove } from "@dnd-kit/sortable";
const Landing = ({
  register,
  errors,
  data,
  date,
  setDate,

  heroSectionParagraph,
  setHeroSectionParagraph,
  logo1,
  logo2,

  logo3,

  logo4,

  setlogo1,
  setlogo2,
  setlogo3,
  setlogo4,
}: any) => {
  return (
    <div className="box">
      <div className="head">
        <h2>({data?.productName}) Products</h2>
      </div>

      <ImageUploadLabel
        img={logo1}
        setImage={setlogo1}
        name={"Image	(520 × 520)"}
      />

      <div className="input-field">
        <label>
          title <li>*</li>
        </label>
        <input
          defaultValue={data?.title}
          id={errors.title ? "active" : ""}
          {...register("title", { required: true })}
          placeholder="Name"
        />

        {errors.title && (
          <span id="error">
            <Danger /> <li> Name is required</li>
          </span>
        )}
      </div>

      <Description
        title={"Description"}
        description={heroSectionParagraph}
        setDescription={setHeroSectionParagraph}
      />
    </div>
  );
};

export default Landing;
