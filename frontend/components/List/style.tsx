import styled from "styled-components";

export const Section = styled.section`
  width: 90%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  label {
    margin-bottom: 0.5rem;
  }
  .quill {
    width: 100%;
  }
  .app {
    width: 100%;
  }

  .app .ql-container {
    min-height: 10em;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    background: #fefcfc;
  }

  .app .ql-toolbar {
    background: #eaecec;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
  }
`;
