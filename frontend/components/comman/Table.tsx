import styled from "styled-components";

export const Table = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  flex-direction: column;
  @media (min-width: 1025px) {
    display: flex;
    justify-content: center;

    .head {
      display: flex;
      justify-content: space-between;
      width: 100%;
      button {
        font-size: 1rem;
        height: 2ren;
        width: 7rem;
      }
    }

    .flex-2 {
      width: 100%;
      margin-top: 2rem;
      overflow: visible;
      display: flex;

      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      .search-bar {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 3.5rem;

        input {
          height: 70%;
          width: 20rem;
          border-radius: 1em;
          padding: 1rem;
        }

        .img-wrapper {
          display: flex;
          justify-content: center;
          width: 4rem;
          position: relative;
          height: 4rem;
          margin-left: 3rem;
        }

        .button {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 70%;
          margin-left: 2rem;
          background-color: #4e73df;
          border-radius: 1em;
          width: 7rem;
          cursor: pointer;
          color: white;
          i {
            margin-left: 1rem;
          }
        }
      }

      .garph {
        width: 100%;

        background-color: white;
        border-radius: 1rem;
        display: flex;
        margin-bottom: 3rem;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .graphl-top {
          width: 100%;
          height: 5rem;
          border-radius: calc(0.35rem - 1px) calc(0.35rem - 1px) 0 0;

          margin-bottom: 0;
          background-color: #f8f9fc;
          border-bottom: 1px solid #e3e6f0;
          display: flex;
          justify-content: space-between;

          align-items: center;
          h3 {
            padding-left: 5%;
            color: #4e73df;
          }
          h3 {
            color: #4e73df;
            margin-right: 2rem;
          }
        }
        .graphl-bottom {
          width: 100%;

          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          #customers {
            border-collapse: collapse;
            width: 100%;
            height: 100%;
          }

          #customers td,
          #customers th {
            border: 1px solid #ddd;
            padding: 8px;
          }

          #top {
            height: 5rem;
            background-color: #f5f5f6;
            th {
              color: #858796;
              padding-top: 12px;
              padding-bottom: 12px;
              text-align: left;
              font-weight: 800;
              font-family: Nunito;
              font-size: 1.5rem;
            }
          }

          #customers th {
            padding-top: 30px;
            padding-bottom: 12px;
            text-align: left;
            font-weight: 800;
            font-family: Nunito;
            font-size: 1rem;
          }
          tr {
            height: 5rem;
            span {
              color: #d0469d;
              display: flex;
              justify-content: space-around;
              width: 80%;
            }
            th {
              i {
                cursor: pointer;
              }
              .octicon {
                display: inline-block;
                overflow: visible !important;
                vertical-align: text-bottom;
                fill: currentColor;
                color: white;
              }
              .color-text-white {
                color: var(--color-scale-white) !important;
              }
              span {
                font-size: 0.9rem;
                width: 5rem;
                color: white;
                padding: 0.5rem;
                border-radius: 1.5rem;
              }
              .open {
                background-color: #1cc88a;
              }
            }
          }
        }
      }

      h2 {
        padding-top: 100rem;
        padding-bottom: 100rem;
      }
    }
  }
`;
