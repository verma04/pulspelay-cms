import Danger from "@components/svg/Danger";
import React from "react";
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
  topics,
  settopics,
  contentTypes,
  setcontentTypes,
  reportAvatar,
  setreportAvatar,
  testimonialImage,
  settestimonialImage,
  testimonialDescription,
  settestimonialDescription,
  reportPdf,
  setreportPdf,
  testimonialDesignation,
  settestimonialDesignation,
}) => {
  const Topics = [
    "Media Buying",
    "SEO",
    "Lead Gen",
    "D2C",
    "Customer Data Platform (CDP)",
  ];
  const ContentTypes = [
    "Guide",
    "Case Study",
    "Video",
    "Report",
    "Training",
    "Webinar",
  ];
  const [add, { data: data2, error: err2, loading: loading3 }] = usePdfUpload();
  const onChange = async (e) => {
    const data = {
      file: e.target.files[0],
    };
    add({ variables: data });
  };

  console.log(data2);
  if (data2) {
    setreportPdf(data2.pdfUpload.imgUrl);
  }
  return (
    <div className="box">
      <div className="head">
        <h2>{data.caseStudies.label} Testimonial</h2>
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
        <input readOnly disabled defaultValue={data.caseStudies.label} />
      </div>
      <ImageUploadLabel
        img={testimonialImage}
        setImage={settestimonialImage}
        name={"Testimonial Image 	(520 × 520)"}
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
