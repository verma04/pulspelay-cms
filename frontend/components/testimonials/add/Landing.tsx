import Danger from "@components/svg/Danger";
import React from "react";
import Select from "react-select";
import NoSSR from "react-no-ssr";
const Landing = ({ register, errors, data, caseSudies, setcaseStudies }) => {
  return (
    <div className="box">
      <div className="head">
        <h2>Add Testimonials</h2>
      </div>
      <div className="input-field">
        <label>
          Select Case Studies <li>*</li>
        </label>
        <NoSSR>
          <Select
            options={data.map((t) => ({
              value: t.id,
              label: t.projectName,
            }))}
            defaultValue={caseSudies}
            onChange={setcaseStudies}
          />
        </NoSSR>

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
