import Danger from "@components/svg/Danger";
import React from "react";

const Landing = ({ register, errors }) => {
  return (
    <div className="box">
      <div className="head">
        <h2>Add Resources</h2>
      </div>
      <div className="input-field">
        <label>
          Title <li>*</li>
        </label>
        <input
          id={errors.title ? "active" : ""}
          {...register("title", { required: true })}
          placeholder="title"
        />

        {errors.title && (
          <span id="error">
            <Danger /> <li> Field is required</li>
          </span>
        )}
      </div>
    </div>
  );
};

export default Landing;
