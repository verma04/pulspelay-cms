import { useGetAllTeam } from "@apolloo/actions";
import React from "react";

import NoSSR from "react-no-ssr";
import Select from "react-select";
const Member = ({
  data,
  loading,
  markers,
  setMakers,
  index,
  id,
  markerDetials,
}) => {
  const member = data?.getAllTeamMember.filter((t) => t.status === true);

  return (
    <div style={{ width: "10rem" }} className="input-field">
      {loading ? (
        <div> Loading...... </div>
      ) : (
        <NoSSR>
          <select
            onChange={(e) => {
              const find = member.find((set) => set.id === e.target.value);
              console.log(find);
              const data = {
                id: find.id,
                memberName: find.memberName,
              };
              const maker = markers.find((t) => t.id === id);

              const finData = {
                ...maker,
                tag: data,
              };
              console.log(finData);
              const newArr = markers;
              newArr[index] = finData;
              console.log(newArr);
              setMakers(newArr);
            }}
          >
            {markerDetials.tag.id ? (
              <option value={markerDetials.tag.id}>
                {markerDetials.tag.memberName}
              </option>
            ) : (
              <option value={""}>Select</option>
            )}

            {member.map((set) => (
              <option value={set.id}>{set.memberName}</option>
            ))}
          </select>
        </NoSSR>
      )}
    </div>
  );
};

export default Member;
