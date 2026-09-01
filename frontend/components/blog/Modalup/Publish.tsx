import React, { useEffect } from "react";
import { Modal } from "./style";
import { motion } from "framer-motion";
import UplodSvg from "@components/svg/UplodSvg";
import Image from "next/image";
import TagsInput from "react-tagsinput";
import { usePublishBlog } from "@apolloo/actions";
import "react-tagsinput/react-tagsinput.css";
import { useForm, SubmitHandler } from "react-hook-form";
import ImageUpload from "@components/List/ImageUpload";
import { useRouter } from "next/router";
import { useBlogCategory } from "@apolloo/actions";
import ImageLayout from "@Image";
import NoSSR from "react-no-ssr";
import Select from "react-select";
function Publish({ blog }) {
  console.log(blog);

  useEffect(() => {
    blog.blogtags.forEach((element) => {
      setTags([...tags, element.value]);
    });
  }, []);

  const [category, setCategory] = React.useState(blog.category);
  const [slug, setSlug] = React.useState(blog.slug);
  const [state, setstate] = React.useState(false);
  const { data, error, loading } = useBlogCategory();
  const [blogTitle, setblogTitle] = React.useState(blog.blogTitle);
  const [blogSubTitle, setblogSubTitle] = React.useState(blog.blogSubTitle);
  const [tags, setTags] = React.useState([]);
  const [cover, setCover] = React.useState(blog.blogAvatar);

  const handleChange = (tags) => {
    setTags(tags);
  };
  const coverImage = async (data: any) => {
    await setCover(data);
    await setstate(false);
  };

  const [add, { data: data2, error: err2, loading: loading3 }] =
    usePublishBlog();
  type Inputs = {
    blogTitle: String;
    blogSubTitle: String;
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
      blogAvatar: cover,
      blogTitle,
      blogSubTitle,
      slug,
      category: JSON.stringify(category),
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

  if (data2 && data2.publishBlog) {
    router.push("/blog");
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
                <label
                  style={{ backgroundColor: "black", padding: "1rem" }}
                  onClick={() => setstate(true)}
                >
                  <UplodSvg />
                </label>
              </div>
            </div>

            <input
              value={blogTitle}
              onChange={(e) => setblogTitle(e.target.value)}
              placeholder="Blog Title"
            />

            <input
              value={blogSubTitle}
              onChange={(e) => setblogSubTitle(e.target.value)}
              placeholder="Blog Subtitle"
            />

            <input
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="Blog Slug"
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

            <NoSSR>
              {loading ? (
                <>Loading....</>
              ) : (
                <Select
                  options={data?.getAllBlogCategory?.map((t) => ({
                    value: t.id,
                    label: t.title,
                  }))}
                  isMulti
                  defaultValue={category}
                  // @ts-ignore
                  onChange={setCategory}
                />
              )}
            </NoSSR>

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
