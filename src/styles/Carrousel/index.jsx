import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Carrousel = styled.section`
  position: relative;
  display: flex;
  width: 80%;
  height: 100%;
  overflow-x: auto;
  align-items: center;
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  gap: 1rem;

  @media screen and (min-width: 1000px) {
    justify-content: start;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BoxCarrousel = styled(motion.section)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 25rem;

  .chevron-left {
    position: absolute;
    left: 0;
    bottom: (25rem / 2);
    z-index: 999;
  }

  .chevron-right {
    position: absolute;
    transform: rotate(180deg);
    right: 0;
    bottom: (25rem / 2);
    z-index: 999;
  }
`;

