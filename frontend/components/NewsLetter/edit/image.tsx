import React from "react";
import { Section } from "@components/team/AddItems/Style";
import { useRouter } from "next/router";
import ImageUpload from "@components/List/ImageUpload";
import { useMutation, gql } from "@apollo/client";
import Image from "next/image";
import { toast } from "react-toastify";
import {
  useEditTagImage,
  useGetAllTeam,
  useGetAllCategory,
} from "@apolloo/actions";
import generator from "generate-password";
import Calendar from "react-calendar";
import { useForm, SubmitHandler } from "react-hook-form";

import UplodSvg from "@components/svg/UplodSvg";
import Select from "react-select";
interface Img {
  img: string;
}
import NoSSR from "react-no-ssr";
import ImageLayout from "@Image";
const Add = ({ img }) => {
  console.log(img);
  const loading = false;
  const [memberDateOfJoinnng, onmemberDateOfJoinnng] = React.useState(
    new Date()
  );
  var password = generator.generate({
    length: 10,
    numbers: true,
  });
  const [tag, settag] = React.useState(img.tag);
  const [category, setcategory] = React.useState(null);
  const router = useRouter();
  const [description, setDescription] = React.useState("");

  const [state, setstate] = React.useState(false);
  const [image, setimage] = React.useState(img.image);
  const imageImage = async (data: any) => {
    await setimage(data);
    await setstate(false);
  };
  const { loading: loading2, data, error } = useGetAllTeam();
  const [add, { data: data2, error: err2, loading: loading3 }] =
    useEditTagImage();

  const onSubmit = () => {
    if (image === "") {
      toast.error("Add Image to Continue");
    } else if (tag.length === 0) {
      toast.error("Tag Atlest one to contiiue");
    } else {
      const set = {
        id: img.id,
        image,
        tag: JSON.stringify(tag),
      };

      add({ variables: set });
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
  if (data2 && data2.editTagedImages) {
    router.push("/tag");
  }
  return (
    <Section>
      <div data-aos="fade-left" id="myModal" className="modal">
        <div className="modal-content">
          <div className="head">
            <h2>Add Image</h2>
          </div>

          <form>
            {/* register your input into the hook by invoking the "register" function */}

            <div className="input-img">
              <label>
                Tag <li>*</li>
              </label>

              <div className="wrapper">
                <label onClick={() => setstate(true)} id="file">
                  Choose file
                </label>

                {image === "" ? <p>No file Choosen</p> : <p>{image}</p>}

                <label onClick={() => setstate(true)}>
                  <UplodSvg />
                </label>
              </div>
              {image !== "" && (
                <div className="img-wrapper">
                  <ImageLayout
                    alt="Picture of the author"
                    objectFit="contain"
                    src={image}
                  />
                  <h4>Preview</h4>
                </div>
              )}
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
                    isMulti
                    defaultValue={tag}
                    onChange={settag}
                  />
                </NoSSR>
              )}
            </div>

            <div className="btn">
              {loading3 ? (
                <button id="submit" type="button">
                  Add <i className="fa fa-refresh fa-spin"></i>
                </button>
              ) : (
                <button onClick={() => onSubmit()} id="submit" type="button">
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
      {state && <ImageUpload setstate={setstate} set={imageImage} />}
    </Section>
  );
};

export default Add;
