import { useState } from 'react';
import Footer from '../components/Footer';
import Title from '../components/Title';
import { arrayOfcontacts } from '../services/data';
import { ButtonStyle } from '../styles/Buttons/ButtonStyle';
import { ContainerForm, BoxLeft, BoxRight, TitleBox, BoxContacts, BoxIcons, FormRow } from '../styles/Contact';
import { Container } from '../styles/Container';
import emailJs from '@emailjs/browser';

const personFeedback = {
  name: '',
  lastName: '',
  phone: '',
  email: '',
  message: '',
}

function Contact() {
  const [feedback, setFeedback] = useState(personFeedback);
  const [isDesabled, setIsDesabled] = useState(true);

  function handleFeedback(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { id, value } = e.target;
    setFeedback({ ...feedback, [id]: value });
    setIsDesabled(!Object.values(feedback).every(element => element));
  }

  function submitFeedback(e: React.FormEvent): void {
    e.preventDefault();

    if (!isDesabled) {
      emailJs.send("service_d6gh1jg", "template_adtp7mm", feedback, "ED4IEGOO2BhaxtxpB")
      .then(response => {
        if (response.status === 200) {
          alert("email enviado");
        }
        setFeedback(personFeedback);
        setIsDesabled(true);
      }, (err) => console.log("err", err))
    }
  }

  return (
    <Container id="contato">

      <Title title="entre em contato" subTitle="Contate-me" />

      <ContainerForm>

        <BoxLeft
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1, delay: 0.5}}
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
          transition={{duration: 1, delay: 0.5}}
          onSubmit={ submitFeedback }
        >
          <TitleBox>Deixe seu feedback</TitleBox>

          <FormRow>
            <input value={feedback.name} type="text" id="name" placeholder="Nome" onChange={handleFeedback } />
            <input value={feedback.lastName} type="text" id="lastName" placeholder="Sobrenome" onChange={ handleFeedback } />
          </FormRow>
      
          <FormRow>
            <input value={feedback.phone} type="tel" id="phone" placeholder="Telefone" onChange={ handleFeedback } />
            <input value={feedback.email} type="email" id="email" placeholder="Email"  onChange={ handleFeedback } />
          </FormRow>

          <FormRow>
            <textarea value={feedback.message}  id="message" placeholder="Deixe uma mensagem" onChange={ handleFeedback } />
          </FormRow>

          <ButtonStyle disabled={isDesabled} type="submit" className="formBtn" >Enviar</ButtonStyle>

        </BoxRight>

      </ContainerForm>

      <Footer />

    </Container>
  )
}

export default Contact;