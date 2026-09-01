import React from "react";
import { Section } from "@components/team/AddItems/Style";
import { useRouter } from "next/router";
import ImageUpload from "./ImageUpload";
import { useMutation, gql } from "@apollo/client";
import Image from "next/image";
import { toast } from "react-toastify";
import {
  useAddCareer,
  useGetAllTeam,
  useGetAllCategory,
} from "@apolloo/actions";
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
const Add = () => {
  const dp = "https://pulseplay-website.s3.amazonaws.com/20220415-47hf8-ew";
  const coverImg =
    "https://pulseplay-website.s3.amazonaws.com/20220415-egoag-sdds";
  const loading = false;
  const [memberDateOfJoinnng, onmemberDateOfJoinnng] = React.useState(
    new Date()
  );
  var password = generator.generate({
    length: 10,
    numbers: true,
  });
  const [linkEmploye, setlinkEmploye] = React.useState(null);
  const [category, setcategory] = React.useState(null);
  const router = useRouter();
  const [description, setDescription] = React.useState("");

  type Inputs = {
    carrer: String;
    carrerVaccancy: string;
    carrerLocation: String;
    carrerVancy: String;
    carrerDescription: String;
    employeLink: String;
    experience: String;
  };

  const { loading: loading2, data, error } = useGetAllTeam();
  const { loading: load, data: data1, error: err } = useGetAllCategory();
  const [add, { data: data2, error: err2, loading: loading3 }] = useAddCareer();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const set = {
      employeLink: linkEmploye.value,
      carrerCategory: category.value,
      carrerDescription: description,

      ...data,
    };

    add({ variables: set });
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
  if (data2 && data2.addCarrer) {
    console.log(data2);
    router.push("/career");
  }
  return (
    <Section>
      <div data-aos="fade-left" id="myModal" className="modal">
        <div className="modal-content">
          <div className="head">
            <h2>Add Career</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <div className="input-field">
              <label>Career Name</label>
              <input
                id={errors.carrer ? "active" : ""}
                {...register("carrer", { required: true })}
                placeholder="Carrer  Name"
              />
            </div>

            <div className="input-field">
              <label>Carrer Vaccancy</label>
              <input
                id={errors.carrerVaccancy ? "active" : ""}
                {...register("carrerVaccancy", { required: true })}
                placeholder="Carrer Vaccancy"
              />
            </div>
            <div className="input-field">
              <label>Location</label>
              <input
                id={errors.carrerLocation ? "active" : ""}
                {...register("carrerLocation", { required: true })}
                placeholder="Location"
              />
            </div>
            <div className="input-field">
              <label>Experience</label>
              <select {...register("experience")}>
                <option value="">Select Experience </option>
                <option value="Intern">Intern</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>

                <option value="4">4</option>
                <option value="5+">5+</option>
              </select>
            </div>

            <div className="input-field">
              <label>Category </label>
              <NoSSR>
                {loading2 ? (
                  <div> Loading...... </div>
                ) : (
                  <NoSSR>
                    <Select
                      options={data1?.getAllCategory.map((t) => ({
                        value: t.name,
                        label: t.name,
                      }))}
                      defaultValue={category}
                      onChange={setcategory}
                    />
                  </NoSSR>
                )}
              </NoSSR>
            </div>

            <div className="input-field">
              <label>Link Employe</label>
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
                    defaultValue={linkEmploye}
                    onChange={setlinkEmploye}
                  />
                </NoSSR>
              )}
            </div>

            <Description
              title={"Career Description"}
              description={description}
              setDescription={setDescription}
            />
            {/* errors will return when field validation fails  */}
            <div className="btn">
              {loading3 ? (
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
                onClick={() => router.back()}
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
