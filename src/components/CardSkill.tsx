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
    <CardSkills layout key={`card-id-${skill.id}`}>
      <p>{skill.name}</p>
      <skill.svg />
    </CardSkills>
  )
}

export default CardSkill;