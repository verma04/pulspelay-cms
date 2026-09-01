import React from "react";
import { Section } from "@components/team/AddItems/Style";
import { useRouter } from "next/router";
import ImageUpload from "@components/List/ImageUpload";
import { useMutation, gql } from "@apollo/client";
import Image from "next/image";
import { toast } from "react-toastify";
import {
  useAddTagImage,
  useGetAllTeam,
  useGetAllCategory,
} from "@apolloo/actions";
import generator from "generate-password";
import Calendar from "react-calendar";
import { useForm, SubmitHandler } from "react-hook-form";
import ImagePreview from "./ImagePreview";
import UplodSvg from "@components/svg/UplodSvg";
import Select from "react-select";

import NoSSR from "react-no-ssr";
import ImageLayout from "@Image";
const Add = () => {
  const loading = false;
  const [memberDateOfJoinnng, onmemberDateOfJoinnng] = React.useState(
    new Date()
  );
  var password = generator.generate({
    length: 10,
    numbers: true,
  });
  const [tag, setTag] = React.useState([]);

  const router = useRouter();

  const [state, setstate] = React.useState(false);
  const [image, setimage] = React.useState("");
  const [caption, setCaption] = React.useState("");

  const imageImage = async (data) => {
    await setimage(data);
    await setstate(false);
  };
  const { loading: loading2, data, error } = useGetAllTeam();
  const [add, { data: data2, error: err2, loading: loading3 }] =
    useAddTagImage();

  const onSubmit = () => {
    if (image === "") {
      toast.error("Add Image to Continue");
    } else {
      const set = {
        image,
        tag: JSON.stringify(tag),
        caption,
      };

      add({ variables: set });
    }
  };

  const errorMessage = (error) => {
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
  if (data2 && data2.addTagedImages) {
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

            <div className="input-field">
              <label>
                Caption or Location <li>*</li>
              </label>
              <input
                onChange={(e) => setCaption(e.target.value)}
                placeholder="caption"
              />
            </div>

            <div className="input-img">
              <label>
                Add Image <li>*</li>
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
            </div>
            {image !== "" && (
              <ImagePreview src={image} markers={tag} setMarkers={setTag} />
            )}
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
