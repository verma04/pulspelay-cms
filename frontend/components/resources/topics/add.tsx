import React, { useState } from "react";
import { Section } from "components/clients/editItems/Style";
import { useRouter } from "next/router";
import { SubmitButton } from "@components/List/SubmitButton";
import { toast } from "react-toastify";
import Items from "@components/List/Items";
import Landing from "./Landing";
import {
  useAddResources,
  useGetAllTeam,
  useGetAllSolutions,
  useGetAllServices,
} from "@apolloo/actions";

import { useForm, SubmitHandler } from "react-hook-form";

interface Img {
  img: string;
}

const Add = ({ data }) => {
  const router = useRouter();

  type Inputs = {
    title: String;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const errorMessage = (error: any) => {
    return (
      (error.graphQLErrors && error?.graphQLErrors[0]?.message) ||
      "Ooooops something went wrong..."
    );
  };

  return (
    <Section>
      <div data-aos="fade-left" id="myModal" className="modal">
        <div className="modal-content">
          <div className="form">
            <Landing data={data} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Add;
