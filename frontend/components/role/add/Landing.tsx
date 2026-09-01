import Danger from "@components/svg/Danger";
import React from "react";
import { useGetAllActiveTeam } from "@apolloo/actions";
import { list } from "../../Layout/Sidebarr/List";
import NoSSR from "react-no-ssr";
import Select from "react-select";
const Landing = ({
  register,
  errors,
  assignRole,
  setAssignRole,
  user,
  setUser,
  role,
  setRole,
  data,
  team
}) => {

  const category = ["Manager", "Seo/Content", "HR", "Blog"];
  return (
    <div className="box">
      <div className="head">
        <h2>Add Role</h2>
      </div>
      <div className="input-field">
        <label>
          Select User <li>*</li>
        </label>


        <Select
          options={team}
          defaultValue={user}
          onChange={setUser}
        />

      </div>
      <div className="input-field">
        <label>
          Role <li>*</li>
        </label>
        <Select
          options={category.map((t) => ({
            value: t,
            label: t,
          }))}
          defaultValue={role}
          onChange={setRole}
        />

      </div>
      {role?.value !== "Blog" &&
        <div className="input-field">
          <label>
            Assign Modules <li>*</li>
          </label>


          <Select
            options={list.map((t) => ({
              value: t.title.toLowerCase(),
              label: t.title,
            }))}
            isMulti
            defaultValue={assignRole}
            onChange={setAssignRole}
          />

        </div>

      }


      <div className="input-field">
        <label>
          Password <li>*</li>
        </label>
        <input
          id={errors.password ? "active" : ""}
          {...register("password", { required: true })}
          placeholder="Password"
        />

        {errors.taglines && (
          <span id="error">
            <Danger /> <li> Password is required</li>
          </span>
        )}
      </div>
    </div>
  );
};

export default Landing;
