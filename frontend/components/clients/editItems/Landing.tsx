import Danger from "@components/svg/Danger";
import React from "react";

const Landing = ({ register, errors, clients }) => {
  return (
    <div className="box">
      <div className="head">
        <h2>Landing Section</h2>
      </div>
      <div className="input-field">
        <label>
          Landing Short Description <li>*</li>
        </label>
        <textarea
          defaultValue={clients.landingDescription}
          id={errors.landingDescription ? "active" : ""}
          {...register("landingDescription", { required: true })}
          placeholder="Description Name"
        />

        {errors.landingDescription && (
          <span id="error">
            <Danger /> <li> Description is required</li>
          </span>
        )}
      </div>
      <div className="input-field">
        <label>
          Location <li>*</li>
        </label>
        <input
          defaultValue={clients.location}
          id={errors.location ? "active" : ""}
          {...register("location", { required: true })}
          placeholder="Location"
        />

        {errors.location && (
          <span id="error">
            <Danger /> <li> Location</li>
          </span>
        )}
      </div>
    </div>
  );
};

export default Landing;
