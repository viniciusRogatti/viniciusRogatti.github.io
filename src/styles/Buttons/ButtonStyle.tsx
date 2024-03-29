import { motion } from "framer-motion";
import styled from "styled-components";

export const ButtonStyle = styled(motion.button)`
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
  border: none;

  :disabled {
    opacity: 0.3;
    pointer-events: none;
  }

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
    padding: 0.75rem 2rem;
  }
`