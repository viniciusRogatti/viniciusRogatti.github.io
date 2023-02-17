import { CardSkills } from '../styles/Skills';
import React from 'react';

interface Skill {
  id: string;
  type: number;
  name: string;
  svg: React.FC;
}

function CardSkill({ skill }: { skill: Skill }) {
  return (
    <CardSkills
      layout
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: [1, 0.5] }}
      whileInView={{ scale: [0.5, 1], opacity: 1}}
      transition={{ duration: 0.75 }}
      key={`card-id-${skill.id}`}
    >
      <p>{skill.name}</p>
      <skill.svg />
    </CardSkills>
  )
}

export default CardSkill;