import { motion } from "framer-motion";
import styled from "styled-components";

export const ButtonStyle = styled(motion.a)`
  margin-top: 2rem;
  text-decoration: none;
  color: ${props => props.theme.background};
  background: ${props => props.theme.color};
  padding: 0.65rem 1rem;
  border-radius: 10px;
  font-size: 0.85rem;
  text-transform: capitalize;
  text-align: center;
  cursor: pointer;

  &.skills {
    margin-top: 0;
  }

  &.active {
    color: ${props => props.theme.background};
    background: ${props => props.theme.secondaryColor};
  }

  &.formBtn {
    color: ${props => props.theme.secondaryColor};
    background: ${props => props.theme.tertiaryColor};
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 0;
  }

  &.about-button {
    @media screen and (max-width: 700px) {
      margin-left: 30%;
    }
  }
`