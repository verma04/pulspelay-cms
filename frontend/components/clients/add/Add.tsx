import React, { useState } from "react";
import { Section } from "../editItems/Style";
import { useRouter } from "next/router";
import { SubmitButton } from "@components/List/SubmitButton";
import { toast } from "react-toastify";
import Items from "@components/List/Items";
import Landing from "./Landing";
import {
  useAddClient,
  useGetAllTeam,
  useGetAllSolutions,
  useGetAllServices,
} from "@apolloo/actions";

import { useForm, SubmitHandler } from "react-hook-form";

interface Img {
  img: string;
}

const Add = ({}) => {
  const router = useRouter();

  type Inputs = {
    projectName: String;
  };

  const [add, { data: data2, error, loading: loading3 }] = useAddClient();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    add({ variables: data });
  };

  const errorMessage = (error: any) => {
    return (
      (error.graphQLErrors && error?.graphQLErrors[0]?.message) ||
      "Ooooops something went wrong..."
    );
  };

  if (data2) {
    router.push(`/clients/${data2.addClient.id}`);
  }
  {
    error && <>{toast.error(errorMessage(error))}</>;
  }
  return (
    <Section onSubmit={handleSubmit(onSubmit)}>
      <SubmitButton set text={"Add"} loading={loading3} />
      <div data-aos="fade-left" id="myModal" className="modal">
        <div className="modal-content">
          <div className="form">
            <Landing register={register} errors={errors} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Add;
