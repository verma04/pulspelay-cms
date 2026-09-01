import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  height: 100%;
  align-items: center;

  @media (min-width: 1035px) {
    .flex {
      margin-top: 7rem;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 90%;
      height: 100%;
      .flex-1 {
        width: 100%;
        height: 20rem;

        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        margin-bottom: 3rem;
        .flex-1-left {
          width: 68%;
          height: 100%;
          color: #212b36;
          transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          border-radius: 8px;
          box-shadow: none;
          background-image: none;
          overflow: hidden;
          position: relative;

          z-index: 0;
          box-shadow: none;
          text-align: center;
          background-color: #c8facd;
          display: flex;
          justify-content: space-evenly;
          flex-direction: row;
          align-items: center;
          .flex-1-left-top {
            width: 60%;
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;
            align-items: flex-start;
            ul {
              width: 100%;
              display: flex;
              justify-content: space-evenly;
              flex-direction: column;
              align-items: flex-start;
              p {
                text-align: left;
              }
            }
          }

          .img-wrapper {
            width: 30%;
            position: relative;
            height: 10rem;
          }
        }

        .flex-2-right {
          width: 30%;
          height: 100%;
          color: #212b36;

          border-radius: 8px;
          box-shadow: none;
          background-image: none;
          overflow: hidden;
          position: relative;

          z-index: 0;
          box-shadow: none;
          text-align: center;
          background-color: #c8facd;
          display: flex;
          justify-content: space-evenly;
          flex-direction: row;
          align-items: center;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
          .notification {
            width: 95%;
            height: 80%;

            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            overflow: scroll;
            .list {
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: flex-start;
              width: 100%;
              h4 {
                margin-bottom: 0.5rem;
                font-weight: bold;
                font-size: 0.8rem;
              }
              margin-bottom: 2rem;
              li {
                text-align: left;
                list-style: none;
                margin-bottom: 0.3rem;
                width: 100%;
                svg {
                  width: 1rem;
                  margin-top: 1rem;
                }
              }
              p {
                width: 100%;
                font-size: 0.7rem;
                text-align: end;
              }
            }
          }
        }
      }
      .flex-2 {
        width: 100%;

        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;

        flex-wrap: wrap;

        .flex-2-list {
          width: 50%;

          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 4rem;
          canvas {
            height: 27rem !important;
            width: 27rem !important;
          }
        }
      }

      .flex-3 {
        z-index: 10;
        padding-top: 6rem;

        width: 100%;

        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 3rem;
        .flex-3-left {
          width: 100%;
          padding-top: 2rem;

          color: #212b36;
          transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          border-radius: 8px;
          box-shadow: none;
          background-image: none;
          overflow: hidden;
          position: relative;

          z-index: 0;
          box-shadow: none;
          text-align: center;

          display: flex;
          justify-content: space-evenly;
          flex-direction: row;
          align-items: center;
          flex-direction: column;
        }

        .flex-3-right {
          margin-top: 4rem;
          width: 100%;
          height: 40rem;
          color: #212b36;
          transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          border-radius: 8px;
          box-shadow: none;
          background-image: none;
          overflow: hidden;
          position: relative;

          z-index: 0;
          box-shadow: none;
          text-align: center;

          display: flex;
          justify-content: space-evenly;
          flex-direction: row;
          align-items: center;

          .os {
            width: 45%;
            height: 100%;
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;
            align-items: center;
            h3 {
              font-family: "Manrope", sans-serif;
            }
            .list {
              width: 100%;
              display: flex;
              justify-content: space-evenly;
              flex-direction: row;
              align-items: center;
              font-family: "Manrope", sans-serif;
              li {
                list-style: none;
                text-transform: capitalize;
              }
            }
          }
        }
        .country {
          margin-top: 4rem;
          width: 100%;
          height: 30rem;
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1034px) {
    .flex {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      height: 100%;
      .flex-1 {
        margin-top: 7vh;
        width: 10%;
        height: 90vh;
      }
      .flex-2 {
        margin-top: 5vh;
        width: 90%;
        height: 80vh;
        min-height: 40em;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        .graph {
          margin-top: 3rem;
        }
        .ban {
          display: flex;
          justify-content: center;
          flex-direction: column;
          height: 70%;

          width: 90%;
          .top {
            height: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;

            h2 {
              font-size: 3rem;
              text-align: center;
              font-weight: 900;
              width: 80%;
            }
          }

          .mid {
            height: 30%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-flow: wrap;

            width: 100%;

            .item {
              width: 21%;

              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              margin-top: 1rem;
              cursor: pointer;
              height: 80%;
              background-color: #ffffff;
              box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1),
                0 3px 20px rgba(0, 0, 0, 0.1);
              border-radius: 0.5rem;
              i {
                font-size: 2rem;
                color: #0c1b2a;
              }
              h3 {
                color: #0c1b2a;
                padding-top: 2%;
                font-weight: 900;
              }
            }
          }
        }

        .footer {
          height: 7rem;
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #787878;
          margin-right: 2rem;
          align-items: center;
          .one {
            span {
              display: flex;
              justify-content: center;
              flex-direction: column;
              padding-top: 5%;
              color: #787878;
            }
          }
        }
      }
    }
  }
`;
