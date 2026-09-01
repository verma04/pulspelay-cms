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
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;
      width: 93%;
      height: 100%;
      .flex-1 {
        width: 10%;
      }
      .flex-2 {
        width: 100%;

        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;

        .top {
          width: 100%;
          height: 5%;

          display: flex;
          justify-content: space-between;
          align-items: center;
          .left {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 70%;
            height: 5rem;

            h3 {
              text-transform: uppercase;
              padding-right: 2rem;
              color: ${(props) => props.theme.colors.text1};
              border-right: 1px solid ${(props) => props.theme.colors.text1};
              text-align: center;
            }
            h4 {
              text-align: center;
              text-transform: uppercase;
              color: ${(props) => props.theme.colors.text1};
              border-right: 1px solid ${(props) => props.theme.colors.text1};
              margin-left: 2rem;
              padding-right: 2rem;
              font-size: 1rem;
            }
          }
          .right {
            width: 75%;

            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }
        }

        .search {
          width: 95%;
          height: 7%;
          border-bottom: 1px solid #bebebe;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-bottom: 1em;
          .icon {
            margin-left: 1rem;
            i {
              margin-right: 1rem;
              font-size: 1.2rem;
              cursor: pointer;
            }
            #active {
              color: #fea20a;
            }
            input {
              width: 10em;
            }
          }

          .filter {
            width: 70%;

            display: flex;
            justify-content: flex-start;
            align-items: center;
            .ui.selection.dropdown {
              cursor: pointer;

              margin-left: 1rem;
              word-wrap: break-word;
              line-height: 1em;
              white-space: normal;
              outline: 0;
              -webkit-transform: rotateZ(0);
              transform: rotateZ(0);
              width: 15em;
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
                  width: 22%;
                }
              }
            }
            button {
              height: 2rem;
              margin-left: 1rem !important;
              i {
                color: #fea20a;
              }
            }
          }
        }
        .no {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          width: 95%;
          height: 100%;
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

        .bottom {
          width: 90%;
        }
      }

      td {
        height: 50px;
        vertical-align: center;
        font-size: 0.8rem;
        p {
          padding-bottom: 1rem;
        }
      }
      #customers {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 95%;
      }
      .wrapper {
        height: 5rem;
        width: 5rem;
        position: relative;
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
