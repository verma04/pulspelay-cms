import React from "react";
import { Section } from "@components/team/AddItems/Style";

import TagsInput from "react-tagsinput";

import { useForm, SubmitHandler } from "react-hook-form";

import UplodSvg from "@components/svg/UplodSvg";
import Select from "react-select";

import Switch from "@mui/material/Switch";
import Danger from "@components/svg/Danger";
import NoSSR from "react-no-ssr";
import ImageLayout from "@Image";
import { useRouter } from "next/router";
import { useManageSeo } from "@apolloo/actions";
import SerpPreview from 'react-serp-preview';
const Add = ({ data1, section, head, category, seo, id }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const values = getValues();

  const [add, { data, loading }] = useManageSeo();
  const router = useRouter();
  const [keyword, setkeyword] = React.useState(seo?.keyword);

  const [title, setTitle] = React.useState(seo.metaTitle);
  const [des, setDes] = React.useState(seo?.metaDescription);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const set = {
      ...data,
      keyword: JSON.stringify(keyword),
      category,
      id,
    };

    add({ variables: set });
  };
  type Inputs = {
    id: Number;
    metaDescription: String;
    metaTitle: String;
  };
  if (data1) {
    router.push(`/${section}`);
  }


  return (
    <Section>
      <div data-aos="fade-left" id="myModal" className="modal">
        <div className="modal-content">
          <div className="head">
            <h2>
              Seo {head} ({category})
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <div className="input-field">
              <label>
                Meta Title <li>*</li>
              </label>
              <input
                defaultValue={seo?.metaTitle}
                id={errors.metaTitle ? "active" : ""}
                {...register("metaTitle", { maxLength: 70 })}
                placeholder="Meta Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <input defaultValue={""} {...register("id")} type="hidden" />
              <span style={{ color: 'green' }} > {title?.length}/70</span>
              {errors.metaTitle && (
                <span id="error">
                  <Danger /> <li>Max Length is 70</li>
                </span>
              )}


            </div>
            <div className="input-field">
              <label>
                Keyword <li>*</li>
              </label>
              <NoSSR>
                <TagsInput
                  inputProps={{
                    className: "react-tagsinput-input",
                    placeholder: "Add",
                  }}
                  value={keyword}
                  onChange={setkeyword}
                />
              </NoSSR>
            </div>

            <div className="input-field">
              <label>
                Meta Description <li>*</li>
              </label>
              <textarea
                defaultValue={seo?.metaDescription}
                id={errors.metaDescription ? "active" : ""}
                {...register("metaDescription", { maxLength: 165 })}
                placeholder="   Meta Description"
                onChange={(e) => setDes(e.target.value)}
              />
              <span style={{ color: 'green' }} > {des?.length}/165</span>

              {errors.metaDescription && (
                <span id="error">
                  <Danger />    <li>Max Length is 165</li>
                </span>
              )}

            </div>
            <div style={{ width: "100%" }} >
              <div style={{ width: '100%', border: "1px solid #EFEAE4", padding: "1rem" }} >
                <SerpPreview
                  title={title}
                  metaDescription={des ? des : " "}
                  url="https://pulseplaydigital.com/*"
                />
              </div>
            </div>

            <div className="btn">
              {loading ? (
                <button id="submit" type="submit">
                  Add <i className="fa fa-refresh fa-spin"></i>
                </button>
              ) : (
                <button id="submit" type="submit">
                  Add
                </button>
              )}

              <button
                type="button"
                className="cancel"
              // onClick={() => router.back()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Add;
