import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #17181c;
  position: sticky;
  height: 100vh;
  overflow: scroll;
  top: 0%;
  z-index: 1000;
  transform: 2s;
  width: 14rem;
  transition: transform 0.3s;
  @media (min-width: 1025px) {
    .grid {
      display: flex;

      flex-direction: column;
      position: sticky;
      align-items: center;
      justify-content: flex-start;
      height: 100%;
      width: 100%;

      .mid {
        width: 80%;
        height: 10%;

        position: relative;
      }
      #active {
        background-color: #e125f8;
        p {
          font-weight: 1000;
          color: white;
        }
        svg {
          fill: white;
        }
      }

      .icon:hover {
        background-color: #e125f8;
        p {
          font-weight: 1000;
          color: white;
        }
        svg {
          fill: white;
        }
      }
      .icon {
        width: 100%;
        height: 4rem;

        display: flex;
        cursor: pointer;
        justify-content: flex-start;
        position: relative;
        align-items: center;
        transition: color 0.3s;
        transition: background 0.3s;
        text-align: center;
        transition: background-color 0.5s, color 0.5s, opacity 0.5s ease-in-out;
        transition: background-color 0.5s, color 0.5s, transform 0.5s,
          opacity 0.5s ease-in-out;
        transition: background-color 0.5s, color 0.5s, transform 0.5s,
          opacity 0.5s ease-in-out;
        padding-left: 10%;
        .list {
          position: absolute;
          max-width: 200%;
          min-width: 100%;
          height: 100%;
          right: -100%;
          z-index: 1000;
          .sub-list {
            height: 3rem;
            display: flex;
            padding-left: 1rem;
            padding-right: 1rem;
            align-items: center;

            background-color: black;
          }
        }
        .svg {
          width: 1.5rem;
          height: 1.5rem;
          margin-right: 1rem;

          fill: #c0c0c0;
        }
        p {
          color: #c0c0c0;
          font-size: 0.8rem;
          text-transform: uppercase;
        }

        a {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;

          color: #c8c8c8;
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1034px) {
    background-color: ${(props) => props.theme.colors.background};
    position: fixed;
    height: 93vh;
    width: 10%;
    box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1), 0 3px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    .grid {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      height: 100%;
      width: 100%;
      box-shadow: 0 0 10px #fff;
      .icon {
        width: 100%;
        cursor: pointer;
        height: 8%;
        border: 1px solid #f0f0f0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        i {
          font-size: 1.3rem;
          color: #787878;
        }
        a {
          padding-top: 0.5rem;
          color: #787878;
          font-size: 0.9rem;
          text-align: center;
          width: 90%;
        }
      }
      #active {
        position: relative;
        :after {
          position: absolute;
          height: 80%;
          display: block;
          left: 0;
          width: 0.3rem;
          background-color: #787878;
          border-left: 1px white;
          content: "";
        }
        i {
          color: #787878;
        }
        a {
          color: #787878;
          font-weight: 900;
        }
      }
    }
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
