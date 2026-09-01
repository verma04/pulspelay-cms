import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    animation: appear 1s ease-in forwards;
    animation-delay: 1.8s;
  }
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  a {
    color: #f66947;
    text-decoration: none;
  }
`;
