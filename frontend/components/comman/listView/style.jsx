import styled from "styled-components";

export const Section = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .arr {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      .img-arr {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        flex-direction: column;
        .list {
          width: 70%;

          display: flex;
          justify-content: space-between;
          align-items: center;

          .wrapper {
            width: 4rem;
            height: 4rem;
            position: relative;
          }
          p {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
          }
        }
      }
    }
  }
`;
