import { motion } from 'framer-motion';
import me from '../assets/images/me.jpeg';
import Title from '../components/Title';
import { arrayOfBios } from '../services/data';
import { BoxAbout, BoxContact, BoxImage, ContainerAbout } from '../styles/About';
import { ButtonStyle } from '../styles/Buttons/ButtonStyle';
import { Container } from '../styles/Container';

const About = () => {

  const handleButton = () => {
    fetch('Marcos-Vinicius-De-souza.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Marcos-Vinicius-De-souza.pdf';
            alink.click();
        })
    })
  }

  return (
    <Container id="sobre">

      <Title title="Quem sou eu?" subTitle="Sobre min"/>

      <ContainerAbout>

        <BoxImage
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={me}
            whileHover={{ y: 15, x: -15 }}
            transition={{ duration: .7 }}
          />
        </BoxImage>

        <BoxAbout
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

          {arrayOfBios.map((bio) => (
            <BoxContact key={`id-bio-${bio.id}`}>      
              <bio.icon />
              {bio.key}
              <span>{bio.value}</span>
            </BoxContact>
          ))}

          <ButtonStyle
            className="about-button"
            whileHover={{ scale: 2.1 }}
            transition={{ duration: 0.3 }}
            onClick={ handleButton }
          >
            Baixar Currículo
          </ButtonStyle>

        </BoxAbout>

      </ContainerAbout>

    </Container>
  )
}

export default About