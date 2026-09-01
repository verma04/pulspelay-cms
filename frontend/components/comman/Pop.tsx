import styled from "styled-components";

export const Pop = styled.section`
  @media (min-width: 1025px) {
    body {
      height: 100%;
      overflow-y: hidden;
      backface-visibility: hidden;
    }

    position: fixed; /* Stay in place */
    z-index: 1000; /* Sit on top */
    /* Location of the box */
    left: 0;
    top: 0;
    width: 100vw; /* Full width */
    height: 100vh; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    .modal-image {
      background-color: #fefefe;
      margin: auto;
      border: 1px solid #888;
      width: 100%;
      height: 100vh;
      display: flex;
      min-height: 38rem;

      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      position: relative;
      .image {
        width: 80%;
      }
      .close {
        position: absolute;
        top: 5%;
        z-index: 1000;
        right: 3%;
        color: #000000;

        font-size: 3rem;
        font-weight: bold;
      }

      .modal-top {
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        width: 100%;
        height: 15%;
        align-items: center;
        flex-direction: column;
        position: relative;
        display: flex;
        background-color: #e8e8e8;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        position: relative;
        display: flex;
        .modal-top-left {
          display: flex;
          justify-content: space-evenly;
          align-items: center;

          h2 {
            font-size: 1rem;

            padding: 1em;
            padding-top: 0.5em;
            padding-bottom: 0.5em;
          }

          #set {
            background-color: white;
          }
        }
      }
      .modal-image-1 {
        background-color: #fefefe;
        margin: auto;

        width: 100%;
        height: 80%;
        display: flex;

        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        .conatiner {
          display: flex;
          justify-content: space-evenly;
          width: 95%;
          height: 100%;
          align-items: center;

          .wrapper-img {
            display: flex;
            justify-content: center;
            width: 65%;
            height: 100%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            overflow: auto;
            .wrapper-images {
              margin-top: 1rem;
              width: 6rem;
              height: 6rem;
              margin-left: 2rem;
              position: relative;
              border: 1px solid #d7d7d7;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            #active {
              border: 2px solid black;
            }
          }

          .form-upload {
            border: 1px solid #d7d7d7;
            display: flex;
            justify-content: space-between;
            width: 30%;
            height: 100%;
            position: relative;
            flex-direction: column;
            align-items: center;
            span {
              margin-top: 0.5rem;
              display: flex;
              justify-content: flex-start;
              font-size: 0.7rem;
              color: red;
              height: 10%;
              li {
                margin-left: 0.5rem;
                list-style: none;
              }
            }
            .input-field-upload {
              width: 90%;

              label {
                margin-bottom: 1rem;
                font-weight: 900;
              }
            }
          }

          .form {
            border: 1px solid #d7d7d7;
            display: flex;
            justify-content: space-between !important;
            width: 30% !important;
            height: 100% !important;
            position: relative;
            .input-field {
              input {
                height: 2.5rem;
              }
              label {
                padding-bottom: 0.7rem;
                font-weight: 900;
              }
            }

            button {
              width: 6rem;
            }
          }
          .head {
            width: 100%;
            border-bottom: 1px solid #d7d7d7;
            height: 4rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            h2 {
              color: ${(props) => props.theme.colors.text1};

              text-transform: uppercase;
            }
          }

          .btn {
            margin-top: 3rem;
            border-top: 1px solid #d7d7d7;
            width: 100%;
            height: 4rem;

            display: flex;
            justify-content: space-around;
            align-items: center;
          }
        }
      }
    }
  }
`;
