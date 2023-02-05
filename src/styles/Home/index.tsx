import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-width:1224px;
  padding:10rem 1.5rem 0 1rem;
  margin: 0 auto;
  background: ${props => props.theme.background};
  scroll-snap-align: start;
`;

const ImgProfile = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
`;

const BoxInfo = styled.div`
  margin-top: 1rem; 
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;



  h3 {
    color: ${props => props.theme.secondaryColor};
    font-size: 3rem;
    @media screen and (max-width: 500px) {
      font-size: 1.5rem;
    }
    span {
      color: ${props => props.theme.color};
    }
  }

  h4 {
    color: ${props => props.theme.color};
    opacity: 0.5;
    font-size: 1.3rem;
  }

`;

const SpanInfo = styled.span`
  margin-top: 2rem;
  color: ${props => props.theme.secondaryColor};
  text-align: center;
  font-size: 5rem;
  line-height: 1.3;


  @media screen and (max-width: 800px) {
    font-size: 3.5rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 2.5rem;
  } 
`;


export { Container, ImgProfile, BoxInfo, SpanInfo };
