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
}) => {
  const { loading: loading2, data: team, error } = useGetAllActiveTeam();

  const category = ["Manager", "Seo/Content", "HR", "Blog"];
  return (
    <div className="box">
      <div className="head">
        <h2>Add Role</h2>
      </div>
      <div className="input-field">
        <label>
          User <li>*</li>
        </label>

        <input readOnly value={data.member.memberName} />
      </div>
      {role?.value !== "Blog" &&
        <div className="input-field">
          <label>
            Assign Modules <li>*</li>
          </label>

          {loading2 ? (
            <div> Select</div>
          ) : (
            <Select
              options={list.map((t) => ({
                value: t.title.toLowerCase(),
                label: t.title,
              }))}
              isMulti
              defaultValue={assignRole}
              onChange={setAssignRole}
            />
          )}
        </div>
      }
      <div className="input-field">
        <label>
          Role <li>*</li>
        </label>

        {loading2 ? (
          <div> Select</div>
        ) : (
          <Select
            options={category.map((t) => ({
              value: t,
              label: t,
            }))}
            defaultValue={role}
            onChange={setRole}
          />
        )}
      </div>
      <div className="input-field">
        <label>
          Password <li>*</li>
        </label>
        <input
          readOnly
          type={"password"}
          value="passwdsdsddsdsdssdsdsdsddsdsdsdsdsdsdsdsord"
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
