import { motion } from "framer-motion";
import styled from "styled-components";

const ContainerAbout = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  position: relative;

  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;
    place-items: top;
  }
`;

const BoxImage = styled(motion.div)`
  max-width: 21.875rem;
  margin-top: 1.5rem;
  height: 21.875rem;
  justify-self: center;
  border-radius: 12px;
  box-shadow:  5px 5px 100px #2d2d2d,
             -5px -5px 100px #2f2f2f;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }

  @media screen and (max-width:850px) {
    margin-top: 0;
    width: 15rem;
    height: 15rem;
  }

  @media screen and (max-width:500px) {
    width: 10rem;
    height: 10rem;
  }

`;

const BoxAbout = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.secondaryColor};
  padding: 1rem;

  @media screen and (max-width:850px) {
    padding: 0;
    margin-top: 1rem;
  }

  p {
    font-size: 0.85rem;
    margin-bottom: 1rem;
    text-align: center;

    @media screen and (max-width:700px) {
      font-size: 0.45rem;
    }
  }
  
`

const BoxContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 0.85rem;
  max-width: 300px;
  margin-bottom: 1rem;
  gap: 0.83rem;

  span {
    color: ${props => props.theme.color};
    @media screen and (max-width: 850px) {
      margin-left: auto;
    }
  }


`;

export { BoxAbout, BoxImage, BoxContact, ContainerAbout };