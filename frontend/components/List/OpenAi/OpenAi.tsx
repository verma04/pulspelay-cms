import React from "react";
import { Section } from "./style";
import useAxios from "axios-hooks";
import axios from "axios";
import { Button } from "@mui/material";
import { useGenerateImage } from "@apolloo/actions";

const OpenAi = ({ openAiImage }) => {
  const [prompt, setPrompt] = React.useState("");
  const [size, setSize] = React.useState("");

  const [add, { data, error, loading }] = useGenerateImage();
  const fetchImage = async () => {
    add({
      variables: {
        prompt,
        size,
      },
    });
  };

  return (
    <Section>
      <main>
        <section className="showcase">
          <form id="image-form">
            <h1>Describe An Image</h1>
            <div className="form-control">
              <input
                onChange={(e) => setPrompt(e.target.value)}
                type="text"
                id="prompt"
                placeholder="Enter Text"
              />
            </div>

            <div className="form-control">
              <select
                onChange={(e) => setSize(e.target.value)}
                name="size"
                id="size"
              >
                <option value="small">Small</option>
                <option value="medium" selected>
                  Medium
                </option>
                <option value="large">Large</option>
              </select>
            </div>
            <button onClick={fetchImage} type="button" className="btn">
              {loading ? "Loading" : "Generate"}
            </button>
          </form>
        </section>
        {console.log(data)}
        <section className="image">
          <div className="image-container">
            <h2 className="msg"></h2>
            {data && data.generateImage && (
              <img
                style={{ objectFit: "contain" }}
                src={data?.generateImage?.img}
                alt=""
                id="image"
              />
            )}
          </div>
          {data?.generateImage?.img && (
            <Button
              variant="contained"
              onClick={() => openAiImage(data?.generateImage?.img)}
            >
              use
            </Button>
          )}
        </section>
      </main>
    </Section>
  );
};

export default OpenAi;
