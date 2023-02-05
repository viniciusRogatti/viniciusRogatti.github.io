import styled from "styled-components";
import { motion } from 'framer-motion';

const BoxProjects = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 100vh;

`;

const BoxHoverLayer  = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  gap: 0.5rem;
  background: ${props => props.theme.background};

  h1 {
    color: ${props => props.theme.color};
    font-size: 2rem;
  }
`;

const BoxIconsHover = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    width: 40px;
    height: 40px;
    background: ${props => props.theme.color};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    svg {
        color: ${props => props.theme.background};
        font-size: 1.5rem;
    }
  }

`

const CardProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 45%; 
  height: 100%;

  flex: none;
  img {
    border-radius: 12px;
  }

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`

export {BoxProjects, CardProject, BoxHoverLayer, BoxIconsHover};