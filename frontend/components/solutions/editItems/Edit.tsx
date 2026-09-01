import React from "react";
import { Section } from "@components/clients/editItems/Style";
import { useRouter } from "next/router";
import ImageUpload from "@components/List/ImageUpload";
import { useMutation, gql } from "@apollo/client";
import Image from "next/image";
import { toast } from "react-toastify";
import {
  useEditSolutions,
  useGetAllTeam,
  useGetAllCategory,
} from "@apolloo/actions";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { SubmitButton } from "@components/List/SubmitButton";
import Items from "@components/List/Items";
import Solutions from "../AddItems/solutions";
import { useForm, SubmitHandler } from "react-hook-form";
import Description from "@components/List/Description";
import UplodSvg from "@components/svg/UplodSvg";
import Select from "react-select";
import SvgUpload from "@components/List/SvgUpload";
interface Img {
  img: string;
}
import NoSSR from "react-no-ssr";
import Danger from "@components/svg/Danger";
import ImageLayout from "@Image";
const Add = ({ solutions }) => {
  const modules = {
    toolbar: [[{ header: [1, 2, false] }]],
  };
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */

  const img = "/20211223-6sle4-assa.png";
  const [svg, setSvg] = React.useState(solutions.svg);
  const [logo, setlogo] = React.useState(img);
  const [state, setstate] = React.useState(false);
  const [state2, setstate2] = React.useState(false);
  const [state3, setstate3] = React.useState(false);
  const [state4, setstate4] = React.useState(false);
  const [state5, setstate5] = React.useState(false);
  const [cover, setCover] = React.useState(solutions.solutionsCover);
  const [solutionsAvatar, setAvatr] = React.useState(solutions.solutionsAvatar);
  const router = useRouter();
  const [solutionsPara1, setsolutionsPara1] = React.useState(
    solutions.solutionsPara1
  );
  const [solutionsHeading, setsolutionsHeading] = React.useState(
    solutions.solutionsHeading
  );
  const [solutionsImg1, setsolutionsImg1] = React.useState(
    solutions.solutionsImg1
  );
  const [solutionsImg2, setsolutionsImg2] = React.useState(
    solutions.solutionsImg2
  );
  const [expert, setexpert] = React.useState(null);
  const coverImage = async (data: any) => {
    await setCover(data);
    await setstate(false);

    await toast.success("Image Upload");
  };
  const chImg1 = async (data: any) => {
    await setsolutionsImg1(data);
    await setstate2(false);

    await toast.success("Image Upload");
  };

  const chImg2 = async (data: any) => {
    await setsolutionsImg2(data);
    await setstate3(false);

    await toast.success("Image Upload");
  };
  const avatrImg = async (data: any) => {
    await setAvatr(data);
    await setstate4(false);

    await toast.success("Image Upload");
  };
  const coverImage2 = async (data: any) => {
    await setlogo(data);
    await setstate5(false);

    await toast.success("Image Upload");
  };
  const [content, setContent] = React.useState<
    Array<{
      list: string;
    }>
  >(solutions.paraList);

  const [list, setList] = React.useState<
    Array<{
      logo: string;
      head: string;
      para: string;
    }>
  >(solutions.list);

  type Inputs = {
    id: String;
    solutionsName: String;
    solutionsHeading1: String;

    solutionsImg1: String;
  };

  const { loading: loading2, data, error } = useGetAllTeam();
  const [edit, { data: data2, error: err2, loading: loading3 }] =
    useEditSolutions();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (cover === "") {
      toast.error("Uplaod Cover Image");
    } else {
      const set = {
        id: solutions.id,
        solutionsAvatar,
        solutionsCover: cover,
        solutionsImg1,
        solutionsImg2,
        solutionsPara1,
        solutionsHeading,
        paraList: JSON.stringify(content),
        list: JSON.stringify(list),
        svg,
        status,

        ...data,
      };

      edit({ variables: set });

      console.log(set);
    }
  };

  const [status, setStatus] = React.useState(solutions.status);
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

  console.log(data2);
  if (data2) {
    router.push("/solutions");
  }

  return (
    <Section onSubmit={handleSubmit(onSubmit)}>
      <SubmitButton
        setStatus={setStatus}
        status={status}
        set
        text={"Update"}
        loading={loading3}
      />
      <div data-aos="fade-left" id="myModal" className="modal">
        <div className="modal-content">
          <div className="form">
            <div className="box">
              <div className="head">
                <h2>EdiT Solutions</h2>
              </div>

              {/* register your input into the hook by invoking the "register" function */}
              <div className="input-field">
                <label>Solutions Name</label>
                <input
                  defaultValue={solutions.solutionsName}
                  id={errors.solutionsName ? "active" : ""}
                  {...register("solutionsName", { required: true })}
                  placeholder="Solutions Name"
                />
                {errors.solutionsName && (
                  <span id="error">
                    <Danger /> <li> Solutions Name is required</li>
                  </span>
                )}
              </div>

              <div className="input-field">
                <label> Solutions Heading</label>
                <input
                  defaultValue={solutions.solutionsHeading1}
                  id={errors.solutionsHeading1 ? "active" : ""}
                  {...register("solutionsHeading1", { required: true })}
                  placeholder="Solutions Heading"
                />
                {errors.solutionsHeading1 && (
                  <span id="error">
                    <Danger /> <li> Solutions Heading Name is required</li>
                  </span>
                )}
              </div>
              <div className="input-field">
                <label> Banner Paragraph</label>
                <textarea
                  defaultValue={solutions.solutionsImg1}
                  id={errors.solutionsImg1 ? "active" : ""}
                  {...register("solutionsImg1", { required: true })}
                  placeholder="Banner Paragraph"
                />
                {errors.solutionsImg1 && (
                  <span id="error">
                    {" "}
                    <Danger /> <li>Value is required</li>
                  </span>
                )}
              </div>

              <Description
                title={"Solutions Parargraph"}
                description={solutionsPara1}
                setDescription={setsolutionsPara1}
              />

              <div className="input-img">
                <label>
                  Solutions Cover ( 486 × 242) <li>*</li>
                </label>
                <div className="wrapper">
                  <label onClick={() => setstate(true)} id="file">
                    Choose file
                  </label>

                  {cover === "" ? <p>No file Choosen</p> : <p>{cover}</p>}

                  <label onClick={() => setstate(true)}>
                    <UplodSvg />
                  </label>
                </div>

                {cover !== "" && (
                  <div className="img-wrapper">
                    <ImageLayout
                      alt="Picture of the author"
                      objectFit="contain"
                      src={cover}
                    />

                    <h4>Preview</h4>
                  </div>
                )}
              </div>

              <div className="input-img">
                <label>
                  Solutions Avatar (360 × 479)<li>*</li>
                </label>
                <div className="wrapper">
                  <label onClick={() => setstate4(true)} id="file">
                    Choose file
                  </label>

                  {solutionsAvatar === "" ? (
                    <p>No file Choosen</p>
                  ) : (
                    <p>{cover}</p>
                  )}

                  <label onClick={() => setstate4(true)}>
                    <UplodSvg />
                  </label>
                </div>

                {solutionsAvatar !== "" && (
                  <div className="img-wrapper">
                    <ImageLayout
                      alt="Picture of the author"
                      objectFit="contain"
                      src={solutionsAvatar}
                    />

                    <h4>Preview</h4>
                  </div>
                )}
              </div>
              <Items content={content} setContent={setContent} id={"list"} />
              <SvgUpload svg={svg} setSvg={setSvg} />

              {/* errors will return when field validation fails  */}
            </div>
          </div>
        </div>
      </div>

      {state && <ImageUpload setstate={setstate} set={coverImage} />}
      {state2 && <ImageUpload setstate={setstate2} set={chImg1} />}
      {state3 && <ImageUpload setstate={setstate3} set={chImg2} />}
      {state4 && <ImageUpload setstate={setstate4} set={avatrImg} />}
      {state5 && <ImageUpload setstate={setstate5} set={coverImage2} />}
    </Section>
  );
};

export default Add;
