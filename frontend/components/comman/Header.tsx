import styled from "styled-components";

export const Header = styled.div`
  @media (min-width: 1025px) {
    .flex-1 {
      width: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 5rem;
      .flex-item {
        width: 18%;
        height: 100%;
        cursor: pointer;
        background-color: white;
        box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
        border-radius: 0.5rem;
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding-left: 1rem;
        h4 {
          text-transform: uppercase;
          color: #4e73df;
          font-weight: 800;
        }
        span {
          margin-top: 0.5rem;
        }
        i {
          color: #dddfeb;
          position: absolute;
          right: 5%;
          top: 35%;
          font-size: 2rem;
        }
      }

      .fa-plus-circle {
        font-size: 3rem;
        color: #fea20a;
        cursor: pointer;
      }
      .flex-item:nth-child(1) {
        border-left: 0.25rem solid #4e73df;
      }

      .flex-item:nth-child(2) {
        border-left: 0.25rem solid #f6c23e;
      }
      .flex-item:nth-child(3) {
        border-left: 0.25rem solid #36b9cc !important;
      }
      .flex-item:nth-child(4) {
        border-left: 0.25rem solid #1cc88a !important;
      }
    }
  }
`;
