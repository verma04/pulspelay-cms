import Danger from "@components/svg/Danger";
import React from "react";

import ImageUploadLabel from "@components/List/ImageUploadLabel";
import Description from "@components/List/Description";
import { usePdfUpload } from "@apolloo/actions";

import Calendar from "react-calendar";
import {
  arrayMove,

} from "@dnd-kit/sortable";
const Landing = ({
  register,
  errors,
  data,
  date,
  setDate,


  testimonialDescription,
  settestimonialDescription,
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
        <h2>({data.title}) Awards</h2>
      </div>

      <ImageUploadLabel
        img={logo1}
        setImage={setlogo1}
        name={"Image	(520 × 520)"}
      />
      <ImageUploadLabel
        img={logo2}
        setImage={setlogo2}
        name={"Image2 (520 × 520)"}
      />
      <ImageUploadLabel
        img={logo3}
        setImage={setlogo3}
        name={"Image3 (520 × 520)"}
      />
      <ImageUploadLabel
        img={logo4}
        setImage={setlogo4}
        name={"Image4 (520 × 520)"}
      />


      <div className="input-field">
        <label>
          title <li>*</li>
        </label>
        <input
          defaultValue={data.title}
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
      <div className="input-field">
        <label>
          Location <li>*</li>
        </label>
        <input
          defaultValue={data.location}
          id={errors.location ? "active" : ""}
          {...register("location", { required: true })}
          placeholder="Location"
        />

        {errors.location && (
          <span id="error">
            <Danger /> <li> Location is required</li>
          </span>
        )}
      </div>


      <div className="input-field">
        <label>
          Award Date <li>*</li>
        </label>
        <Calendar
          onChange={setDate}
          value={date}
        />
      </div>

      <Description
        title={"Description"}
        description={testimonialDescription}
        setDescription={settestimonialDescription}
      />
    </div>
  );
};

export default Landing;
