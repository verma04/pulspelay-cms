import React from "react";
import { Section } from "../../clients/editItems/Style";
import { useRouter } from "next/router";
import ImageUpload from "@components/List/ImageUpload";
import { useMutation, gql } from "@apollo/client";
import Image from "next/image";
import { toast } from "react-toastify";
import { useAddNews } from "@apolloo/actions";
import { useForm, SubmitHandler } from "react-hook-form";
import UplodSvg from "@components/svg/UplodSvg";
import Select from "react-select";
import { error } from "console";
import ImageLayout from "@Image";
import { SubmitButton } from "@components/List/SubmitButton";
import ImageUploadLabel from "@components/List/ImageUploadLabel";
import { useBlogCategory } from "@apolloo/actions";
import NoSSR from "react-no-ssr";
interface Img {
  img: string;
}

const Add = ({}) => {
  const [state, setstate] = React.useState(false);
  const [category, setCategory] = React.useState([]);
  const { data, error, loading } = useBlogCategory();

  const [cover, setCover] = React.useState("");

  const router = useRouter();

  const coverImage = async (data: any) => {
    await setCover(data);
    await setstate(false);

    await toast.success("Image Upload");
  };

  type Inputs = {
    newsTitle: String;
    newsSubTitle: String;
  };

  const [add, { data: data2, error: err2, loading: loading3 }] = useAddNews();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const blocks = {
    time: 1552744582955,
    blocks: [
      {
        type: "paragraph",
        data: {
          text: "Write Something....",
        },
      },
    ],
    version: "2.23.2",
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (cover === "") {
      toast.error("Uplaod  Image");
    } else {
      const set = {
        newsAvatar: cover,
        newsAuthor: "Pulse Play Digital",
        newsDescription: JSON.stringify(blocks),
        ...data,
      };
      add({ variables: set });
    }
  };

  if (data2 && data2.addNews) {
    router.push(`/news/${data2.addNews.id}`);
  }
  return (
    <Section onSubmit={handleSubmit(onSubmit)}>
      <SubmitButton set text={"Add"} loading={loading3} />
      <div data-aos="fade-left" id="myModal" className="modal">
        <div className="modal-content">
          <div className="form">
            <div className="box">
              <div className="head">
                <h2>Add Blog</h2>
              </div>

              <ImageUploadLabel
                img={cover}
                setImage={setCover}
                name={"News Cover"}
              />
              <div className="input-field">
                <label>News Title</label>
                <input
                  id={errors.newsTitle ? "active" : ""}
                  {...register("newsTitle", { required: true })}
                  placeholder="Blog Title"
                />
              </div>
              <div className="input-field">
                <label>News SubTitle</label>
                <input
                  id={errors.newsSubTitle ? "active" : ""}
                  {...register("newsSubTitle", { required: true })}
                  placeholder="News  SubTitle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Add;
