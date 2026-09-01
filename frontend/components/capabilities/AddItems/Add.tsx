import React from "react";
import { Section } from "@components/team/AddItems/Style";
import { useRouter } from "next/router";
import ImageUpload from "@components/List/ImageUpload";
import { useMutation, gql } from "@apollo/client";
import Image from "next/image";
import { toast } from "react-toastify";
import { useAdcapabilities } from "@apolloo/actions";
import generator from "generate-password";
import Calendar from "react-calendar";
import { useForm, SubmitHandler } from "react-hook-form";
import Description from "./description/description";
import UplodSvg from "@components/svg/UplodSvg";
import { arrayMove } from "@dnd-kit/sortable";
import Select from "react-select";
interface Img {
  img: string;
}
import DragImages from "@components/comman/DragImages";
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
  const [state, setstate] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const [img, setImg] = React.useState<
    Array<{
      id: string;
      avatar: string;
      value: string;
    }>
  >([]);

  async function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setImg((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  type Inputs = {
    capabilitiesTitle: String;
  };
  const [logo, setlogo] = React.useState(null);

  const [add, { data: data2, error, loading: loading3 }] = useAdcapabilities();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const set = {
      capabilitiesDescription: description,
      capabilitiesList: JSON.stringify(img),

      ...data,
    };
    console.log(set);

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
  if (data2 && data2.addCapabilities) {
    router.push("/about-us/capabilities");
  }
  const coverImage = async (data) => {
    await setstate(false);

    setlogo(data);
  };
  return (
    <>
      <Section>
        <div data-aos="fade-left" id="myModal" className="modal">
          <div className="modal-content">
            <div className="head">
              <h2>Add Capabilities </h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <div className="input-field">
                <label>Heading</label>
                <input
                  id={errors.capabilitiesTitle ? "active" : ""}
                  {...register("capabilitiesTitle", { required: true })}
                  placeholder="Capabilities Title"
                />
              </div>

              <Description
                title={"description"}
                description={description}
                setDescription={setDescription}
              />

              {/* @ts-ignore */}
              <DragImages
                logo={logo}
                setlogo={setlogo}
                state={state}
                setstate={setstate}
                img={img}
                setImg={setImg}
                handleDragEnd={handleDragEnd}
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
      {state ? <ImageUpload setstate={setstate} set={coverImage} /> : null}
    </>
  );
};

export default Add;
