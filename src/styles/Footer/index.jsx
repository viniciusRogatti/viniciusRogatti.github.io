import { motion } from "framer-motion";
import styled from "styled-components";

const ContainerFooter = styled(motion.footer)`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  max-width: 1224px;
  flex-wrap: wrap;
  color: ${props => props.theme.secondaryColor};
  margin-bottom: 1rem;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const BoxCopyRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    font-size: 0.85rem;
  }
  span {
    color: ${props => props.theme.tertiaryColor};
    font-weight: 800;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }


`
const BoxFollowMe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h4 {
    font-size: 0.85rem;
  }

  .stick {
    height: 2px;
    width: 3rem;
    background: ${props => props.theme.secondaryColor};
  }

  a {
    color: ${props => props.theme.tertiaryColor};
    font-weight: 800;
    text-transform: uppercase;
    text-decoration: none;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5;

    .stick {
    display: none;
    }
  }

`;

const BoxSocialIcons = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    opacity: 0.7;
    cursor: pointer;
    fill: ${props => props.theme.tertiaryColor};
    color: ${props => props.theme.tertiaryColor};
    &:hover {
      opacity: 1;      
    }
  }
`;

export { ContainerFooter, BoxCopyRight, BoxFollowMe, BoxSocialIcons };