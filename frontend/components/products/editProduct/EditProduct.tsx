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

const EditProduct = ({ data }) => {
  console.log(data);
  const router = useRouter();
  const [logo1, setlogo1] = React.useState(data?.heroSection.image);
  const [logo2, setlogo2] = React.useState("");
  const [logo3, setlogo3] = React.useState("");
  const [logo4, setlogo4] = React.useState("");

  const [heroSectionParagraph, setHeroSectionParagraph] = React.useState(
    data?.heroSection?.paragraph
  );

  type Inputs = {
    title: String;
    location: String;
    pdf: String;

    video: string;
  };

  const [add, { data: data2, error: err2, loading: loading3 }] =
    useEditAwards();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [date, setDate] = useState(new Date());

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (setlogo1 === null) {
      toast.error("Upload Image");
    } else {
      const heroSection = {
        image: logo1,
        paragraph: heroSectionParagraph,
        title: data.title,
      };
      const set = {
        heroSection: JSON.stringify(heroSection),
      };
      console.log(set, "sdds");

      // add({ variables: set });
    }
  };

  if (data2) {
    router.push("/awards");
  }

  const [status, setStatus] = useState(data?.status);

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
        router.push("/products");
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
              heroSectionParagraph={heroSectionParagraph}
              setHeroSectionParagraph={setHeroSectionParagraph}
              logo1={logo1}
              logo2={logo2}
              logo3={logo3}
              logo4={logo4}
              setlogo1={setlogo1}
              setlogo2={setlogo2}
              setlogo3={setlogo3}
              setlogo4={setlogo4}
              errors={errors}
              data={data}
              date={date}
              setDate={setDate}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EditProduct;
