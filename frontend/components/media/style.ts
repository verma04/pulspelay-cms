import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 5rem;
  .fa-plus-square {
    color: #fea20a;
    font-size: 2rem !important ;
  }

  @media (min-width: 1025px) {
    .wrapper {
      position: relative;
    }
    .flex {
      margin-top: 5rem;
      display: flex;
      justify-content: space-evenly;
      flex-direction: center;
      align-items: center;
      width: 93%;
      height: 100%;

      .list {
        margin-top: 10rem;
        width: 23%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 15rem;
        border: 1px solid;
      }

      #customers td,
      #customers th {
        padding: 8px;
        color: #17181c;
      }

      #customers tr:nth-child(even) {
        background-color: #f2f2f2;
      }

      #customers tr:hover {
        background-color: #ddd;
      }
      #active {
        background-color: #d0469d;
        color: white;
        border: none;
        text-transform: capitalize;
        font-size: 0.8rem;
        padding: 0.5rem;
      }
      #non {
        background-color: #f46a6a;

        color: white;
        border: none;
        text-transform: capitalize;
        font-size: 0.8rem;
        padding: 0.5rem;
      }
      #customers th {
        padding-top: 12px;
        padding-bottom: 12px;
        font-family: "Manrope", sans-serif;
        text-align: left;
        background-color: #17181c;
        color: white;
      }
      button {
        border: none;
        font-size: 0.7rem;
        padding: 0.5rem;
        background-color: #17181c;
        border-color: #17181c;
        border-radius: 0.2rem;
        color: white;
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
        margin-top: 10vh;
        width: 90%;
        height: 80vh;
        min-height: 40rem;

        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        .top {
          width: 90%;
          height: 5%;
          border-bottom: 1px solid #bebebe;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .left {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 70%;
            h3 {
              text-transform: uppercase;
              width: 14%;
              color: ${(props) => props.theme.colors.text1};
              border-right: 1px solid ${(props) => props.theme.colors.text1};
              text-align: center;
              padding-right: 3%;
            }
            h4 {
              text-transform: uppercase;
              color: ${(props) => props.theme.colors.text1};

              margin-left: 2rem;
              font-size: 1.2rem;
            }
          }
          .right {
            width: 20%;

            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            i {
              font-size: 3rem;
              padding-bottom: 1.5rem;
            }
          }
        }
        .no {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          width: 95%;
          height: 90%;
          .text {
            margin-bottom: 5rem;
            font-size: 2rem;
            font-weight: 900;
            color: ${(props) => props.theme.colors.text1};
          }
          i {
            font-size: 3rem;
            cursor: pointer;
          }
        }
        .mid {
          width: 95%;
          height: 90%;

          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
          overflow: auto;
          .grid1 {
            width: 29%;
            height: 15rem;
            margin-top: 2rem;
            border-radius: 0.75rem;
            border: initial;
            background: #fff;

            box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04),
              0 1px 6px rgba(0, 0, 0, 0.04);
            .wrapper {
              width: 100%;
              height: 70%;

              img {
                height: 100%;
                width: 100%;
              }
            }
            .text {
              width: 100%;
              height: 30%;
              display: flex;
              justify-content: center;
              align-items: center;
              h2 {
                width: 90%;
                font-size: 1rem;

                color: ${(props) => props.theme.colors.text1};
                text-align: center;
              }
            }
          }
          .add {
            width: 30%;
            height: 20%;

            display: flex;
            justify-content: center;
            align-items: center;
            i {
              font-size: 4rem;
              color: #fea20a;
              cursor: pointer;
            }
          }
        }

        .bottom {
          width: 90%;
        }
      }
    }
  }
`;
