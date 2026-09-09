import React, { useState } from "react";
import { Section } from "components/clients/editItems/Style";
import { Router, useRouter } from "next/router";

import Landing from "./Landing";

import { toast } from "react-toastify";

import { useEditTest, useGetAllClient } from "@apolloo/actions";

import { useForm, SubmitHandler } from "react-hook-form";

interface Img {
  img: string;
}

import { SubmitButton } from "@components/List/SubmitButton";

const Add = ({ resources }) => {
  console.log(resources);
  const router = useRouter();

  const { loading: loadingClients, data: clientsData } = useGetAllClient();

  const initialCaseStudies = React.useMemo(() => {
    if (!resources?.caseStudies) return null;
    if (typeof resources.caseStudies === "string") {
      try {
        return JSON.parse(resources.caseStudies);
      } catch {
        return { value: resources.caseStudies, label: resources.caseStudies };
      }
    }
    return resources.caseStudies;
  }, [resources?.caseStudies]);

  const [caseStudies, setcaseStudies] = React.useState(initialCaseStudies);

  const [contentTypes, setcontentTypes] = React.useState(
    resources.contentTypes
  );
  const [topics, settopics] = React.useState(resources.topics);

  const [reportAvatar, setreportAvatar] = React.useState(
    resources.reportAvatar
  );
  const [testimonialImage, settestimonialImage] = React.useState(
    resources.testimonialImage
  );
  const [reportPdf, setreportPdf] = React.useState(resources.reportPdf);
  const [testimonialDescription, settestimonialDescription] = React.useState(
    resources.testimonialDescription
  );
  const [testimonialDesignation, settestimonialDesignation] = React.useState(
    resources.testimoniaDesignation
  );

  type Inputs = {
    testimonialName: String;

    pdf: String;

    video: string;

    youtubeUrl: string;
  };

  const [add, { data: data2, error: err2, loading: loading3 }] = useEditTest();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (testimonialImage === null) {
      toast.error("Upload Image");
    } else if (!caseStudies) {
      toast.error("Select Case Study");
    } else {
      const set = {
        testimonialImage,
        status,
        id: resources.id,
        testimonialDescription,
        testimoniaDesignation: testimonialDesignation,
        caseStudies: JSON.stringify(caseStudies),
        ...data,
      };

      add({ variables: set });
    }
  };

  if (data2) {
    router.push("/testimonials");
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
        router.push("/testimonials");
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
              testimonialImage={testimonialImage}
              settestimonialImage={settestimonialImage}
              reportPdf={reportPdf}
              setreportPdf={setreportPdf}
              register={register}
              testimonialDescription={testimonialDescription}
              settestimonialDescription={settestimonialDescription}
              topics={topics}
              settopics={settopics}
              contentTypes={contentTypes}
              setcontentTypes={setcontentTypes}
              errors={errors}
              data={resources}
              testimonialDesignation={testimonialDesignation}
              settestimonialDesignation={settestimonialDesignation}
              caseStudies={caseStudies}
              setcaseStudies={setcaseStudies}
              clientsData={clientsData}
              loadingClients={loadingClients}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Add;
