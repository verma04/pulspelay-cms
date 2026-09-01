import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;

  display: flex;
  background-color: white;
  justify-content: center;
  .publish {
    width: 80%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .publish-box {
      margin-top: 10%;

      height: 70%;
      width: 47%;
      display: flex;
      justify-content: center;
      align-items: center;

      .preview {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        width: 90%;
        label {
          margin-bottom: 1rem;
        }
        .box {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;

          height: 20rem;
          .wrapper {
            height: 100%;
            position: relative;
            width: 100%;
            label {
              position: absolute;
              z-index: 1000;
              bottom: 5%;
              right: 5%;
            }
          }
        }
        input {
          margin-top: 1rem;
          margin-bottom: 1rem;
          border: none;
          position: relative;
          border-bottom: 1px solid grey;
        }
        input::after {
          width: 100%;
          position: absolute;

          height: 1%;

          top: 10%;
        }
      }

      .left-box {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        width: 90%;
        .react-tagsinput {
          background: #fafafa !important;
          span {
            border: none;
            color: white;
          }
        }

        .btn {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 2rem;
          input {
            z-index: 1000;
            cursor: pointer;
            color: white;
            background-color: #d0469d;
            border: none;
            padding: 0.5rem;
            border-radius: 0.5rem;
          }
        }
        p {
          margin-bottom: 2rem;
          font-size: 1.3rem;
          span {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;
