import { motion } from "framer-motion";
import styled from "styled-components";

export const BoxTitle = styled(motion.div)`
  text-align: center;
  margin-bottom: 2rem;
  
  &.skills {
    margin-bottom: 1rem;
  }

  span {
    color: ${props => props.theme.tertiaryColor};
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 5px;
  }
  h1 {
    color: ${props => props.theme.secondaryColor};
    font-size: 3rem;
    position: relative;
    @media screen and (max-width: 500px) {
      font-size: 2.5rem;
    }

    @media screen and (max-width:400px) {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width:400px) {
    margin-bottom: 1rem;
  }
`;