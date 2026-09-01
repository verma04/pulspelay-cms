import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  background-color: #fff;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
  position: fixed;

  width: 100%;
  top: 0;

  @media (min-width: 1025px) {
    .flex {
      display: flex;
      justify-content: space-between;

      align-items: center;
      height: 100%;
      width: 100%;
      box-shadow: 0 0 10px #fff;

      .left {
        width: 20%;
        height: 100%;

        display: flex;
        justify-content: center;

        align-items: center;
        width: 7%;
        .wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          img {
            width: 2rem;
          }
          i {
            display: none;
          }
        }
      }
      .mid {
        width: 20%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }
      .right {
        width: 20%;
        height: 100%;

        display: flex;
        justify-content: flex-end;

        align-items: center;
        .name {
          width: 80%;

          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .dp {
            height: 3rem;
            width: 3rem;
            border-radius: 39%;
          }
        }

        img {
          width: 2rem;
          margin-left: 1rem;
          margin-right: 1rem;
        }

        i {
          font-size: 1.5rem;
          margin-right: 1rem;
          cursor: pointer;
          position: relative;
          h4 {
            position: absolute;
            top: -43%;
            right: -24%;
            border: 1px solid;
            border-radius: 50%;
            padding: 0.2rem;
            background: black;
            color: white;
          }
        }
        .far {
          margin-right: 0rem;
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1034px) {
    height: 7vh;
    background-color: ${(props) => props.theme.colors.background};
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
    position: fixed;
    width: 100%;
    top: 0;
    .flex {
      display: flex;
      justify-content: space-between;

      align-items: center;
      height: 100%;
      width: 100%;
      box-shadow: 0 0 10px #fff;

      .left {
        width: 20%;
        height: 100%;

        display: flex;
        justify-content: center;

        align-items: center;
        width: 7%;
        .wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          img {
            width: 2rem;
          }
          i {
            display: none;
          }
        }
      }
      .mid {
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        img {
          width: 60%;
        }
        #sm {
          display: none;
        }
      }
      .right {
        width: 20%;
        height: 100%;

        display: flex;
        justify-content: flex-end;

        align-items: center;
        .name {
          width: 80%;

          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .dp {
            height: 3rem;
            width: 3rem;
            border-radius: 39%;
          }
        }

        img {
          width: 1.5rem;
          margin-left: 1rem;
          margin-right: 1rem;
        }

        i {
          font-size: 1.5rem;
          margin-right: 1rem;
          cursor: pointer;
          position: relative;
          h4 {
            position: absolute;
            top: -43%;
            right: -24%;
            border: 1px solid;
            border-radius: 50%;
            padding: 0.2rem;
            background: black;
            color: white;
          }
        }
        .far {
          margin-right: 0rem;
        }
      }
    }
  }
  @media (max-width: 600px) {
    height: 7vh;
    z-index: 1;
    background-color: ${(props) => props.theme.colors.background};
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
    position: fixed;
    width: 100%;
    background-color: black;
    top: 0;
    .flex {
      display: flex;
      justify-content: space-between;

      align-items: center;
      height: 100%;
      width: 100%;
      box-shadow: 0 0 10px #fff;

      .left {
        height: 100%;

        display: flex;
        justify-content: center;

        align-items: center;
        width: 11%;

        .wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          img {
            width: 2rem;
            display: none;
          }
          i {
            font-size: 1.5rem;
            color: white;
            cursor: pointer;
          }
        }
      }
      .mid {
        width: 39%;
        padding-left: 5%;
        height: 90%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        img {
          width: 100%;
        }
        #lg {
          display: none;
        }
      }
      .right {
        width: 20%;
        height: 100%;

        display: flex;
        justify-content: flex-end;

        align-items: center;
        .name {
          width: 80%;

          height: 100%;
          display: flex;
          display: none;
          justify-content: center;
          align-items: center;
          span {
            display: none;
          }
        }

        img {
          width: 1.5rem;
          margin-left: 1rem;
          margin-right: 1rem;
        }

        i {
          font-size: 1.5rem;
          margin-right: 1rem;
          cursor: pointer;
          position: relative;
          color: white;
          h4 {
            position: absolute;
            top: -43%;
            right: -24%;
            border: 1px solid;
            border-radius: 50%;
            padding: 0.2rem;
            background: black;
            color: white;
          }
        }
        .wrapper {
          display: none;
        }
        .far {
          margin-right: 0rem;
          display: none;
        }
      }
      .link {
        transition: opacity 0.4s ease 0s, top 0s ease 0s;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 4rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: black;
        flex-direction: column;

        ul {
          height: 40%;
          margin-top: 10%;
          width: 90%;

          display: flex;
          justify-content: flex-start;
          align-items: center;
          background-color: black;
          flex-direction: column;
          li {
            color: white;
            height: 15%;
            cursor: pointer;
            font-family: "Raleway", sans-serif;
          }
        }
      }
    }
  }
`;
