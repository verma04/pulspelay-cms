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
        <h2>({data.name}) Advisor</h2>
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
          defaultValue={data.name}
          id={errors.name ? "active" : ""}
          {...register("name", { required: true })}
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
          designation <li></li>
        </label>
        <input
          defaultValue={data.designation}
          id={errors.designation ? "active" : ""}
          {...register("designation", { required: true })}
          placeholder="designation"
        />
        {errors.title && (
          <span id="error">
            <Danger /> <li> Name is required</li>
          </span>
        )}
      </div>

      <div className="input-field">
        <label>
          videoUrl <li></li>
        </label>
        <input
          defaultValue={data.videoUrl}
          id={errors.videoUrl ? "active" : ""}
          {...register("videoUrl")}
          placeholder="Video Url"
        />

      </div>

      <Description
        title={"About"}
        description={testimonialDescription}
        setDescription={settestimonialDescription}
      />


      <div className="input-field">
        <label>
          Instagram Url <li></li>
        </label>
        <input
          defaultValue={data.social.instagram}
          id={errors.instagram ? "active" : ""}
          {...register("instagram")}
          placeholder="instagram"
        />
      </div>

      <div className="input-field">
        <label>
          Linkedin Url <li></li>
        </label>
        <input
          defaultValue={data.social.linkedin}
          id={errors.linkedin ? "active" : ""}
          {...register("linkedin")}
          placeholder="linkedin"
        />
      </div>
      <div className="input-field">
        <label>
          facebook Url <li></li>
        </label>
        <input
          defaultValue={data.social.facebook}
          id={errors.facebook ? "active" : ""}
          {...register("facebook")}
          placeholder="facebook"
        />
      </div>

      <div className="input-field">
        <label>
          youtube Url <li></li>
        </label>
        <input
          defaultValue={data.social.youtube}
          id={errors.youtube ? "active" : ""}
          {...register("youtube")}
          placeholder="youtube"
        />
      </div>

      <div className="input-field">
        <label>
          twitter Url <li></li>
        </label>
        <input
          defaultValue={data.social.twitter}
          id={errors.twitter ? "active" : ""}
          {...register("twitter")}
          placeholder="twitter"
        />
      </div>

      <div className="input-field">
        <label>
          medium Url <li></li>
        </label>
        <input
          defaultValue={data.social.medium}
          id={errors.medium ? "active" : ""}
          {...register("medium")}
          placeholder="medium"
        />
      </div>

      <div className="input-field">
        <label>
          portfolio Url <li></li>
        </label>
        <input
          defaultValue={data.social.portfolio}
          id={errors.portfolio ? "active" : ""}
          {...register("portfolio")}
          placeholder="portfolio"
        />
      </div>


    </div>
  );
};

export default Landing;
