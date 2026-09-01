import React, { useState } from "react";
import { Section } from "components/clients/editItems/Style";
import { Router, useRouter } from "next/router";

import Landing from "./Landing";

import { toast } from "react-toastify";

import { useEditTest } from "@apolloo/actions";

import { useForm, SubmitHandler } from "react-hook-form";

interface Img {
  img: string;
}

import { SubmitButton } from "@components/List/SubmitButton";
import { useEditAwards } from "@apolloo/actions/rewards";
import { useeditAdviser } from "@apolloo/actions/adviser";

const EditAdviser = ({ resources }) => {
  console.log(resources);
  const router = useRouter();
  const [img, setImg] = React.useState(resources?.avatar);

  const [decription, setdecription] = React.useState(resources.about);

  type Inputs = {
    name: String;
    designation: String;
    facebook: String;
    instagram: String;

    linkedin: String;
    medium: String;
    portfolio: String;
    twitter: String;
    videoUrl: String;
    youtube: String;
  };

  const [add, { data: data2, error: err2, loading: loading3 }] =
    useeditAdviser();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [date, setDate] = useState(new Date());

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (img === null) {
      toast.error("Upload Advisor Image");
    } else {
      const social = {
        facebook: data.facebook,
        instagram: data.instagram,

        linkedin: data.linkedin,
        medium: data.medium,
        portfolio: data.portfolio,
        twitter: data.facebook,
        videoUrl: data.videoUrl,
        youtube: data.facebook,
      };
      const set = {
        id: resources.id,
        status,
        name: data.name,
        designation: data.designation,
        about: decription,
        avatar: img,
        videoUrl: data.videoUrl,
        social: JSON.stringify(social),
      };

      add({ variables: set });
    }
  };

  if (data2) {
    router.push("/adviser");
  }

  const [status, setStatus] = useState(resources.status);

  const errorMessage = (error: any) => {
    return (
      (error.graphQLErrors && error?.graphQLErrors[0]?.message) ||
      "Ooooops something went wrong..."
    );
  };
  const [finishStatus, setfinishStatus] = useState(false);
  const onBackButtonEvent = (e) => {
    e.preventDefault();
    if (!finishStatus) {
      if (window.confirm("Changes that you made may not be saved. ?")) {
        setfinishStatus(true);
        // your logic
        router.push("/adviser");
      } else {
        window.history.pushState(null, null, window.location.pathname);
        setfinishStatus(false);
      }
    }
  };

  React.useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", onBackButtonEvent);
    return () => {
      window.removeEventListener("popstate", onBackButtonEvent);
    };
  }, []);
  return (
    <Section onSubmit={handleSubmit(onSubmit)}>
      <SubmitButton
        status={status}
        setStatus={setStatus}
        set
        text={"Update"}
        loading={loading3}
      />
      <div data-aos="fade-left" id="myModal" className="modal">
        <div className="modal-content">
          <div className="form">
            <Landing
              register={register}
              testimonialDescription={decription}
              settestimonialDescription={setdecription}
              logo1={img}
              setlogo1={setImg}
              errors={errors}
              data={resources}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EditAdviser;
