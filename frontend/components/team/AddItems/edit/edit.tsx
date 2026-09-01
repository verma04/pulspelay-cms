import React from "react";
import { Section } from "../Style";
import { useRouter } from "next/router";
import ImageUpload from "@components/List/ImageUpload";
import { useMutation, gql } from "@apollo/client";
import Image from "next/image";
import { toast } from "react-toastify";
import {
  useEditMember,
  useGetAllActiveTeam,
  useGetAllCategory,
} from "@apolloo/actions";
import generator from "generate-password";
import Calendar from "react-calendar";
import { useForm, SubmitHandler } from "react-hook-form";
import Description from "../description/description";
import UplodSvg from "@components/svg/UplodSvg";
import Select from "react-select";
import TagsInput from "react-tagsinput";
interface Img {
  img: string;
}
import Slider from "react-rangeslider";
import { Inputs } from "../../../../types/type";
import Switch from "@mui/material/Switch";
import Danger from "@components/svg/Danger";
import NoSSR from "react-no-ssr";
import ImageLayout from "@Image";
const Add = ({ data }) => {
  console.log(data);
  const loading = false;

  // console.log(convert(data.memberDateOfJoinnng))
  const [memberDateOfJoinnng, onmemberDateOfJoinnng] = React.useState(
    new Date(data.memberDateOfJoinnng)
  );

  const password = generator.generate({
    length: 10,
    numbers: true,
  });

  const [memberDOB, onmemberDOB] = React.useState(new Date(data.memberDOB));
  const [state, setstate] = React.useState(false);
  const [state2, setstate2] = React.useState(false);
  const [cover, setCover] = React.useState(data.memberCover);
  const [avatar, setAvtar] = React.useState(data.memberAvatar);
  const [memberWorkType, setmemberWorkType] = React.useState({
    value: data.memberWorkType,
    label: data.memberWorkType,
  });
  const [memberLineManger, setmemberLineManger] = React.useState(
    data.memberLineManger
  );
  const [category, setcategory] = React.useState(data.memberCategory);
  const router = useRouter();
  const [memberDescription, setmemberDescription] = React.useState(
    data.memberDescription
  );
  const [certificate, setcertificate] = React.useState(data.certificate);
  const [interest, setinterest] = React.useState(data.interest);

  const [active, setActive] = React.useState(data.status);
  const [imagine, setimagine] = React.useState(data.rating.imagine);
  const [design, setdesign] = React.useState(data.rating.design);
  const [build, setbuild] = React.useState(data.rating.build);
  const [perform, setperform] = React.useState(data.rating.perform);
  const [dreams, setDreams] = React.useState(data.dreams);
  const [shortDescription, setshortDescription] = React.useState(
    data.shortDescription
  );
  const coverImage = async (data: any) => {
    await setCover(data);
    await setstate(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActive(event.target.checked);
  };

  const coverImage2 = async (data: any) => {
    await setAvtar(data);
    await setstate2(false);
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const work = [
    { value: "Internship", label: "Internship" },
    { value: "Experience", label: "Experience" },
  ];

  const { loading: loading2, data: team, error } = useGetAllActiveTeam();
  const { loading: load, data: data1, error: err } = useGetAllCategory();
  const [edit, { data: data2, error: err2, loading: loading3 }] =
    useEditMember();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (cover === "") {
      toast.error("Uplaod Cover Image");
    }
    if (avatar === "") {
      toast.error("Upload  Member Image");
    } else {
      const set = {
        memberCover: cover,
        memberAvatar: avatar,
        memberLineManger: JSON.stringify(memberLineManger),
        memberDob: memberDOB,
        memberDateOfJoinnng,
        dreams: JSON.stringify(dreams),

        shortDescription,
        memberCategory: JSON.stringify(category),
        memberDescription,
        memberWorkType: memberWorkType.value,
        password,
        interest: JSON.stringify(interest),
        certificate: JSON.stringify(certificate),
        ...data,
        imagine,
        design,
        build,
        perform,
        active,
      };

      edit({ variables: set });
    }
  };

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

  console.log(data.rating);
  if (data2) {
    router.push("/teams");
  }
  return (
    <Section>
      <div data-aos="fade-left" id="myModal" className="modal">
        <div className="modal-content">
          <div className="head">
            <h2>Add Team Member</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <div className="input-field">
              <label>
                Employe Name <li>*</li>
              </label>
              <input
                defaultValue={data.memberName}
                id={errors.memberName ? "active" : ""}
                {...register("memberName", { required: true })}
                placeholder="Employe  Name"
              />
              <input
                defaultValue={data.id}
                {...register("id", { required: true })}
                type="hidden"
              />
              {errors.memberName && (
                <span id="error">
                  <Danger /> <li> Name is required</li>
                </span>
              )}
            </div>

            <div className="input-field">
              <label>
                Employe Personal Email <li>*</li>
              </label>
              <input
                defaultValue={data.memberPersonalEmail}
                id={errors.memberPersonalEmail ? "active" : ""}
                {...register("memberPersonalEmail", { required: true })}
                placeholder="Employe Personal Email"
              />
              {errors.memberPersonalEmail && (
                <span id="error">
                  <Danger /> <li> Email is required</li>
                </span>
              )}
            </div>
            <div className="input-field">
              <label>
                Employe Pulseplay Email <li>*</li>
              </label>
              <input
                defaultValue={data.email}
                id={errors.email ? "active" : ""}
                {...register("email", { required: true })}
                placeholder="Employe PulsePlay Email"
              />
              {errors.email && (
                <span id="error">
                  <Danger /> <li> Email is required</li>
                </span>
              )}
            </div>
            <div className="input-field">
              <label>
                Employe Phone <li>*</li>
              </label>
              <input
                type="number"
                defaultValue={data.memberPhone}
                id={errors.memberPhone ? "active" : ""}
                {...register("memberPhone", { required: true })}
                placeholder="Employe  Phone"
              />
              {errors.memberPhone && (
                <span id="error">
                  <Danger /> <li> Phone is required</li>
                </span>
              )}
            </div>
            <div className="input-field">
              <label>
                Employe Blood Group <li>*</li>
              </label>
              <input
                defaultValue={data.bloodGroup}
                id={errors.bloodGroup ? "active" : ""}
                {...register("bloodGroup", { required: true })}
                placeholder="Employe  Blood Group"
              />
              {errors.bloodGroup && (
                <span id="error">
                  <Danger /> <li> Blood Group is required</li>
                </span>
              )}
            </div>
            <div className="input-field">
              <label>
                Employe WhatsApp Number <li>*</li>
              </label>
              <input
                defaultValue={data.whatsApp}
                type="number"
                id={errors.whatsApp ? "active" : ""}
                {...register("whatsApp", { required: true })}
                placeholder="Employe  WhatsApp Number"
              />
              {errors.whatsApp && (
                <span id="error">
                  <Danger /> <li> WhatsApp Number is required</li>
                </span>
              )}
            </div>

            <div className="input-field">
              <label>
                Employe Designation <li>*</li>
              </label>
              <input
                defaultValue={data.memberDesignation}
                id={errors.memberDesignation ? "active" : ""}
                {...register("memberDesignation", { required: true })}
                placeholder="Employe  Designation"
              />
              {errors.memberDesignation && (
                <span id="error">
                  <Danger /> <li> Designation is required</li>
                </span>
              )}
            </div>
            <div className="input-field">
              <label>
                Category <li>*</li>
              </label>
              <NoSSR>
                {load ? (
                  <div> Loading...... </div>
                ) : (
                  <NoSSR>
                    <Select
                      options={data1?.getAllCategory.map((t) => ({
                        value: t.name,
                        label: t.name,
                      }))}
                      isMulti
                      defaultValue={category}
                      onChange={setcategory}
                    />
                  </NoSSR>
                )}
              </NoSSR>
            </div>

            <div className="input-field">
              <label>
                Date Of Joining <li>*</li>
              </label>
              <Calendar
                onChange={onmemberDateOfJoinnng}
                value={memberDateOfJoinnng}
              />
            </div>
            <div className="input-field">
              <label>
                Date Of Birth <li>*</li>
              </label>
              <Calendar onChange={onmemberDOB} value={memberDOB} />
            </div>

            <div className="input-field">
              <label>
                Work Type <li>*</li>
              </label>
              <NoSSR>
                <Select
                  value={memberWorkType}
                  onChange={setmemberWorkType}
                  options={work}
                />
              </NoSSR>
            </div>
            {/* <div className="input-field">
              <label>
                Password <span>{"auto_genrated"}</span>
              </label>
              <input readOnly placeholder={password} />
            </div> */}

            <div className="input-field">
              <label>
                Reporting Manager <li>*</li>
              </label>

              {loading2 ? (
                <div> Loading......</div>
              ) : (
                <NoSSR>
                  <Select
                    options={team?.getAllActiveTeamMember.map((t) => ({
                      value: t.id,
                      label: t.memberName,
                    }))}
                    defaultValue={memberLineManger}
                    onChange={setmemberLineManger}
                  />
                </NoSSR>
              )}
            </div>

            <div className="input-field">
              <label>
                Address Line1 <li>*</li>
              </label>
              <input
                defaultValue={data.address.addressline1}
                id={errors.addressline1 ? "active" : ""}
                {...register("addressline1", { required: true })}
                placeholder="Address Line1"
              />
              {errors.addressline1 && (
                <span id="error">
                  <Danger /> <li> Address line1 is required</li>
                </span>
              )}
            </div>
            <div className="input-field">
              <label>
                Address Line2 <li>*</li>
              </label>
              <input
                defaultValue={data.address.addressline2}
                id={errors.addressline2 ? "active" : ""}
                {...register("addressline2", { required: true })}
                placeholder="Address Line2"
              />
              {errors.addressline2 && (
                <span id="error">
                  <Danger /> <li> Address line2 is required</li>
                </span>
              )}
            </div>
            <div className="input-field">
              <label>
                City <li>*</li>
              </label>
              <input
                defaultValue={data.address.city}
                id={errors.city ? "active" : ""}
                {...register("city", { required: true })}
                placeholder="Enter City"
              />
              {errors.city && (
                <span id="error">
                  <Danger /> <li> City is required</li>
                </span>
              )}
            </div>
            <div className="input-field">
              <label>
                State <li>*</li>
              </label>
              <input
                defaultValue={data.address.state}
                id={errors.state ? "active" : ""}
                {...register("state", { required: true })}
                placeholder="State"
              />
              {errors.state && (
                <span id="error">
                  <Danger /> <li> State is required</li>
                </span>
              )}
            </div>
            <div className="input-field">
              <label>
                Pincode <li>*</li>
              </label>
              <input
                defaultValue={data.address.pincode}
                type="number"
                id={errors.pincode ? "active" : ""}
                {...register("pincode", { required: true })}
                placeholder="Enter  pincode"
              />
              {errors.pincode && (
                <span id="error">
                  <Danger /> <li> PinCode is required</li>
                </span>
              )}
            </div>

            <div className="input-field">
              <label>
                Select Gender <li>*</li>
              </label>

              <select
                defaultValue={data.gender}
                id={errors.gender ? "active" : ""}
                {...register("gender", { required: true })}
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="other">other</option>
              </select>
              {errors.gender && (
                <span id="error">
                  <Danger /> <li> Gender is required</li>
                </span>
              )}
            </div>

            <div className="input-field">
              <label>
                Select Marital Status <li>*</li>
              </label>

              <select
                defaultValue={data.maritalstatus}
                id={errors.maritalstatus ? "active" : ""}
                {...register("maritalstatus", { required: true })}
              >
                <option value="Not Married">Not Married</option>
                <option value="Married">Married</option>
              </select>
              {errors.maritalstatus && (
                <span id="error">
                  <Danger /> <li> Marital Status is required</li>
                </span>
              )}
            </div>

            <div className="input-field">
              <label>
                Father Name <li>*</li>
              </label>
              <input
                defaultValue={data.family.fatherName}
                id={errors.fatherName ? "active" : ""}
                {...register("fatherName", { required: true })}
                placeholder="Enter  Father Name"
              />
              {errors.fatherName && (
                <span id="error">
                  <Danger /> <li> Father Name is required</li>
                </span>
              )}
            </div>

            <div className="input-field">
              <label>
                Mother Name<li>*</li>
              </label>
              <input
                defaultValue={data.family.motherName}
                id={errors.motherName ? "active" : ""}
                {...register("motherName", { required: true })}
                placeholder="Enter Mother Name"
              />
              {errors.motherName && (
                <span id="error">
                  <Danger /> <li> Mother Name is required</li>
                </span>
              )}
            </div>

            <div className="input-field">
              <label>
                Emergency Phone<li>*</li>
              </label>
              <input
                defaultValue={data.family.emergencyPhone}
                type="number"
                id={errors.emergencyPhone ? "active" : ""}
                {...register("emergencyPhone", { required: true })}
                placeholder="Enter  Emergency Phone"
              />
              {errors.emergencyPhone && (
                <span id="error">
                  <Danger /> <li> Emergency Phone is required</li>
                </span>
              )}
            </div>

            <div className="head">
              <h2>About Us</h2>
            </div>

            <div className="input-field">
              <label>
                Pulse Play ID <li>*</li>
              </label>
              <input
                defaultValue={data.pulseplayID}
                id={errors.pulseplayID ? "active" : ""}
                {...register("pulseplayID", { required: true })}
                placeholder="Pulseplay ID"
              />

              {errors.pulseplayID && (
                <span id="error">
                  <Danger /> <li> PulseplayID is required</li>
                </span>
              )}
            </div>
            <div className="input-field">
              <label>
                Education <li>*</li>
              </label>
              <input
                defaultValue={data.education}
                id={errors.education ? "active" : ""}
                {...register("education", { required: true })}
                placeholder="Higher education"
              />

              {errors.education && (
                <span id="error">
                  <Danger /> <li> Eduction is required</li>
                </span>
              )}
            </div>

            <div className="input-field">
              <label> Add Dreams</label>
              <TagsInput
                inputProps={{
                  className: "react-tagsinput-input",
                  placeholder: "Add",
                }}
                value={dreams}
                onChange={setDreams}
              />
            </div>

            <div className="input-field">
              <label> Add certificate</label>
              <TagsInput
                inputProps={{
                  className: "react-tagsinput-input",
                  placeholder: "Add",
                }}
                value={certificate}
                onChange={setcertificate}
              />
            </div>

            <div className="input-field">
              <label>Interest</label>
              <TagsInput
                inputProps={{
                  className: "react-tagsinput-input",
                  placeholder: "Add",
                }}
                value={interest}
                onChange={setinterest}
              />
            </div>

            <Description
              head={"About Employee"}
              memberDescription={memberDescription}
              setmemberDescription={setmemberDescription}
            />
            <Description
              head={"Short Description"}
              memberDescription={shortDescription}
              setmemberDescription={setshortDescription}
            />
            <div className="input-field">
              <div
                className="slider"
                style={{ width: "100%", backgroundColor: "EF5350" }}
              >
                <label>
                  Imagine ({imagine}) <li>*</li>
                </label>
                <Slider
                  min={1}
                  max={100}
                  value={imagine}
                  onChange={(value) => setimagine(value)}
                />
              </div>
            </div>
            <div className="input-field">
              <div
                className="slider"
                style={{ width: "100%", backgroundColor: "9856A1" }}
              >
                <label>
                  Design ({design}) <li>*</li>
                </label>
                <Slider
                  min={1}
                  max={100}
                  value={design}
                  onChange={(value) => setdesign(value)}
                />
              </div>
            </div>
            <div className="input-field">
              <div
                className="slider"
                style={{ width: "100%", backgroundColor: "FFCC05" }}
              >
                <label>
                  Build ({build}) <li>*</li>
                </label>
                <Slider
                  min={1}
                  max={100}
                  value={build}
                  onChange={(value) => setbuild(value)}
                />
              </div>
            </div>
            <div className="input-field">
              <div
                className="slider"
                style={{ width: "100%", backgroundColor: "EF5350" }}
              >
                <label>
                  Perform ({perform}) <li>*</li>
                </label>
                <Slider
                  min={1}
                  max={100}
                  value={perform}
                  onChange={(value) => setperform(value)}
                />
              </div>
            </div>

            {/* errors will return when field validation fails  */}
            <div className="head">
              <h2>Social Links</h2>
            </div>
            <div className="input-field">
              <label>
                LinkedIn <li>*</li>
              </label>
              <input
                type="url"
                defaultValue={data.social.linkedin}
                id={errors.linkedin ? "active" : ""}
                {...register("linkedin", { required: true })}
                placeholder="linkedin Url"
              />
              {errors.linkedin && (
                <span id="error">
                  <Danger /> <li> Url is required</li>
                </span>
              )}
            </div>

            <div className="input-field">
              <label>Instagram</label>
              <input
                type="url"
                defaultValue={data.social.instagram}
                id={errors.instagram ? "active" : ""}
                {...register("instagram")}
                placeholder="Instagram Url"
              />
            </div>

            <div className="input-field">
              <label>Facebook</label>
              <input
                type="url"
                defaultValue={data.social.facebook}
                id={errors.facebook ? "active" : ""}
                {...register("facebook")}
                placeholder="Facebook  Url"
              />
            </div>
            <div className="input-field">
              <label>Youtube</label>
              <input
                type="url"
                defaultValue={data.social.youtube}
                {...register("youtube")}
                id={errors.youtube ? "active" : ""}
                placeholder="Youtube  Url"
              />
            </div>
            <div className="input-field">
              <label>Twitter</label>
              <input
                type="url"
                defaultValue={data.social.twitter}
                {...register("twitter")}
                id={errors.twitter ? "active" : ""}
                placeholder="Twitter Url"
              />
            </div>
            <div className="input-field">
              <label>Medium</label>
              <input
                type="url"
                defaultValue={data.social.medium}
                {...register("medium")}
                id={errors.medium ? "active" : ""}
                placeholder="Medium Url"
              />
            </div>
            <div className="input-field">
              <label> Dribble</label>
              <input
                type="url"
                defaultValue={data.social.dribble}
                {...register("dribble")}
                id={errors.dribble ? "active" : ""}
                placeholder="Dribble Url"
              />
            </div>
            <div className="input-field">
              <label>Personal Portfolio</label>
              <input
                type="url"
                defaultValue={data.social.portfolio}
                {...register("portfolio")}
                id={errors.portfolio ? "active" : ""}
                placeholder="Portfolio Url"
              />
            </div>

            <div className="input-img">
              <label>
                Employe Image1 (600 × 750 ) <li>*</li>
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
                Employe Image2 (600 × 750 ) <li>*</li>
              </label>

              <div className="wrapper">
                <label onClick={() => setstate2(true)} id="file">
                  Choose file
                </label>

                {avatar === "" ? <p>No file Choosen</p> : <p>{avatar}</p>}

                <label onClick={() => setstate2(true)}>
                  <UplodSvg />
                </label>
              </div>
              {avatar !== "" && (
                <div className="img-wrapper">
                  <ImageLayout
                    alt="Picture of the author"
                    objectFit="contain"
                    src={avatar}
                  />
                  <h4>Preview</h4>
                </div>
              )}
            </div>
            <div className="status">
              <label>Status ({active ? "active" : "nonactive"}) </label>
              <Switch
                checked={active}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </div>

            <div className="btn">
              {loading3 ? (
                <button id="submit" type="button">
                  Update <i className="fa fa-refresh fa-spin"></i>
                </button>
              ) : (
                <button id="submit" type="submit">
                  Update
                </button>
              )}

              <button
                type="button"
                className="cancel"
                onClick={() => router.back()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      {state && <ImageUpload setstate={setstate} set={coverImage} />}
      {state2 && <ImageUpload setstate={setstate} set={coverImage2} />}
    </Section>
  );
};

export default Add;
