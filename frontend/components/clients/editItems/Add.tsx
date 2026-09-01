import React, { useState } from "react";
import { Section } from "./Style";
import { Router, useRouter } from "next/router";

import Landing from "./Landing";

import { toast } from "react-toastify";
import Items from "@components/List/Items";
import {
  useEditClient,
  useGetAllTeam,
  useGetAllSolutions,
  useGetAllServices,
} from "@apolloo/actions";
import Video from "@components/List/video";
import generator from "generate-password";
import Calendar from "react-calendar";
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
import ColorPicker from "@components/comman/color-picker/ColorPicker";
import { Website } from "./Website";
import { Social } from "./Social";
import { VideoProduction } from "./VideoProduction";
import { ProjectInformation } from "./ProjectInformation";
import { SubmitButton } from "@components/List/SubmitButton";
import Category from "./Category";
import { OutReach } from "./outreach";
import OutComes from "./outcomes";
import Branding from "./Branding";
const Add = ({ clients }) => {
  const [goAway, setGoAway] = useState("");

  const [services, setservices] = React.useState(clients.services);
  const [employeeWork, setemployeeWork] = React.useState(clients.employeeWork);

  const [projectDescription, setprojectDescription] = React.useState(
    clients.projectDescription
  );

  const [projectLogo, setprojectLogo] = React.useState(clients.projectLogo);
  const [websiteImgLeft, setwebsiteImgLeft] = React.useState(
    clients.website.websiteImgLeft
  );
  const [websiteImgRight, setwebsiteImgRight] = React.useState(
    clients.website.websiteImgRight
  );
  const [projectLogoTransparent, setprojectLogoTransparent] = React.useState(
    clients.projectLogoTransparent
  );
  const [branding, setBranding] = React.useState(clients.branding.branding);
  const [clientColorTheme, setclientColorTheme] = React.useState(
    clients.clientColorTheme
  );
  const [blackLogo, setBlackLogo] = React.useState(
    clients.blackAndWhiteLogo.logo
  );
  const [isVisible, setIsVisible] = React.useState(
    clients.blackAndWhiteLogo.isVisible
  );

  const [outReach, setoutReach] = React.useState(clients.outReach.outReach);
  const [outReach2, setoutReach2] = React.useState(clients.outReach.outReach2);
  const [outReach3, setoutReach3] = React.useState(clients.outReach.outReach3);
  const [outReach4, setoutReach4] = React.useState(clients.outReach.outReach4);

  console.log(clients.social);
  const [mobile, setMobile] = React.useState(clients.social.mobile);
  const [column1Img, setcolumn1Img] = React.useState(clients.social.column1Img);
  const [column1Img2, setcolumn1Img2] = React.useState(
    clients.social.column1Img2
  );

  const [column2Img, setcolumn2Img] = React.useState(clients.social.column2Img);
  const [column2Img2, setcolumn2Img2] = React.useState(
    clients.social.column2Img2
  );
  const [column2Img3, setcolumn2Img3] = React.useState(
    clients.social.column2Img3
  );

  const [column3Img, setcolumn3Img] = React.useState(clients.social.column3Img);
  const [column3Img2, setcolumn3Img2] = React.useState(
    clients.social.column3Img2
  );
  const [column3Img3, setcolumn3Img3] = React.useState(
    clients.social.column3Img3
  );
  const [column3Img4, setcolumn3Img4] = React.useState(
    clients.social.column3Img4
  );

  const [column4Img, setcolumn4Img] = React.useState(clients.social.column4Img);
  const [projectIndustry, setprojectIndustry] = React.useState<string[]>(
    clients.projectIndustry
  );

  const router = useRouter();

  const [area, setArea] = React.useState<
    Array<{
      label: string;
    }>
  >(clients.area);
  const [tools, setTools] = React.useState<
    Array<{
      label: string;
    }>
  >(clients.tools);

  const [list, setList] = React.useState<
    Array<{
      title: string;
      label: string;
    }>
  >(clients.outcomes.list);

  type Inputs = {
    projectName: String;
    id: String;
    year: String;
    landingDescription: string;

    location: string;
    websiteUrl: string;
    projectVideo: string;
    taglines: string;
    singleWord: string;
    areas: string;
  };

  const { loading: loading2, data, error } = useGetAllTeam();
  const { loading: load, data: data1, error: err } = useGetAllSolutions();
  const [add, { data: data2, error: err2, loading: loading3 }] =
    useEditClient();
  const { loading, data: data3 } = useGetAllServices();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (
      projectLogo === null ||
      projectLogoTransparent === null ||
      branding === null
    )
      toast.error("Upload Requird Image");
    else {
      const websiteClient = {
        website,
        websiteUrl: data.websiteUrl,
        websiteImgLeft,
        websiteImgRight,
      };
      const brandingClient = {
        branding,
        taglines: data.taglines,
        singleWord: data.singleWord,
      };

      const socialClient = {
        social,
        mobile,
        column1Img,

        column1Img2,

        column2Img,

        column2Img2,

        column2Img3,

        column3Img,

        column3Img2,

        column3Img3,

        column3Img4,

        column4Img,
      };
      const videoClient = {
        video,
        url: data.projectVideo,
      };
      const outReachClient = {
        outreach,
        outReach,
        outReach2,
        outReach3,
        outReach4,
      };
      const outcomesClient = {
        outcomes,
        list,
      };

      const blackAndWhiteLogo = {
        logo: blackLogo,
        isVisible,
      };

      const set = {
        id: clients.id,
        projectLogo,
        blackAndWhiteLogo: JSON.stringify(blackAndWhiteLogo),
        projectLogoTransparent,
        clientColorTheme,
        employeeWork: JSON.stringify(employeeWork),
        status,
        projectIndustry: JSON.stringify(projectIndustry),
        services: JSON.stringify(services),

        projectDescription,
        area: JSON.stringify(area),
        tools: JSON.stringify(tools),
        website: JSON.stringify(websiteClient),
        branding: JSON.stringify(brandingClient),

        social: JSON.stringify(socialClient),
        video: JSON.stringify(videoClient),
        outReach: JSON.stringify(outReachClient),
        outcomes: JSON.stringify(outcomesClient),

        ...data,
      };

      add({ variables: set });
    }
  };

  if (data2) {
    router.push("/clients");
  }

  const [website, setWebsite] = useState(clients.website.website);
  const [social, setSocial] = useState(clients.social.social);
  const [video, setVideo] = useState(clients.video.video);
  const [status, setStatus] = useState(clients.status);
  const [outreach, setoutreach] = useState(clients.outReach.outreach);
  const [outcomes, setoutcomes] = useState(clients.outcomes.outcomes);
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
        router.push("/clients");
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
            <Category
              website={website}
              setWebsite={setWebsite}
              social={social}
              setSocial={setSocial}
              video={video}
              setVideo={setVideo}
              outreach={outreach}
              setoutreach={setoutreach}
              outcomes={outcomes}
              setoutcomes={setoutcomes}
            />
            <Landing register={register} errors={errors} clients={clients} />

            <ProjectInformation
              blackLogo={blackLogo}
              setBlackLogo={setBlackLogo}
              clientColorTheme={clientColorTheme}
              setclientColorTheme={setclientColorTheme}
              employeeWork={employeeWork}
              setemployeeWork={setemployeeWork}
              services={services}
              setservices={setservices}
              projectIndustry={projectIndustry}
              setprojectIndustry={setprojectIndustry}
              projectLogo={projectLogo}
              setprojectLogo={setprojectLogo}
              projectLogoTransparent={projectLogoTransparent}
              setprojectLogoTransparent={setprojectLogoTransparent}
              projectDescription={projectDescription}
              setprojectDescription={setprojectDescription}
              register={register}
              errors={errors}
              area={area}
              tools={tools}
              setTools={setTools}
              setArea={setArea}
              clients={clients}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
            />
            {outcomes && (
              <OutComes content={list} setContent={setList} id={"Outcomes"} />
            )}
            {website && (
              <Website
                register={register}
                errors={errors}
                websiteImgLeft={websiteImgLeft}
                websiteImgRight={websiteImgRight}
                setwebsiteImgLeft={setwebsiteImgLeft}
                setwebsiteImgRight={setwebsiteImgRight}
                clients={clients}
              />
            )}
            <Branding
              branding={branding}
              setbranding={setBranding}
              register={register}
              errors={errors}
              clients={clients}
            />

            {social && (
              <Social
                mobile={mobile}
                setMobile={setMobile}
                column1Img={column1Img}
                setcolumn1Img={setcolumn1Img}
                column1Img2={column1Img2}
                setcolumn1Img2={setcolumn1Img2}
                column2Img={column2Img}
                setcolumn2Img={setcolumn2Img}
                column2Img2={column2Img2}
                setcolumn2Img2={setcolumn2Img2}
                column2Img3={column2Img3}
                setcolumn2Img3={setcolumn2Img3}
                column3Img={column3Img}
                setcolumn3Img={setcolumn3Img}
                column3Img2={column3Img2}
                setcolumn3Img2={setcolumn3Img2}
                column3Img3={column3Img3}
                setcolumn3Img3={setcolumn3Img3}
                column3Img4={column3Img4}
                setcolumn3Img4={setcolumn3Img4}
                column4Img={column4Img}
                setcolumn4Img={setcolumn4Img}
              />
            )}

            {video && (
              <VideoProduction
                register={register}
                errors={errors}
                clients={clients}
              />
            )}
            {outreach && (
              <OutReach
                outreach={outReach}
                setoutReach={setoutReach}
                outreach2={outReach2}
                setoutReach2={setoutReach2}
                outreach3={outReach3}
                setoutReach3={setoutReach3}
                outreach4={outReach4}
                setoutReach4={setoutReach4}
              />
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Add;
