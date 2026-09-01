import Danger from "@components/svg/Danger";
import React from "react";

const Landing = ({ register, errors }) => {
  return (
    <div className="box">
      <div className="head">
        <h2>Add Case Studies</h2>
      </div>
      <div className="input-field">
        <label>
          Project Name <li>*</li>
        </label>
        <input
          id={errors.projectName ? "active" : ""}
          {...register("projectName", { required: true })}
          placeholder="Project Name"
        />

        {errors.projectName && (
          <span id="error">
            <Danger /> <li> Field is required</li>
          </span>
        )}
      </div>
    </div>
  );
};

export default Landing;
