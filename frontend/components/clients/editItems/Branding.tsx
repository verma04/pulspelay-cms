import Danger from "@components/svg/Danger";
import React from "react";
import ImageUploadLabel from "@components/List/ImageUploadLabel";
const Branding = ({ register, errors, branding, setbranding, clients }) => {
  return (
    <div className="box">
      <div className="head">
        <h2>Branding</h2>
      </div>
      <div className="input-field">
        <label>
          Taglines <li>*</li>
        </label>
        <input
          defaultValue={clients.branding.taglines}
          id={errors.taglines ? "active" : ""}
          {...register("taglines", { required: true })}
          placeholder="Branding Taglines"
        />

        {errors.taglines && (
          <span id="error">
            <Danger /> <li> Taglines is required</li>
          </span>
        )}
      </div>
      <div className="input-field">
        <label>
          SingleWord <li>*</li>
        </label>
        <input
          defaultValue={clients.branding.singleWord}
          id={errors.singleWord ? "active" : ""}
          {...register("singleWord", { required: true })}
          placeholder="Single Word"
        />

        {errors.singleWord && (
          <span id="error">
            <Danger /> <li> Single Word is required</li>
          </span>
        )}
      </div>

      <ImageUploadLabel
        img={branding}
        setImage={setbranding}
        name={"Branding Image 	(1000 × 1000)"}
      />
    </div>
  );
};

export default Branding;
