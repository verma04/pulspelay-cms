import React, { useEffect } from "react";
import { Modal } from "./style";
import { motion } from "framer-motion";
import UplodSvg from "@components/svg/UplodSvg";
import Image from "next/image";
import TagsInput from "react-tagsinput";
import { usePublishNews } from "@apolloo/actions";
import "react-tagsinput/react-tagsinput.css";
import { useForm, SubmitHandler } from "react-hook-form";
import ImageUpload from "@components/List/ImageUpload";
import { useRouter } from "next/router";

import ImageLayout from "@Image";
import NoSSR from "react-no-ssr";
import Select from "react-select";
function Publish({ blog }) {
  console.log(blog);

  useEffect(() => {
    blog.newstags.forEach((element) => {
      setTags([...tags, element.value]);
    });
  }, []);

  const [state, setstate] = React.useState(false);

  const [newsTitle, setnewsTitle] = React.useState(blog.newsTitle);
  const [newsSubTitle, setnewsSubTitle] = React.useState(blog.newsSubTitle);
  const [tags, setTags] = React.useState([]);
  const [cover, setCover] = React.useState(blog.newsAvatar);

  const handleChange = (tags) => {
    setTags(tags);
  };
  const coverImage = async (data: any) => {
    await setCover(data);
    await setstate(false);
  };

  const [add, { data: data2, error: err2, loading: loading3 }] =
    usePublishNews();
  type Inputs = {
    newsTitle: String;
    newsSubTitle: String;
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = () => {
    const data = {
      id: blog.id,
      newsAvatar: cover,
      newsTitle,
      newsSubTitle,

      tags: JSON.stringify(
        tags.map((t) => ({
          value: t,
        }))
      ),
      publish: true,
    };

    add({ variables: data });
  };

  const router = useRouter();

  if (data2 && data2.publishNews) {
    router.push("/news");
  }

  return (
    <Modal>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 1 }}
        className="publish"
      >
        <div className="publish-box">
          <div className="preview">
            <label>Story Preview</label>

            <div className="box">
              <div className="wrapper">
                <ImageLayout src={cover} alt="logo" objectFit="cover" />
                <label onClick={() => setstate(true)}>
                  <UplodSvg />
                </label>
              </div>
            </div>

            <input
              value={newsTitle}
              onChange={(e) => setnewsTitle(e.target.value)}
              placeholder="Blog Title"
            />

            <input
              value={newsSubTitle}
              onChange={(e) => setnewsSubTitle(e.target.value)}
              placeholder="Blog Subtitle"
            />
          </div>
        </div>
        <div className="publish-box">
          <div className="left-box">
            <p>
              Publishing to: <span>{blog.blogAuthor}</span>{" "}
            </p>

            <p>
              Add or change tags (up to 5) so readers know what your story is
              about
            </p>

            <TagsInput value={tags} onChange={handleChange} />

            <div className="btn">
              {loading3 ? (
                <button id="submit" type="button">
                  Submit <i className="fa fa-refresh fa-spin"></i>
                </button>
              ) : (
                <button onClick={() => onSubmit()} id="submit" type="submit">
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
      {state && <ImageUpload setstate={setstate} set={coverImage} />}
    </Modal>
  );
}

export default Publish;
