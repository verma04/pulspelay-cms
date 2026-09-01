import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  a {
    color: black;
  }

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.7rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.2rem;
  }
  h5 {
    font-size: 1rem;
  }
  h6 {
    font-size: 0.8rem;
  }
  table {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    vertical-align: bottom;
  }

  table td,
  table th {
    border: 1px solid #ddd;
    padding: 8px;
    vertical-align: bottom;
  }

  table tr:nth-child(even) {
    background-color: #f2f2f2;
    vertical-align: bottom;
  }

  table tr:hover {
    background-color: #ddd;
  }

  table th,
  tfoot td {
    padding-top: 12px;
    padding-bottom: 12px;
    font-family: "Manrope", sans-serif;
    text-align: left;
    background-color: #17181c;
    color: white;
  }

  .toolbar {
    width: 100%;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;
    .toolbar-main {
      width: 70%;
      height: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;
      .toolbar-left {
        width: 50%;
        display: flex;
        height: 100%;
        justify-content: flex-start;

        align-items: center;
        .img-wrapper {
          position: relative;
          height: 80%;
          width: 20%;
        }
        h4 {
          margin-left: 2rem;
          color: black;
        }
      }

      .toolbar-right {
        width: 50%;
        display: flex;
        height: 100%;
        justify-content: flex-end;
        align-items: center;
        button {
          color: white;
          background-color: #d0469d;
          border: none;
          padding: 0.5rem;
          border-radius: 0.5rem;
        }
      }
    }
  }
  .app {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;

    margin-top: 3rem;

    padding-top: 2rem;

    .input {
      display: flex;
      justify-content: center;
      width: 100%;
      input {
        width: 80%;
        border: none;
        font-size: 2rem;
      }
    }
  }
`;
