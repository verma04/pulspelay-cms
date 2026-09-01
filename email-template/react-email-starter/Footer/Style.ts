import styled from "styled-components";

export const Section = styled.section`
  width: 100%;

  li {
    list-style: none;
    color: white;
  }
  svg {
  }
  p {
    color: white;
  }
  #hover:hover {
    color: #ee2a7b;
  }
  svg:hover {
    path {
      fill: #ee2a7b;
    }
    rect {
      fill: #ee2a7b;
    }
    #youtube {
      fill: black;
    }
  }

  width: 100%;
  display: flex;
  justify-content: center;

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    justify-content: flex-start;
    .flex-1 {
      display: flex;
      align-items: center;
    }

    .footer {
      background: #000000;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;
      .footer-content {
        width: 90%;
        margin-top: 1rem;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        height: 100%;
        .items {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 80%;
          flex-direction: column;
          .items-1 {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .wrapper {
              width: 60%;
              height: 5rem;
              margin-top: 2rem;
              margin-bottom: 1rem;
              position: relative;
            }
            .list {
              width: 100%;
              margin-bottom: 2em;
              .item-list {
                width: 100%;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                li {
                  margin-top: 0.5rem;
                  width: 50%;
                }
              }
            }
          }
          .items-2 {
            width: 100%;
            height: 100%;
            .address {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              .address-book:nth-child(1) {
                h4 {
                  color: #00b0f0;
                }
              }
              .address-book:nth-child(2) {
                h4 {
                  color: #f960ff;
                }
              }
              .address-book:nth-child(3) {
                h4 {
                  color: #0054ff;
                }
              }
              .address-book:nth-child(4) {
                h4 {
                  color: #00b050;
                }
              }

              .address-book:nth-child(5) {
                h4 {
                  color: #ff0;
                }
              }

              .address-book {
                margin-top: 2rem;
                width: 100%;

                .h4 {
                  width: 90%;
                }
                a {
                  font-size: 0.85rem;
                }

                p {
                  margin-top: 0.5rem;
                  width: 90%;
                }
              }
            }
          }
          .items-3 {
            margin-top: 2rem;
            margin-bottom: 1rem;
            width: 100%;

            .phone {
              margin-bottom: 0.5rem;
            }
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            height: 100%;

            .social {
              margin-top: 1rem;
              margin-bottom: 1rem;
              width: 100%;
              height: 100%;
              display: flex;

              align-items: flex-start;
              flex-wrap: wrap;
              a {
                margin-right: 1rem;
                margin-top: 1rem;
                svg {
                  width: 2rem;
                  height: 2rem;
                }
              }
              .contact {
                width: 100%;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: flex-start;
              }
              .social-icon {
                margin-top: 2rem;
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                width: 80%;
                margin-bottom: 2rem;
                a {
                  width: 3.5rem;
                  height: 2rem;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  margin-top: 0.5rem;
                  svg {
                    width: 2rem;
                  }
                }
              }
            }
          }
        }
      }
    }
    .footer-copyright {
      width: 100%;
      height: 7rem;
      background-color: #272525;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-bottom: 1rem;
      padding-top: 1rem;

      .copyright {
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        li {
          list-style: none;
          text-align: center;
        }
        .social-copyright {
          display: flex;
          justify-content: center;
          align-items: center;

          li:nth-child(2) {
            margin-left: 2rem;
          }
        }
      }
    }
  }
`;
