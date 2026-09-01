import React, { useState } from "react";
import { Section } from "@components/clients/editItems/Style";
import { useRouter } from "next/router";
import { SubmitButton } from "@components/List/SubmitButton";
import { toast } from "react-toastify";
import Items from "@components/List/Items";
import Landing from "./Landing";
import {
  useEditRole,
  useGetAllTeam,
  useGetAllSolutions,
  useGetAllServices,
} from "@apolloo/actions";

import { useForm, SubmitHandler } from "react-hook-form";

interface Img {
  img: string;
}

const Add = ({ roleData }) => {
  const router = useRouter();

  type Inputs = {
    password: String;
  };

  const [add, { data: data2, error, loading: loading3 }] = useEditRole();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (role === null) {
      toast.error("Select Role");
    } else {
      const set = {
        ...data,
        user: roleData.id,
        role: role.value,
        assignRole: JSON.stringify(assignRole.map((t) => t.value)),
      };

      add({ variables: set });
    }
  };
  const [role, setRole] = React.useState({
    value: roleData.role,
    label: roleData.role,
  });
  React.useEffect(() => {
    if (role?.value === "Blog") {
      const set = [
        {
          value: "blog",
          label: "blog",
        },
      ];
      setAssignRole(set);
    }
  }, [role]);
  const errorMessage = (error: any) => {
    return (
      (error.graphQLErrors && error?.graphQLErrors[0]?.message) ||
      "Ooooops something went wrong..."
    );
  };
  const options = roleData.assignRole.map((t) => ({
    value: t,
    label: t,
  }));
  const [assignRole, setAssignRole] = React.useState(options);

  const [user, setUser] = React.useState(null);
  if (data2) {
    router.push(`/role`);
  }

  return (
    <Section onSubmit={handleSubmit(onSubmit)}>
      <SubmitButton set text={"Edit"} loading={loading3} />
      <div data-aos="fade-left" id="myModal" className="modal">
        <div className="modal-content">
          <div className="form">
            <Landing
              assignRole={assignRole}
              setAssignRole={setAssignRole}
              user={user}
              setUser={setUser}
              register={register}
              errors={errors}
              role={role}
              setRole={setRole}
              data={roleData}
            />
          </div>
        </div>
      </div>
      {error && <>{toast.error(errorMessage(error))}</>}
    </Section>
  );
};

export default Add;
