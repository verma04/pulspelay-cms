import React from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { Section } from "./style";
import Chat from "./ChatGpt";
function Description({ description, setDescription, title, width }: any) {
  const [value, setValue] = React.useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }, { font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  return (
    <Section style={{ width: width ? width : "" }}>
      <label>{title}</label>
      <div className="app">
        {/* @ts-ignore */}
        <ReactQuill
          modules={modules}
          placeholder={"Write something..."}
          formats={formats}
          value={description}
          onChange={setDescription}
        />
      </div>
      <Chat
        description={description && description.replace(/<\/?[^>]+(>|$)/g, "")}
      />
    </Section>
  );
}

export default Description;
