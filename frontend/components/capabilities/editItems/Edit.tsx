import React, { useState } from "react";
import { Section } from "@components/team/AddItems/Style";
import { useRouter } from "next/router";
import ImageUpload from "@components/List/ImageUpload";
import { useMutation, gql } from "@apollo/client";
import Image from "next/image";
import { toast } from "react-toastify";
import { useEditcapabilities } from "@apolloo/actions";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import generator from "generate-password";

import { useForm, SubmitHandler } from "react-hook-form";
import Description from "./description/description";

import Drag from "../../comman/listViewEdit/dragImages";
interface Img {
  img: string;
}
import DragImages from "@components/comman/DragImages";
const Add = ({ data }) => {
  console.log(data);
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
  const [logo, setlogo] = React.useState(null);
  const [logo2, setlogo2] = React.useState(null);
  const [state, setstate] = React.useState(false);
  const [state2, setstate2] = React.useState(false);
  const [description, setDescription] = React.useState(
    data.capabilitiesDescription
  );
  const [img, setImg] = React.useState<
    Array<{
      id: string;
      avatar: string;
      value: string;
    }>
  >(data.capabilitiesList);

  type Inputs = {
    id: String;
    capabilitiesTitle: String;
  };

  const [drag, setDrag] = useState(false);
  const [edit, setEdit] = useState("");
  const [del, setDel] = useState("");
  const [add, { data: data2, error, loading: loading3 }] =
    useEditcapabilities();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const coverImage = async (data) => {
    await setstate(false);

    setlogo(data);
  };
  const coverImage2 = async (data) => {
    await setstate2(false);

    setlogo2(data);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const set = {
      capabilitiesDescription: description,
      capabilitiesList: JSON.stringify(img),

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
  if (data2 && data2.editCapabilities) {
    router.push("/capabilities");
  }
  var result = img.map((t) => ({
    name: t.id,
    description: t.value,
    img: t.avatar,
  }));
  const [items, setItems] = React.useState(result);
  const handleDragEnd = (event) => {
    const { active, over } = event;

    console.log(event);

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((i) => i.name === active.id);
        const newIndex = items.findIndex((i) => i.name === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  // const upadte = async () => {
  //   var result = await items.map((t, index) => ({
  //     id: t.name,
  //     sort: index,
  //     memberName: t.description,
  //   }));

  //   await sort({ variables: { sort: JSON.stringify(result) } });
  // };
  return (
    <>
      <Section>
        <div data-aos="fade-left" id="myModal" className="modal">
          <div className="modal-content">
            <div className="head">
              <h2>Edit Capabilities </h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <div className="input-field">
                <label>Heading</label>
                <input
                  defaultValue={data.id}
                  id={errors.id ? "active" : ""}
                  {...register("id", { required: true })}
                  type="hidden"
                />
                <input
                  defaultValue={data.capabilitiesTitle}
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
                logo2={logo2}
                setlogo2={setlogo2}
                state2={state2}
                setstate2={setstate2}
                img={img}
                setImg={setImg}
                edit={edit}
                setEdit={setEdit}
                handleDragEnd={handleDragEnd}
              />
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
      {state2 ? <ImageUpload setstate2={setstate2} set={coverImage2} /> : null}
    </>
  );
};

export default Add;
