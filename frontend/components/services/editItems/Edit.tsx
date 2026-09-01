import React from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import { useRouter } from "next/router";
import ImageUpload from "@components/List/ImageUpload";
import { useMutation, gql } from "@apollo/client";
import SvgUpload from "@components/List/SvgUpload";
import Image from "next/image";
import { toast } from "react-toastify";
import { useEditServices, useGetAllTeam } from "@apolloo/actions";
import Video from "@components/List/video";
import { Section } from "@components/clients/editItems/Style";
import Items from "@components/List/Items";
import { useForm, SubmitHandler } from "react-hook-form";
import Description from "@components/List/Description";
import UplodSvg from "@components/svg/UplodSvg";
import Select from "react-select";
interface Img {
  img: string;
}
import NoSSR from "react-no-ssr";
import Danger from "@components/svg/Danger";
import ImageLayout from "@Image";
import { SubmitButton } from "@components/List/SubmitButton";
import ImageUploadLabel from "@components/List/ImageUploadLabel";
const Add = ({ services }) => {
  const modules = {
    toolbar: [[{ header: [1, 2, false] }]],
  };

  const [servicesVideo, setservicesVideo] = React.useState(
    services.servicesVideo
  );
  const [state, setstate] = React.useState(false);
  const [state2, setstate2] = React.useState(false);
  const [state3, setstate3] = React.useState(false);
  const [state4, setstate4] = React.useState(false);
  const [svg, setSvg] = React.useState(services.svg);
  const [servicesNameHeading, setservicesNameHeading] = React.useState(
    services.servicesHeading
  );
  const [cover, setCover] = React.useState(services.servicesCover);
  const [servicesAvatar, setAvatr] = React.useState(services.servicesAvatar);
  const router = useRouter();
  const [servicesPara1, setservicesPara1] = React.useState(
    services.servicesPara1
  );
  const [servicesImg1, setservicesImg1] = React.useState(services.servicesImg1);
  const [servicesImg2, setservicesImg2] = React.useState(services.servicesImg2);

  const [expert, setexpert] = React.useState(services.expert);
  const coverImage = async (data: any) => {
    await setCover(data);
    await setstate(false);

    await toast.success("Image Upload");
  };
  const chImg1 = async (data: any) => {
    await setservicesImg1(data);
    await setstate2(false);

    await toast.success("Image Upload");
  };

  const chImg2 = async (data: any) => {
    await setservicesImg2(data);
    await setstate3(false);

    await toast.success("Image Upload");
  };
  const avatrImg = async (data: any) => {
    await setAvatr(data);
    await setstate4(false);

    await toast.success("Image Upload");
  };
  const [content, setContent] = React.useState<
    Array<{
      capabilities: string;
    }>
  >(services.capabilities);

  type Inputs = {
    servicesHeading1: String;
    servicesHeading2: String;
    servicesName: String;
    id: String;
    servicesPara2: String;
  };

  const { loading: loading2, data, error } = useGetAllTeam();
  const [edit, { data: data2, error: err2, loading: loading3 }] =
    useEditServices();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const set = {
      id: services.id,
      servicesVideo,
      servicesAvatar,
      servicesCover: cover,

      servicesPara1,

      servicesHeading: servicesNameHeading,
      capabilities: JSON.stringify(content),
      expert: JSON.stringify(expert),
      svg,
      status,
      ...data,
    };

    edit({ variables: set });
  };
  const [status, setStatus] = React.useState(services.status);

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
  if (data2) {
    router.push("/services");
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
                <h2>Edit Services </h2>
              </div>

              <div className="img">
                <div className="wrapper">
                  <label onClick={() => setstate(true)}>
                    <UplodSvg />
                  </label>

                  <div className="dp">
                    <div className="dp-wrapper">
                      <label onClick={() => setstate4(true)}>
                        <UplodSvg />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* register your input into the hook by invoking the "register" function */}
              <div className="input-field">
                <label>Services Name</label>
                <input
                  defaultValue={services.servicesName}
                  id={errors.servicesName ? "active" : ""}
                  {...register("servicesName", { required: true })}
                  placeholder="Services Name"
                />
                {errors.servicesName && (
                  <span id="error">
                    {" "}
                    <Danger /> <li>Services Name is required</li>
                  </span>
                )}
              </div>

              <div className="input-field">
                <label>Add Expert</label>
                {loading2 ? (
                  <div> Loading...... </div>
                ) : (
                  <NoSSR>
                    {console.log(data?.getAllTeamMember)}
                    <Select
                      options={data?.getAllTeamMember.map((t) => ({
                        value: t.id,
                        label: t.memberName,
                      }))}
                      isMulti
                      defaultValue={expert}
                      onChange={setexpert}
                    />
                  </NoSSR>
                )}
              </div>
              <div className="input-field">
                <label> Banner Paragraph</label>
                <textarea
                  defaultValue={services.servicesPara2}
                  id={errors.servicesPara2 ? "active" : ""}
                  {...register("servicesPara2", { required: true })}
                  placeholder="Banner Paragraph"
                />
                {errors.servicesPara2 && (
                  <span id="error">
                    {" "}
                    <Danger /> <li>Value is required</li>
                  </span>
                )}
              </div>

              <div className="input-field">
                <label>Services Heading</label>
                <input
                  defaultValue={services.servicesHeading1}
                  id={errors.servicesHeading1 ? "active" : ""}
                  {...register("servicesHeading1", { required: true })}
                  placeholder="Services Heading1"
                />
                {errors.servicesHeading1 && (
                  <span id="error">
                    {" "}
                    <Danger /> <li>Heading is required</li>
                  </span>
                )}
              </div>

              <Description
                title={"Service Parargraph"}
                description={servicesPara1}
                setDescription={setservicesPara1}
              />

              <ImageUploadLabel
                img={servicesAvatar}
                setImage={setAvatr}
                name={"Service Avatar 	(360 × 479)"}
              />

              <ImageUploadLabel
                img={cover}
                setImage={setCover}
                name={"Service Cover (	486 × 242)"}
              />
              <Items
                content={content}
                setContent={setContent}
                id={"Capabilities"}
              />
              {/* <div className="status">
              <label>Status ({active ? "active" : "nonactive"}) </label>
              <Switch
                checked={active}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </div> */}

              <SvgUpload svg={svg} setSvg={setSvg} />
            </div>
          </div>
        </div>
      </div>
      {state && <ImageUpload setstate={setstate} set={coverImage} />}
      {state2 && <ImageUpload setstate={setstate2} set={chImg1} />}
      {state3 && <ImageUpload setstate={setstate3} set={chImg2} />}
      {state4 && <ImageUpload setstate={setstate4} set={avatrImg} />}
    </Section>
  );
};

export default Add;
