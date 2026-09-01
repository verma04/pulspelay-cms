import React, { useState } from "react";
import { Section } from "@components/clients/editItems/Style";
import { useRouter } from "next/router";
import { SubmitButton } from "@components/List/SubmitButton";
import { toast } from "react-toastify";
import Items from "@components/List/Items";
import Landing from "./Landing";
import { useAddRole } from "@apolloo/actions";

import { useForm, SubmitHandler } from "react-hook-form";

interface Img {
  img: string;
}

const Add = ({ data, team }) => {
  const router = useRouter();

  type Inputs = {
    password: String;
  };

  const [add, { data: data2, error, loading: loading3 }] = useAddRole();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (user === null) {
      toast.error("Select User");
    }
    if (role === null) {
      toast.error("Select Role");
    } else {
      const set = {
        ...data,
        user: user.value,
        role: role.value,
        assignRole: JSON.stringify(assignRole.map((t) => t.value)),
      };

      console.log(user);
      add({ variables: set });
    }
  };

  const errorMessage = (error: any) => {
    return (
      (error.graphQLErrors && error?.graphQLErrors[0]?.message) ||
      "Ooooops something went wrong..."
    );
  };
  const [assignRole, setAssignRole] = React.useState(null);
  const [role, setRole] = React.useState(null);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    if (role?.value === "Blog" && "Seo/Content") {
      const set = [
        {
          value: "blog",
          label: "blog",
        },
      ];
      setAssignRole(set);
    }
  }, [role]);

  if (data2) {
    router.push(`/role`);
  }

  const teams = team.map((t) => ({
    value: t?.id,
    label: t?.memberName,
  }));

  const roles = data.map((t) => ({
    value: t?.member?.id,
    label: t?.member?.memberName,
  }));

  const fin = teams.filter(
    (ar) => !roles.find((rm) => rm.value === ar.value && ar.label === rm.label)
  );

  return (
    <Section onSubmit={handleSubmit(onSubmit)}>
      <SubmitButton set text={"Add"} loading={loading3} />
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
              team={fin}
            />
          </div>
        </div>
      </div>
      {error && <>{toast.error(errorMessage(error))}</>}
    </Section>
  );
};

export default Add;
