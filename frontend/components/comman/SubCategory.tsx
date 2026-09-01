import styled from "styled-components";

export const SubCategory = styled.section`
  .modal {
    position: fixed; /* Stay in place */
    /* Sit on top */
    padding-top: 50px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  /* Modal Content */
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 40% !important;
    position: relative;
    .close {
      position: absolute;
      right: 2%;
      top: 2%;
    }
    .head {
      width: 100%;
      height: 20%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      border-bottom: 1px solid #d7d7d7;
      padding-bottom: 1rem;
      h2 {
        text-transform: uppercase;
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
      position: relative;
      h2 {
        color: ${(props) => props.theme.colors.text1};

        text-transform: uppercase;
      }

      i {
        position: absolute;
        left: 2%;
      }
    }
    .img {
      width: 100%;
      height: 20rem;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;

      .img-wrapper {
        height: 60%;
        position: relative;
        width: 50%;
      }
      .wrapper {
        margin-top: 1rem;
        height: 60%;
        width: 40%;
        position: relative;
      }
      input {
        display: none;
      }
      label {
        background-color: #303030;
        padding: 0.5rem;
        color: white;
        border-radius: 5px;
      }
    }
    .btn {
      margin-top: 0rem;
      border-top: 1px solid #d7d7d7;
      width: 100%;
      height: 4rem;

      display: flex;
      justify-content: space-around;
      align-items: center;
      button {
        width: 20%;
      }
    }
    .mid {
      display: flex;

      justify-content: center;
      flex-direction: column;
      align-items: center;
      p {
        text-transform: capitalize;
      }

      .input-field {
        margin-top: 1rem;
        width: 80%;
        margin-bottom: 2rem;
        display: flex;
        justify-content: space-around;
        flex-direction: column;

        .ui.selection.dropdown {
          cursor: pointer;

          margin-left: 1rem;
          word-wrap: break-word;
          line-height: 1em;
          white-space: normal;
          outline: 0;
          -webkit-transform: rotateZ(0);
          transform: rotateZ(0);
          width: 100%;
          min-height: 2.71428571em;
          background: #fff;
          display: inline-block;
          padding: 0.78571429em 2.1em 0.78571429em 1em;
          color: rgba(0, 0, 0, 0.87);
          box-shadow: none;
          border: 1px solid rgba(34, 36, 38, 0.15);
          border-radius: 0.28571429rem;
          -webkit-transition: box-shadow 0.1s ease, width 0.1s ease;
          transition: box-shadow 0.1s ease, width 0.1s ease;
          span {
            font-size: 0.8rem;
          }
          .item {
            img {
              width: 2.2em;
            }
          }
        }

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
    }
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
`;
