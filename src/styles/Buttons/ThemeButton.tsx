import styled from "styled-components";

export const ThemeButton = styled.button`
  position: relative;
  background: ${props => props.theme.background};
  display: flex;
  width: 50px;
  height: 25px;
  margin: 0 0.75rem;
  border: none;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const SwitchSpan = styled.span`
  position: absolute;
  cursor: pointer;
  background: ${props => props.theme.color};
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;

  &::before{
    position: absolute;
    content: "";
    left: 2px;
    top: 2px;
    width: 21px;
    height: 21px;
    background-color: #333;
    border-radius: 50%;
    transition: transform 0.3s ease;
    transform: ${(props) => props.theme.isDark && "translateX(25px)"};
  }
` 

export const ThemeContainer = styled.div`
  position: relative;
  right: calc(1rem + 2vw);
  z-index: 3;
  display: flex;
  align-items: center;
  cursor: pointer;
`
