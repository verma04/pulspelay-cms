import React from "react";
import { Section } from "../../clients/editItems/Style";
import { useRouter } from "next/router";
import ImageUpload from "@components/List/ImageUpload";
import { useMutation, gql } from "@apollo/client";
import Image from "next/image";
import { toast } from "react-toastify";
import { useAddBlog } from "@apolloo/actions";
import { useForm, SubmitHandler } from "react-hook-form";
import UplodSvg from "@components/svg/UplodSvg";
import Select from "react-select";
import { error } from "console";
import ImageLayout from "@Image";
import { SubmitButton } from "@components/List/SubmitButton";
import ImageUploadLabel from "@components/List/ImageUploadLabel";
import { useBlogCategory } from "@apolloo/actions";
import NoSSR from "react-no-ssr";
import { useAddAwards } from "@apolloo/actions/rewards";
interface Img {
  img: string;
}

const AddAwards = ({ }) => {

  const router = useRouter();



  type Inputs = {
    title: String;
    blogSubTitle: String;
  };

  const [add, { data: data2, error: err2, loading: loading3 }] = useAddAwards();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();


  const onSubmit: SubmitHandler<Inputs> = (data) => {

    const set = {

      ...data,

    };
    add({ variables: set });

  };

  console.log(err2);

  if (data2 && data2.addAwards) {
    router.push(`/awards/${data2.addAwards.id}`);
  }
  return (
    <Section onSubmit={handleSubmit(onSubmit)}>
      <SubmitButton set text={"Add"} loading={loading3} />
      <div data-aos="fade-left" id="myModal" className="modal">
        <div className="modal-content">
          <div className="form">
            <div className="box">
              <div className="head">
                <h2>Add Rewards</h2>
              </div>


              <div className="input-field">
                <label> Title</label>
                <input
                  id={errors.title ? "active" : ""}
                  {...register("title", { required: true })}
                  placeholder="Blog Title"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AddAwards;
