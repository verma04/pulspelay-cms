import React from "react";
import { Section } from "./style";
import useAxios from "axios-hooks";
import axios from "axios";
import { Button } from "@mui/material";
import { useCheckGrammar, useGenerateImage } from "@apolloo/actions";
import { LoadingButton } from "@mui/lab";

const Chat = ({ description }) => {
  const [prompt, setPrompt] = React.useState("");
  const [size, setSize] = React.useState("");

  const [add, { data, error, loading }] = useCheckGrammar();
  const fetchImage = async () => {
    add({
      variables: {
        prompt: description,
      },
    });
  };

  return (
    <Section>
      <main>
        {loading ? (
          <LoadingButton type="button" variant="outlined">
            Loading
          </LoadingButton>
        ) : (
          <Button onClick={() => fetchImage()} variant="contained">
            Check Grammar
          </Button>
        )}

        <p
          dangerouslySetInnerHTML={{ __html: data?.checkGrammar?.img }}
          style={{ margin: "2rem" }}
        ></p>
      </main>
    </Section>
  );
};

export default Chat;
