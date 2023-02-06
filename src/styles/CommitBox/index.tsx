import styled from "styled-components"

const CommitBoxStyles = styled.div`
  margin-top: 1rem;
  background: #352134;
  padding: 20px;
  border-radius: 10px;
  width: fit-content;
  max-width: 90%;
  padding: 1rem;
  filter: hue-rotate(20deg);
`

const TitleStyles = styled.div`
  margin: 0;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 400;
  color: ${props => props.theme.tertiaryColor};

  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
`

const CommitListStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
`

const CommitStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.625rem;
  font-size: 0.875rem;
  gap: 1rem;

  @media screen and (max-width: 700px) {
    gap: 0.3rem;
    margin-bottom: 0.2rem;
  }
`

const MessageStyles = styled.div`
  max-width: 80%;
  color: ${props => props.theme.secondaryColor};

  @media screen and (max-width: 700px) {
    font-size: 0.6rem;
  }
`

const DateStyles = styled.div`
  font-size: 0.75rem;
  color: ${props => props.theme.color};
  flex: none;

  @media screen and (max-width: 700px) {
    font-size: 0.6rem;
  }
`

export {CommitBoxStyles, MessageStyles, DateStyles, CommitListStyles, TitleStyles, CommitStyles }