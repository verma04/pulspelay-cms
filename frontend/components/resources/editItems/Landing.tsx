import Danger from "@components/svg/Danger";
import React from "react";
import Select from "react-select";
import NoSSR from "react-no-ssr";
import ImageUploadLabel from "@components/List/ImageUploadLabel";
import Description from "@components/List/Description";
import { usePdfUpload } from "@apolloo/actions";
import { useGetTopic, useGetTypes } from "@apolloo/actions";
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
  reportImage,
  setreportImage,
  reportDescription,
  setreportDescription,
  reportPdf,
  setreportPdf,
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
  const { data: data1, loading } = useGetTopic();
  const { data: data3, loading: loading2 } = useGetTypes();
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
        <h2>Landing Section</h2>
      </div>
      <div className="input-field">
        <label>
          Title <li>*</li>
        </label>
        <input
          defaultValue={data.title}
          id={errors.title ? "active" : ""}
          {...register("title", { required: true })}
          placeholder="Title"
        />

        {errors.title && (
          <span id="error">
            <Danger /> <li> Title is required</li>
          </span>
        )}
      </div>
      <div className="input-img">
        <label>
          Report Pdf <li>*</li>
        </label>

        <div className="wrapper">
          <label htmlFor="file-input" id="file">
            Choose file
          </label>

          {reportPdf === null || !reportPdf ? (
            <p>No file Choosen</p>
          ) : (
            <p>{reportPdf}</p>
          )}

          <label htmlFor="file-input">
            <UplodSvg />
          </label>

          <input
            onChange={onChange}
            accept="application/pdf,application/vnd.ms-excel"
            type="file"
            placeholder="Title"
            id="file-input"
            style={{
              display: "none",
            }}
          />
        </div>
        {loading3 && <p>Uploading</p>}
      </div>

      <ImageUploadLabel
        img={reportAvatar}
        setImage={setreportAvatar}
        name={"Report Avatar"}
      />
      <div className="input-field">
        <label>
          Landing Short Description <li>*</li>
        </label>
        <textarea
          defaultValue={data.sortDescription}
          id={errors.sortDescription ? "active" : ""}
          {...register("sortDescription", { required: true })}
          placeholder="Description"
        />

        {errors.sortDescription && (
          <span id="error">
            <Danger /> <li> Description is required</li>
          </span>
        )}
      </div>
      <div className="input-field">
        <label>
          Video <li></li>
        </label>
        <input
          defaultValue={data.video}
          id={errors.video ? "active" : ""}
          placeholder="Video"
        />

        {errors.video && (
          <span id="error">
            <Danger /> <li> Video is required</li>
          </span>
        )}
      </div>
      <div className="input-field">
        <label>Topics</label>

        <NoSSR>
          {loading ? (
            <>Loading....</>
          ) : (
            <Select
              options={data1?.getResourcesTopic.map((t) => ({
                value: t.title,
                label: t.title,
              }))}
              isMulti
              defaultValue={topics}
              onChange={settopics}
            />
          )}
        </NoSSR>
      </div>
      <div className="input-field">
        <label>Content Types</label>
        <NoSSR>
          {loading2 ? (
            <>Loading....</>
          ) : (
            <Select
              options={data3?.getResourcesTypes.map((t) => ({
                value: t.title,
                label: t.title,
              }))}
              isMulti
              defaultValue={contentTypes}
              onChange={setcontentTypes}
            />
          )}
        </NoSSR>
      </div>
      <ImageUploadLabel
        img={reportImage}
        setImage={setreportImage}
        name={"Report Image"}
      />
      <Description
        title={"Project Description"}
        description={reportDescription}
        setDescription={setreportDescription}
      />
    </div>
  );
};

export default Landing;
