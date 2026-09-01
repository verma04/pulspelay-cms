import React from "react";
import { Section } from "./style";

const Error = () => {
  return (
    <Section>
      <div className="text">
        <h1>404 Error</h1>
        <h2>Couldn't launch :(</h2>
        <h3>
          Page Not Found - lets take you <a href="/">BACK</a>
        </h3>
      </div>
    </Section>
  );
};

export default Error;
