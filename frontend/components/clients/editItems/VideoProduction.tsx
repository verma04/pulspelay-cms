import React from "react";
import Description from "@components/List/Description";
import UplodSvg from "@components/svg/UplodSvg";
import ImageLayout from "@Image";
import Video from "@components/List/video";
import Danger from "@components/svg/Danger";
export const VideoProduction = ({ register, errors, clients }) => {
  return (
    <div id="video" className="box">
      <div className="head">
        <h2>Video Production</h2>
      </div>
      <div className="input-field">
        <label>
          Video URL <li>*</li>
        </label>
        <input
          defaultValue={clients.video.url}
          id={errors.projectVideo ? "active" : ""}
          {...register("projectVideo", { required: true })}
          placeholder="Project Video"
        />

        {errors.projectVideo && (
          <span id="error">
            <Danger /> <li> URl is required</li>
          </span>
        )}
      </div>
    </div>
  );
};
