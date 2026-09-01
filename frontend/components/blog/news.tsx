import React, { useState } from "react";

import Table from "@editorjs/table";
import DragDrop from "editorjs-drag-drop";

import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";
import { createReactEditorJS } from "react-editor-js";
import YoutubeEmbed from "editorjs-youtube-embed";
import edjsHTML from "editorjs-html";
import SocialPost from "editorjs-social-post-plugin";
const handleReady = (editor) => {
  new DragDrop(editor);
};

import { useEditorImage, useEditBlog } from "@apolloo/actions";
import { Section } from "./style";
import Toolbar from "./Toolbar";
import Publish from "./Modalup/Publish";

export default function App({ blog }) {
  const [publish, setpublish] = useState(false);

  const publishBlog = () => {
    setpublish(true);
    handleSave();
  };
  const editorCore = React.useRef(null);

  const handleInitialize = React.useCallback((instance) => {
    editorCore.current = instance;
  }, []);

  const handleSave = React.useCallback(async () => {
    const savedData = await editorCore.current.save();

    const edjsParser = edjsHTML();

    let html = edjsParser.parse(savedData);

    const data = {
      id: blog.id,
      blogDescription: JSON.stringify(savedData),
      blogDescriptionHtml: JSON.stringify(html),
    };

    edit({ variables: data });

    console.log(data);
  }, []);
  const ReactEditorJS = createReactEditorJS();
  const [mutate, { loading, error, data: ssdsd }] = useEditorImage();
  const [edit, { loading: load, data }] = useEditBlog();

  return (
    <>
      {publish ? <Publish blog={blog} /> : null}

      <Section>
        <Toolbar load={load} setpublish={publishBlog} />
        <div className="app">
          <ReactEditorJS
            holder="custom"
            autofocus
            defaultValue={JSON.parse(blog.blogDescription)}
            onInitialize={handleInitialize}
            onChange={handleSave}
            tools={{
              table: Table,

              list: List,
              warning: Warning,
              code: Code,

              raw: Raw,
              header: Header,
              quote: Quote,
              youtubeEmbed: YoutubeEmbed,
              marker: Marker,
              checklist: CheckList,
              delimiter: Delimiter,
              inlineCode: InlineCode,
              simpleImage: SimpleImage,
              linkTool: LinkTool,
              socialPost: SocialPost,
              image: {
                class: Image,
                config: {
                  uploader: {
                    async uploadByFile(file) {
                      await mutate({
                        variables: {
                          fileName: `${file.name}`,
                          altName: file.name,
                          file: file,
                        },
                      });

                      return {
                        success: 1,
                        file: {
                          url: `https://pulseplaydigital.sgp1.digitaloceanspaces.com/${file.name}`,
                        },
                      };
                    },
                  },
                },
              },
            }}
          ></ReactEditorJS>
        </div>
      </Section>
    </>
  );
}

{
  /* <input  placeholder='Add ' style={{width:"70%" , height:"5rem" , fontSize:"2rem" ,  border: "none" , borderColor: "transparent" ,  outline: "none" , paddingLeft:"1rem" ,     color: "black" , position:"relative" , borderLeft:"1.5px solid #b3b3b1" }} /> */
}
