import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  max-width:1224px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 7rem 1.5rem 0 1.5rem;
  background: ${props => props.theme.background};
  scroll-snap-align: start;

  @media screen and (max-width: 700px) {
    padding: 5rem 1rem 0 1rem;
    max-width: 100vw;
  }
`;