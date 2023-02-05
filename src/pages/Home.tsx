import me from '../assets/images/me.jpeg';
import { Container, ImgProfile, BoxInfo, SpanInfo } from '../styles/Home';
import { ButtonStyle } from '../styles/Buttons/ButtonStyle'
import { moveVariants } from '../services/helpers/const';


function Home() {

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
      <ImgProfile src={me} alt="portfolio" />

      <BoxInfo>
        <h3>Olá, eu sou <span>Marcos Vinicius</span> </h3>
        <h4>Sou desenvolvedor Web</h4>
        <SpanInfo>Apaixonado<br /> por Tecnologia e <br/>Inovação</SpanInfo>

        <ButtonStyle
          href="#contato"
          whileHover={{ scale: 1 }}
          variants={ moveVariants }
          animate="animation"
        >
          connect with me
        </ButtonStyle>

      </BoxInfo>

    </Container>
  )
}

export default Home