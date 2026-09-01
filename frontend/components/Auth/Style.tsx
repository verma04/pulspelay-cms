import styled from "styled-components";

export const Section = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-image: url("https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/421554606_875524401250631_90135830576259621_n.jpg");
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 100vh; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  a {
    font-size: 1rem;
  }
  @media (min-width: 1025px) {
    .flex {
      display: flex;
      justify-content: center;
      width: 70%;
      align-items: center;
      height: 60%;
      box-shadow: 0 0 10px #fff;

      .left {
        width: 40%;
        height: 100%;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        width: 60%;
        height: 100%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .head {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 30%;
          height: 20%;

          position: relative;
        }
        form {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          width: 100%;
          height: 50%;

          .input-field {
            width: 100%;
            height: 25%;
            display: flex;
            justify-content: center;
            width: 60%;
            flex-direction: column;
            position: relative;
            input {
              height: 100%;
              padding: 0.2rem;
              border-radius: 0.3rem;
              padding-left: 0.5rem;
              padding-left: 1rem;
              letter-spacing: 0.1rem;
            }
            .hide {
              position: absolute;

              right: 5%;
              cursor: pointer;

              svg {
                height: 1rem;
              }
            }
            label {
              position: absolute;
              background-color: white;
              left: 2%;
              padding-left: 0.5rem;
              padding-right: 0.5rem;
              top: -14%;

              padding-bottom: 0.1rem;
            }
            span {
              color: red;
              font-size: 0.8rem;
              padding-top: 0.2rem;
            }
          }
          .button {
            width: 100%;
            height: 20%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 60%;
            .text {
              h4 {
                color: ${(props) => props.theme.colors.text1};
                cursor: pointer;
              }
            }
            button {
              height: 100%;
              font-size: 1rem;
              background-color: #001e31;
              border-color: #001e31;
              color: white;
              width: 22%;
              :hover {
                color: #fff;
                background-color: #001e31;
                border-color: #001e31;
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15),
                  0 4px 6px 2px rgba(0, 0, 0, 0.15) !important;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1034px) {
    .flex {
      display: flex;
      justify-content: center;
      width: 80%;
      align-items: center;
      height: 50%;
      box-shadow: 0 0 10px #fff;

      .left {
        width: 40%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        width: 60%;
        height: 100%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .head {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          height: 20%;

          img {
            width: 40%;
          }
        }
        form {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          width: 100%;
          height: 50%;

          .input-field {
            width: 100%;
            height: 20%;
            display: flex;
            justify-content: center;
            width: 60%;
            flex-direction: column;
            input {
              height: 100%;
              padding: 0.2rem;
            }
            label {
              padding-bottom: 0.1rem;
            }
            span {
              color: red;
              font-size: 0.8rem;
              padding-top: 0.2rem;
            }
          }
          .button {
            width: 100%;
            height: 20%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 60%;
            .text {
              h4 {
                color: ${(props) => props.theme.colors.text1};
                cursor: pointer;
              }
            }
            button {
              height: 100%;
              font-size: 1rem;
              width: 22%;
            }
          }
        }
      }
    }
  }
  @media (max-width: 600px) {
    .flex {
      display: flex;
      justify-content: center;
      width: 88%;
      align-items: center;
      height: 50%;
      box-shadow: 0 0 10px #fff;
      min-height: 30rem;

      .left {
        height: 100%;
        display: none;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        width: 100%;
        height: 100%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .head {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          height: 20%;

          img {
            width: 60%;
          }
        }
        form {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          width: 100%;
          height: 68%;
          .input-field {
            width: 100%;
            height: 20%;
            display: flex;
            justify-content: center;
            width: 74%;
            flex-direction: column;
            input {
              height: 100%;
              font-size: 1rem;
              padding: 0.5rem;
              border-radius: 0.2rem;
            }
            label {
              padding-bottom: 0.1rem;
            }
            span {
              color: red;
              font-size: 0.8rem;
              padding-top: 0.1rem;
            }
          }
          .button {
            height: 20%;
            width: 74%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text {
              h4 {
                color: ${(props) => props.theme.colors.text1};
                cursor: pointer;
              }
            }
            button {
              width: 40%;
              height: 70%;
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
`;
