import React, { useState } from "react";
import Description from "@components/List/Description";
import UplodSvg from "@components/svg/UplodSvg";
import ImageLayout from "@Image";
import {
  useEditClient,
  useGetAllTeam,
  useGetAllSolutions,
  useGetAllServices,
} from "@apolloo/actions";
import Items from "@components/List/Items";
import ColorPicker from "@components/comman/color-picker/ColorPicker";
import Select from "react-select";
import NoSSR from "react-no-ssr";
import ImageUploadLabel from "@components/List/ImageUploadLabel";
import Danger from "@components/svg/Danger";
import { Checkbox } from "@mui/material";
import Error from "@components/Error/Error";
export const ProjectInformation = ({
  clientColorTheme,
  setclientColorTheme,
  employeeWork,
  setemployeeWork,
  services,
  setservices,
  projectIndustry,
  setprojectIndustry,
  setprojectLogo,
  projectLogo,
  projectLogoTransparent,
  setprojectLogoTransparent,

  projectDescription,
  setprojectDescription,
  register,
  errors,
  blackLogo,
  setBlackLogo,
  area,
  setArea,
  tools,
  setTools,
  clients,
  isVisible,
  setIsVisible,
}) => {
  const { loading: loading2, data, error } = useGetAllTeam();
  const { loading: load, data: data1, error: err } = useGetAllSolutions();
  const [edit, { data: data2, error: err2, loading: loading3 }] =
    useEditClient();
  const { loading, data: data3 } = useGetAllServices();
  const [projectHomePageImage, setprojectHomePageImage] = React.useState("");
  const [state4, setstate4] = React.useState(false);

  return (
    <div className="box">
      <div className="head">
        <h2>Project Information</h2>
      </div>
      <div className="input-field">
        <label>
          Project Name<li>*</li>
        </label>
        <input
          defaultValue={clients.projectName}
          id={errors.projectName ? "active" : ""}
          {...register("projectName", { required: true })}
          placeholder="Project Name"
        />

        {errors.projectName && (
          <span id="error">
            <Danger /> <li> Project Name is required</li>
          </span>
        )}
      </div>
      <div className="input-field">
        <label>
          Year<li>*</li>
        </label>
        <input
          defaultValue={clients.year}
          id={errors.year ? "active" : ""}
          {...register("year", { required: true })}
          placeholder="Project Year"
        />
        {errors.year && (
          <span id="error">
            <Danger /> <li> Value is required</li>
          </span>
        )}
      </div>
      <div className="input-field">
        <label>Industry Solutions</label>
        {loading2 ? (
          <div> Loading...... </div>
        ) : (
          <NoSSR>
            <Select
              options={data1?.getAllSolutions.map((t) => ({
                value: t.id,
                label: t.solutionsName,
              }))}
              isMulti
              defaultValue={projectIndustry}
              onChange={setprojectIndustry}
            />
          </NoSSR>
        )}
      </div>
      <div className="input-field">
        <label>
          Services Provided<li>*</li>
        </label>
        {loading2 ? (
          <div> Loading...... </div>
        ) : (
          <NoSSR>
            <Select
              options={data3?.getAllServices.map((t) => ({
                value: t.id,
                label: `${t.servicesName}  `,
              }))}
              isMulti
              defaultValue={services}
              onChange={setservices}
            />
          </NoSSR>
        )}
      </div>
      <div className="input-field">
        <label>
         Industry<li>*</li>
        </label>
        <input
          defaultValue={clients.areas}
          id={errors.areas ? "active" : ""}
          {...register("areas", { required: true })}
          placeholder="Project Areas"
        />
        {errors.areas && (
          <span id="error">
            <Danger /> <li> Value is required</li>
          </span>
        )}
      </div>
      <div className="input-field">
        <label>Who Works on Project?</label>
        {loading2 ? (
          <div> Loading...... </div>
        ) : (
          <NoSSR>
            <Select
              options={data?.getAllTeamMember.map((t) => ({
                value: t.id,
                label: `${t.memberName} (${t.memberDesignation}) `,
              }))}
              isMulti
              defaultValue={employeeWork}
              onChange={setemployeeWork}
            />
          </NoSSR>
        )}
      </div>
      <ImageUploadLabel
        img={projectLogo}
        setImage={setprojectLogo}
        name={"Logo (with background) 	(360 × 480)"}
      />
      <ImageUploadLabel
        img={projectLogoTransparent}
        setImage={setprojectLogoTransparent}
        name={"Transparent Logo (360 × 480) "}
      />
      <div style={{ width: "50%" }}>
        <ImageUploadLabel
          width="90%"
          img={blackLogo}
          setImage={setBlackLogo}
          name={"Black and white client Logo (Home Page Slider) "}
          bg="#273EE1"
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Checkbox
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setIsVisible(event.target.checked)
            }
            checked={isVisible}
          />
          <p>Show Image in HomePage</p>
       
        </div>
      </div>
      <div className="input-field">
        <label>
          Background Code <li>*</li>
        </label>
        <ColorPicker state={clientColorTheme} setState={setclientColorTheme} />
        <input
          style={{ marginTop: "1rem" }}
          onChange={(e) => setclientColorTheme(e.target.value)}
          value={clientColorTheme}
        />
        {/* {errors.projectName && (
          <span id="error">
            <Danger /> <li> Color Code is required</li>
          </span>
        )} */}
      </div>
      <Description
        title={"Project Description"}
        description={projectDescription}
        setDescription={setprojectDescription}
      />
      <Items content={area} setContent={setArea} id={"AREAS"} />
      <Items content={tools} setContent={setTools} id={"TECHNOLOGIES"} />
    </div>
  );
};
