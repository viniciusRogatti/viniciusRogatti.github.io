import styled from "styled-components";

const SocialMedias = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;

  &.header{
    @media screen and (max-width: 830px) {
      display: none;
    }
  }

`;

export default SocialMedias;
