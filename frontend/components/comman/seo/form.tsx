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
const Add = ({ query, data, add, loading, data1, section }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  const [keyword, setkeyword] = React.useState(data.keyword);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const set = {
      ...data,
      keyword: JSON.stringify(keyword),
    };
    console.log(set);
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
            <h2>Seo {query.set}</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <div className="input-field">
              <label>
                Meta Title <li>*</li>
              </label>
              <input
                defaultValue={data.metaTitle}
                id={errors.metaTitle ? "active" : ""}
                {...register("metaTitle", { maxLength: 70 })}
                placeholder="Meta Title"
              />
              <input
                defaultValue={query.id}
                {...register("id")}
                type="hidden"
              />
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
                defaultValue={data.metaDescription}
                id={errors.metaDescription ? "active" : ""}
                {...register("metaDescription", { maxLength: 165 })}
                placeholder="Meta Description"
              />
              {errors.metaDescription && (
                <span id="error">
                  <Danger /> <li>Max Length is 165</li>
                </span>
              )}
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
