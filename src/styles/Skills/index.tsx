import { motion } from "framer-motion";
import styled from "styled-components";

const BoxButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.8rem;
`;

const BoxSkills = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6,1fr);
  justify-content: center;
  margin: 0 auto;
  max-width: 700px;
  row-gap: 2rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(4,1fr);
    gap: 0.3rem;
  }
`;

const CardSkills = styled.div`
  max-width: 200px;
  color: ${props => props.theme.secondaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  flex: none;
`;

export { BoxButtons, BoxSkills, CardSkills };