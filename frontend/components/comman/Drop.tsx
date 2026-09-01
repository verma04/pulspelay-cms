import styled from "styled-components";

export const DropDown = styled.div`
  @media (min-width: 1025px) {
    .dropdown-menu {
      position: absolute;
      top: 77%;
      right: 10%;
      z-index: 1000;

      float: left;
      min-width: 10rem;
      padding: 0.5rem 0;
      margin: 0.125rem 0 0;
      font-size: 0.85rem;
      color: #858796;
      text-align: left;
      list-style: none;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #e3e6f0;
      border-radius: 0.35rem;
      .dropdown-item {
        cursor: pointer;
        display: block;
        width: 100%;
        padding: 0.3rem 2rem;
        clear: both;
        font-weight: 400;
        color: #3a3b45;
        text-align: inherit;
        white-space: nowrap;
        background-color: transparent;
        border: 0;
        font-size: 1rem;
        i {
          color: #b7b9cc !important;
        }
      }
    }
  }
`;
