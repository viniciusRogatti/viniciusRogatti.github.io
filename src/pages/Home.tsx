import { Container, BoxInfo, SpanInfo } from '../styles/Home';
import { ButtonStyle } from '../styles/Buttons/ButtonStyle'
import { moveVariants } from '../services/helpers/const';
import { useEffect, useState } from 'react';
import CommitBox from '../components/CommitBox';

function Home() {
  const [commits, setCommits] = useState([])

  const fetchCommits = async () => {
    const url = 'https://api.github.com/repos/viniciusRogatti/viniciusRogatti.github.io/commits'
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCommits(data.filter((e: any) => !e.commit.verification.verified))
    } catch (error) {
      console.log(error)
    }
    
  }

  function handleButtonClick() {
    window.location.assign("#contato");
  }

  useEffect(() => {
    fetchCommits();
  }, [])

  return (
    <Container
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
      id="inicio"
    >
      <BoxInfo>
        <h3>Olá, eu sou o <span>Marcos Vinicius</span> </h3>
        <h4>Sou desenvolvedor Web</h4>
        <SpanInfo>Apaixonado<br /> por Tecnologia e <br/>Inovação</SpanInfo>

        <ButtonStyle
          onClick={handleButtonClick}
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          Entre em contato
        </ButtonStyle>

      </BoxInfo>

      { commits.length && <CommitBox commits={commits}/> }

    </Container>
  )
}

export default Home;