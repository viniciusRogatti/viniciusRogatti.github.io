import { useState } from 'react';
import CardSkill from '../components/CardSkill';
import Title from '../components/Title';
import { arrayOfSkills, navFilters } from '../services/data';
import { ButtonStyle } from '../styles/Buttons/ButtonStyle';
import { Container } from '../styles/Container';
import { BoxButtons, BoxSkills } from '../styles/Skills';
import { AnimatePresence } from "framer-motion"

function Skills() {
  const [filter, setFilter] = useState(3);
  const [skills, setSkills] = useState(arrayOfSkills);

  function handleClick(type: number) {
    if (filter === type) {
      console.log(filter, type);      
      setFilter(4);
      return setSkills(arrayOfSkills);
    } else if (type === 1) {
      setFilter(type);
      return setSkills(arrayOfSkills.filter(skill => skill.type !== 2));
    } else if (type === 2) {
      setFilter(type);
      return setSkills(arrayOfSkills.filter(skill => skill.type !== 1));
    } else {
      setFilter(3);
      return setSkills(arrayOfSkills);
    }
  }

  return (
    <Container id="skills">

      <Title title="O que eu sei?" subTitle="Skills e Tecnologias" />

      <BoxButtons
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        transition={{ duration: 0.5, delay: 0.3,  ease: 'easeOut' }}
      >

        {navFilters.map(fil => (
          <ButtonStyle
            key={`skills-filter-${fil.id}`}
            id={fil.id}
            onClick={() => handleClick(fil.type)}
            className={ filter === fil.type ? 'active skills' : 'skills'}
          >
            {fil.name}
          </ButtonStyle>
        ))}

      </BoxButtons>
      <BoxSkills layout>
        <AnimatePresence>
          { skills.map(skill => <CardSkill key={`skill-${skill.id}`} skill={skill}/>) }
        </AnimatePresence>
      </BoxSkills>

    </Container>
  )
}

export default Skills;
