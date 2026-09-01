import React from "react";
import { Section } from "./Style";

function AppLoading() {
  return (
    <Section>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Section>
  );
}

export default AppLoading;
