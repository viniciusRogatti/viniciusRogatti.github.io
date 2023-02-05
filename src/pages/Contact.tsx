import Footer from '../components/Footer';
import Title from '../components/Title';
import { arrayOfcontacts } from '../services/data';
import { ButtonStyle } from '../styles/Buttons/ButtonStyle';
import { ContainerForm, BoxLeft, BoxRight, TitleBox, BoxContacts, BoxIcons, FormRow } from '../styles/Contact';
import { Container } from '../styles/Container';

function Contact() {
  return (
    <Container id="contato">

      <Title title="entre em contato" subTitle="Contate-me" />

      <ContainerForm>

        <BoxLeft
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
        >
          <TitleBox>Como me encontrar?</TitleBox>
          {arrayOfcontacts.map((contact) => (
            <BoxContacts key={contact.id}>
              <BoxIcons>
                <contact.icon/>
              </BoxIcons>
              <p>{contact.infoText}</p>
            </BoxContacts>
          ))}

        </BoxLeft>

        <BoxRight
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
        >
          <TitleBox>Deixe seu feedback</TitleBox>

          <FormRow>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Sobrenome" />
          </FormRow>
      
          <FormRow>
            <input type="text" placeholder="Telefone" />
            <input type="text" placeholder="Email" />
          </FormRow>

          <FormRow>
            <textarea  placeholder="Deixe uma mensagem" />
          </FormRow>

          <ButtonStyle className="formBtn" >Enviar</ButtonStyle>

        </BoxRight>

      </ContainerForm>

      <Footer />

    </Container>
  )
}

export default Contact