import Danger from "@components/svg/Danger";
import React, { useEffect } from "react";
import Select from "react-select";
import NoSSR from "react-no-ssr";
import ImageUploadLabel from "@components/List/ImageUploadLabel";
import Description from "@components/List/Description";
import { usePdfUpload } from "@apolloo/actions";
import UplodSvg from "@components/svg/UplodSvg";
const Landing = ({
  register,
  errors,
  data,
  testimonialImage,
  settestimonialImage,
  testimonialDescription,
  settestimonialDescription,
  setreportPdf,
  testimonialDesignation,
  settestimonialDesignation,
  caseStudies,
  setcaseStudies,
  clientsData,
  loadingClients,
}: any) => {
  const [add, { data: data2 }] = usePdfUpload();

  useEffect(() => {
    if (data2?.pdfUpload?.imgUrl) {
      setreportPdf(data2.pdfUpload.imgUrl);
    }
  }, [data2, setreportPdf]);

  return (
    <div className="box">
      <div className="head">
        <h2>
          {caseStudies?.label || data?.caseStudies?.label || "Case Study"} Testimonial
        </h2>
      </div>

      <div className="input-field">
        <label>
          TestimonialName <li>*</li>
        </label>
        <input
          defaultValue={data.testimonialName}
          id={errors.testimonialName ? "active" : ""}
          {...register("testimonialName", { required: true })}
          placeholder="Name"
        />

        {errors.testimonialName && (
          <span id="error">
            <Danger /> <li> Name is required</li>
          </span>
        )}
      </div>

      <Description
        width="50%"
        title={"Designation"}
        description={testimonialDesignation}
        setDescription={settestimonialDesignation}
      />

      <div className="input-field">
        <label>YouTube Video URL</label>
        <input
          defaultValue={data?.youtubeUrl}
          {...register("youtubeUrl")}
          placeholder="https://www.youtube.com/watch?v=..."
        />
      </div>

      <div className="input-field">
        <label>
          Case Studies <li>*</li>
        </label>
        {loadingClients ? (
          <div>Loading case studies...</div>
        ) : (
          <NoSSR>
            <Select
              options={clientsData?.getAllClients?.map((t: any) => ({
                value: t.id,
                label: t.projectName,
              }))}
              value={caseStudies}
              onChange={setcaseStudies}
            />
          </NoSSR>
        )}
      </div>

      <ImageUploadLabel
        img={testimonialImage}
        setImage={settestimonialImage}
        name={"Testimonial Image (520 × 520)"}
      />

      <Description
        title={"Description"}
        description={testimonialDescription}
        setDescription={settestimonialDescription}
      />
    </div>
  );
};

export default Landing;

