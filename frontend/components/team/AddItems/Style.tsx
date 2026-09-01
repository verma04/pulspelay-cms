import styled from "styled-components";

export const Section = styled.div`
  @media (min-width: 1025px) {
    width: 100%;
    margin-top: 7rem;

    .img-arr {
      width: 80%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
    .react-tagsinput-tag {
      background-color: #3498db;
      color: white;
      height: 3rem !important;
      border: 1px solid #3498db;
    }
    .react-tagsinput-input {
      width: 100%;
      font-family: "Visa-Regular";
    }
    .input-field-box {
      .quill {
        margin-bottom: 3rem;

        .ql-toolbar.ql-snow {
          width: 30rem;
        }
      }
    }

    .list {
      margin-top: 2rem;
      margin-right: 2rem;
      width: 19%;
      padding: 0.5rem;
      background-color: #a6b0ce;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .wrapper {
        width: 100%;
      }
      input {
        width: 80%;
      }

      button {
        background-color: #000;
        color: white;
        padding: 0.5rem;
        border: none;
        width: 40%;
      }
    }

    .arr {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
    .modal {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
    }

    label {
      text-transform: capitalize;
      display: flex;
      align-items: center;
      font-weight: 1000;
      li {
        list-style: none;
        color: red;
        margin-left: 0.3rem;
        font-size: 1rem;
        margin-top: 0.4rem;
      }
    }
    /* Modal Content */
    .modal-content {
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 20px;

      width: 90%;

      border-radius: 10px;
    }
    /* The Close Button */
    .close {
      color: #aaaaaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }
    .close:hover,
    .close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
    .modal-content {
      .delete {
        position: absolute;
        cursor: pointer;
        top: 2%;
        right: 2%;
        font-size: 1.5rem;
        color: ${(props) => props.theme.colors.text1};
      }
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
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
          font-size: 1.5rem;
          text-transform: uppercase;
        }
      }

      form {
        width: 90%;

        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: space-evenly;
        flex-wrap: wrap;
        .input-img {
          width: 45%;
          margin-top: 2rem;
          margin-bottom: 1rem;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;

          .wrapper {
            width: 100%;
            height: 3rem;
            margin-top: 0.5rem;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #ced4da;
            border-radius: 0.2rem;
            label {
              height: 100% !important;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 3rem;
              font-size: 1rem;
              background-color: #303030;
              padding: 0.5rem;
              color: white;
              cursor: pointer;
            }
            p {
              width: 50%;
              font-size: 0.8rem;
            }
            #file {
              width: 25%;
            }
          }

          .img-wrapper {
            margin-top: 1rem;
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            height: 15rem;
            margin-top: 2rem;
            position: relative;
            video {
              height: 15rem !important;
              width: 100% !important;
            }
            h4 {
              position: absolute;
              top: -1rem;
              font-weight: 600;
              left: 0%;
            }
          }
        }

        .category {
          width: 100%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .label {
            font-size: 1rem;
            margin-top: 2rem;
            margin-bottom: -2rem;
            width: 100%;

            font-weight: 1000;

            text-transform: capitalize;
          }
          #file {
            font-size: 0.7rem;
          }
          .wrapper {
            margin-top: 0;
          }

          p {
            font-size: 0.7rem;
          }
          .input-img {
            width: 23%;
          }
          label {
            font-size: 0.7rem;
          }
        }

        .status {
          margin-top: 1rem;
          width: 45%;
          margin-bottom: 1rem;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;

          align-items: flex-start;
        }

        .input-field {
          margin-top: 2rem;

          width: 45%;
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
          flex-direction: column;

          .arr {
            border: 1px solid #d7d7d7;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            .img-arr {
              width: 90%;
              display: flex;
              justify-content: center;
              align-items: center;
              justify-content: flex-start;
              flex-wrap: wrap;
              .wrapper {
                position: relative;
                padding-left: 0.5rem;
                padding-right: 0.5rem;
                width: 100%;

                height: 5rem;
                margin-top: 1rem;
                margin-bottom: 2rem;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                i {
                  font-size: 2rem;
                }
              }
              .fa-times {
                font-size: 1.5rem;
              }
            }
          }
          .message {
            height: 3rem;
          }
          label {
            margin-bottom: 1rem;
            height: 10%;
            font-size: 0.9rem;
            font-weight: 1000;

            text-transform: capitalize;
          }
          select {
            height: 2rem;
          }
          input {
            margin-bottom: 0.5rem;
            height: 3.2rem;

            padding-left: 1.5rem;
          }
          #active {
            border: 1px solid red;
          }

          textarea {
            padding: 1rem;
            height: 10rem;
            padding-left: 1rem;
          }
          span {
            font-size: 0.7rem;

            height: 10%;
          }
        }

        .input-field-3 {
          margin-top: 1rem;
          width: 45%;
          margin-bottom: 2rem;
          display: flex;
          justify-content: space-around;
          flex-direction: column;

          .arr {
            border: 1px solid #d7d7d7;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            .img-arr {
              width: 90%;
              display: flex;
              justify-content: center;
              align-items: center;
              justify-content: flex-start;
              flex-wrap: wrap;
              .wrapper {
                position: relative;
                padding-left: 0.5rem;
                padding-right: 0.5rem;
                width: 30%;
                height: 5rem;
                margin-top: 1rem;
                margin-bottom: 2rem;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                i {
                  font-size: 2rem;
                }
              }
              .fa-times {
                font-size: 1.5rem;
              }
            }
          }
          .message {
            height: 3rem;
          }
          label {
            padding-bottom: 0.5rem;
            height: 10%;
            font-size: 0.9rem;
            font-weight: 1000;

            text-transform: capitalize;
          }
          select {
            height: 2rem;
          }
          input {
            height: 40%;
            padding-left: 1rem;
          }
          #active {
            border: 1px solid red;
          }

          textarea {
            padding: 1rem;
            height: 10rem;
            padding-left: 1rem;
          }
          span {
            font-size: 0.7rem;
          }
        }
        .input-field-2 {
          margin-top: 1rem;
          width: 45%;
          margin-bottom: 1rem;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          margin-top: 3rem;
          li {
            font-size: 1rem;
            span {
              font-size: 1rem;
              font-weight: 900;
              color: black !important;
            }
          }
          .label {
            display: flex;
            justify-content: center;
            align-items: center;
            justify-content: space-between;
          }
          .input {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            justify-content: space-between !important;

            input {
              width: 80%;
              height: 2.2rem;
            }
          }

          label {
            padding-bottom: 0.5rem;
            height: 10%;
            font-size: 0.9rem;
            font-weight: 1000;

            text-transform: capitalize;
          }
          select {
            height: 2rem;
          }
          input {
            height: 40%;
            padding-left: 1rem;
          }
          #active {
            border: 1px solid red;
          }

          textarea {
            padding: 1rem;
            height: 10rem;
            padding-left: 1rem;
          }
          span {
            font-size: 0.7rem;
            color: red;
            height: 10%;
          }
        }
        .btn {
          border-top: 1px solid #d7d7d7;
          width: 100%;
          height: 5rem;

          bottom: 0%;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      }
    }
  }
`;
