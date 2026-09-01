import React from "react";
import { Section } from "@components/clients/editItems/Style";
import { useRouter } from "next/router";

import { toast } from "react-toastify";

import { useForm, SubmitHandler } from "react-hook-form";
import Description from "@components/List/Description";

import { SubmitButton } from "@components/List/SubmitButton";

import useAxios from "axios-hooks";
const AddPrompt = () => {
  const router = useRouter();

  const [text, setText] = React.useState("");

  type Inputs = {
    servicesName: String;
    servicesHeading1: String;
    servicesHeading2: String;
    servicesPara2: String;
  };

  const [{ data, loading, error }, add] = useAxios(
    {
      url: `https://chatapi.pulseplaydigital.ai/api/add-data`,
      method: "Post",
    },
    { manual: true }
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    add({
      data: { text: text },
    });
  };

  const errorMessage = (error: any) => {
    return (
      (error.graphQLErrors && error?.graphQLErrors[0]?.message) ||
      "Ooooops something went wrong..."
    );
  };

  if (error) {
    {
      toast.error(errorMessage(error));
    }
  }

  if (data) {
    router.push("/prompt");

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
  return (
    <Section onSubmit={handleSubmit(onSubmit)}>
      <SubmitButton set text={"add"} loading={loading} />
      <div data-aos="fade-left" id="myModal" className="modal">
        <div className="modal-content">
          <div className="form">
            <div className="box">
              <div className="head">
                <h2>Add Prompt</h2>
              </div>

              <Description
                title={"Service Parargraph"}
                description={text}
                setDescription={setText}
              />

              {/* <div className="status">
              <label>Status ({active ? "active" : "nonactive"}) </label>
              <Switch
                checked={active}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AddPrompt;
