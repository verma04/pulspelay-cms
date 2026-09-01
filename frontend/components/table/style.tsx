import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .edit {
    background-color: green !important;
  }
  h1 {
    font-size: 1rem;
  }
  .seo {
    background-color: rgb(0, 111, 214) !important;
  }
  .wrapper {
    height: 5rem;
    width: 5rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    color: white;
  }
  .searchh {
    width: 100%;

    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2rem;
    label {
      margin-bottom: 0.5rem;
    }
    input {
      width: 20%;
    }
  }

  .filter {
    width: 100%;

    margin-top: 2rem;
    display: flex;
    justify-content: flex-start;

    align-items: center;
    button {
      margin-left: 0.5rem;
    }
    button:disabled,
    button[disabled] {
      border: 1px solid #999999;
      background-color: #cccccc;
      color: #666666;
    }

    span {
      margin-left: 1rem;
      font-weight: 1000;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      strong {
        margin-left: 0.3rem;
      }
      input {
        height: 90%;
        margin-left: 0.3rem;
      }
    }
    select {
      margin-left: 1rem;
      height: 2rem;
    }
  }

  table {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    vertical-align: middle;
    thead {
      th {
        font-size: 0.6rem;
      }
    }
  }

  table td,
  table th {
    border: 1px solid #ddd;
    padding: 8px;
    vertical-align: middle;
  }

  table tr:nth-child(even) {
    background-color: #f2f2f2;
    vertical-align: middle;
  }

  table tr:hover {
    background-color: #ddd;
  }

  table th,
  tfoot td {
    font-size: 0.8rem;
    padding-top: 12px;
    padding-bottom: 12px;
    font-family: "Manrope", sans-serif;
    text-align: left;
    text-transform: uppercase;
    background-color: #17181c;
    letter-spacing: 0.1rem;
    color: white;
    vertical-align: middle;
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
