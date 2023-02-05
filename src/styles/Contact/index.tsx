import { motion } from "framer-motion";
import styled from "styled-components";

const ContainerForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  background: ${props => props.theme.secondaryColor};
  border: 2px solid ${props => props.theme.tertiaryColor};
  padding: 1rem;
  border-radius: 16px;
  max-width: 1100px;
  height: 30rem;
  margin-left: auto;
  margin-right: auto;
  gap: 2rem;
  overflow: hidden;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    overflow-y: scroll;
  }

  @media screen and (max-width: 400px) {
    height: 20.5rem;
  }

`;

const BoxLeft = styled(motion.div)`
  padding: 1rem;
  border-right: 1px solid ${props => props.theme.tertiaryColor};

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    border-right: none;
    border-bottom: 1px solid ${props => props.theme.tertiaryColor};
  }

  p {
    color: ${props => props.theme.secondaryBackground};
  }
  
`

const BoxContacts = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  p {
    font-size: 0.85rem;
    font-weight: bold;
    color: ${props => props.theme.secondaryBackground};
  }

`;

const BoxIcons = styled.div`
  width: 50px;
  height: 50px;
  background:${props => props.theme.tertiaryColor};
  color: ${props => props.theme.secondaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 1rem;
`

const BoxRight = styled(motion.div)`
  padding: 1rem;
  border-radius: 12px;
`

const TitleBox = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.secondaryBackground};
`;

const FormRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.5rem;

  input {
    border: none;
    outline: none;
    margin-bottom: 0.5rem;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    font-size: 0.95rem;
    color: ${props => props.theme.background};
    background: ${props => props.theme.secondaryColor};
  }

  textarea {
    border: none;
    outline: none;
    margin-bottom: 0.5rem;
    padding: 1rem 1.5rem;
    border-radius: 8px;   
    font-size: 0.95rem;
    resize: none;
    min-height: 150px;
    background: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.secondaryBackground};

    @media screen and (max-width: 400px) {
      max-width: 250px;
    }
  }
`;


export { ContainerForm, BoxRight, BoxLeft, TitleBox, BoxContacts, BoxIcons, FormRow };
