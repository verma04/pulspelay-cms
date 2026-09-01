import React, { useState } from "react";
import { Section } from "components/clients/editItems/Style";
import { Router, useRouter } from "next/router";

import Landing from "./Landing";

import { toast } from "react-toastify";

import { useEditResources } from "@apolloo/actions";

import { useForm, SubmitHandler } from "react-hook-form";

interface Img {
  img: string;
}

import { SubmitButton } from "@components/List/SubmitButton";

const Add = ({ resources }) => {
  console.log(resources);
  const router = useRouter();

  const [contentTypes, setcontentTypes] = React.useState(
    resources.contentTypes
  );
  const [topics, settopics] = React.useState(resources.topics);

  const [reportAvatar, setreportAvatar] = React.useState(
    resources.reportAvatar
  );
  const [reportImage, setreportImage] = React.useState(resources.reportImage);
  const [reportPdf, setreportPdf] = React.useState(resources.reportPdf);
  const [reportDescription, setreportDescription] = React.useState(
    resources.reportDescription
  );

  type Inputs = {
    title: String;
    sortDescription: String;
    pdf: String;

    video: string;
  };

  const [add, { data: data2, error: err2, loading: loading3 }] =
    useEditResources();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (reportAvatar === null) {
      toast.error("Upload Report Avatar");
    } else if (reportPdf === null) {
      toast.error("Upload Pdf");
    } else {
      const set = {
        id: resources.id,
        reportAvatar,
        reportDescription,
        reportImage,
        status,
        contentTypes: JSON.stringify(contentTypes),
        topics: JSON.stringify(topics),
        reportPdf,

        ...data,
      };

      add({ variables: set });
    }
  };

  if (data2) {
    router.push("/resources");
  }

  const [status, setStatus] = useState(resources.status);

  const handleBeforeUnload = (e) => {
    e.preventDefault();
    const message =
      "Are you sure you want to leave? All provided data will be lost.";
    e.returnValue = message;
    return message;
  };

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
        router.push("/resources");
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
              setreportAvatar={setreportAvatar}
              reportAvatar={reportAvatar}
              reportImage={reportImage}
              setreportImage={setreportImage}
              reportPdf={reportPdf}
              setreportPdf={setreportPdf}
              register={register}
              reportDescription={reportDescription}
              setreportDescription={setreportDescription}
              topics={topics}
              settopics={settopics}
              contentTypes={contentTypes}
              setcontentTypes={setcontentTypes}
              errors={errors}
              data={resources}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Add;
