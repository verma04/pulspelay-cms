
import styled from "styled-components";

export  const Button = styled.button`
  display: flex;
  padding-left:3rem;
   
  border: ${(props) => (props.outlined ? "1px" : 0)} solid #000;
  cursor: pointer;
  font-size: 1.3rem;
  transition: color 0.2s ease-in;
  outline:none;
`;

export const ChatButton = styled(Button)`
  color: ${(props) => props.theme.foreground.light || "#fff"};
  &:hover {
    color: ${(props) =>
      props.sendbtn ? props.theme.accent.dark : props.theme.accent.base};
  }
`;

export default Button;
