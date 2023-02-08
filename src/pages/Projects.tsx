import { useRef, useState } from 'react';
import Title from '../components/Title';
import { navFilterCategory } from '../services/data';
import { ButtonStyle } from '../styles/Buttons/ButtonStyle';
import { arrayOfProjects } from '../services/data';
import { Container } from '../styles/Container';
import { BoxHoverLayer, BoxIconsHover, BoxProjects, CardProject } from '../styles/Projects'
import { BoxButtons } from '../styles/Skills';
import { ChevronLeftIcon } from '../styles/icons';
import { BoxCarrousel, Carrousel } from '../styles/Carrousel';
import { motion } from 'framer-motion'
import { FiGithub, FiEye } from 'react-icons/fi'

function Projects() {
  const [projects, setProjects] = useState(arrayOfProjects);
  const [filter, setFilter] = useState('all');
  const [isSeeDetails, setIsSeeDetails] = useState(false);
  const carrousel = useRef(null);

  const { innerWidth: width } = window;


  function handleClick(category: string) {
    if (filter === category) {  
      setFilter('all');
      return setProjects(arrayOfProjects);
    } else if (category === 'web') {
      setFilter(category);
      return setProjects(arrayOfProjects.filter(project => project.category !== 'app'));
    } else if (category === 'app') {
      setFilter(category);
      return setProjects(arrayOfProjects.filter(project => project.category !== 'web'));
    } else {
      setFilter('all');
      return setProjects(arrayOfProjects);
    }
  }

  const handleClickSeeDetails = () => { 
    setIsSeeDetails(!isSeeDetails);
  }

  const handleLeftClick = () => {
    const curr: any =  carrousel.current;
    const calc = width > 1224 ? 1224 * 0.72: (width * 0.70);
    
    if (curr) curr.scrollLeft -= calc;  
  };

  const handleRightClick = () => {
    const curr: any =  carrousel.current; 
    const calc = width > 1224 ? 1224 * 0.72 : (width * 0.70);
    if (curr) curr.scrollLeft += calc;
  };

  return (
    <Container id="projetos">

      <BoxProjects>

        <Title title="O que eu aprendi?" subTitle="Meus Projetos" />

        <BoxButtons
          initial={{opacity: 0}}
          whileInView={{y: [-50, 0], opacity: 1}}
        >
          {navFilterCategory.map(fil => (
            <ButtonStyle
              key={fil.key}
              id={fil.category}
              onClick={() => handleClick(fil.category)}
              className={ filter === fil.category ? 'active' : ''}
            >
              {fil.category.toLocaleUpperCase()}
            </ButtonStyle>
          ))}        
        </BoxButtons>

        <BoxCarrousel
          whileInView={{x: [-250, 0], opacity: [0, 1]}}
          transition={{duration: 2, delay: 0.4, ease: "easeInOut"}}
        >

          <Carrousel ref={ carrousel }>

            { projects.map(project => (
              <CardProject key={project.id} onClick={ handleClickSeeDetails }>
                <img src={project.img} alt={`card-img-${project.name}`} />
                <BoxHoverLayer
                  style={{ opacity: +isSeeDetails }}
                  initial={{opacity: +isSeeDetails}}
                  whileHover={{ opacity: [+isSeeDetails, 1] }}
                  transition={{duration: 0.4, delay: 0.5 , ease: "easeInOut" }}
                >
                <h1>{project.name}</h1>                  
                <BoxIconsHover>
                  <motion.a 
                    href={project.repository}
                    target="_blank"
                    whileInView={{scale: [0,1], opacity: [0, 1] }}
                    whileHover={{scale: [1, 1.1] }}
                    transition={{duration: 0.3 }}
                  >
                    <FiGithub />
                  </motion.a>                    
                  <motion.a 
                    href={project.url}
                    target="_blank"
                    whileInView={{scale: [0,1], opacity: [0, 1] }}
                    whileHover={{scale: [1, 1.1] }}
                    transition={{duration: 0.3 }}
                  >
                    <FiEye />
                  </motion.a>
                </BoxIconsHover>
              </BoxHoverLayer>
              </CardProject>
            )) }
          </Carrousel>
      <ChevronLeftIcon onClick={ handleLeftClick } className="chevron-left" />
      <ChevronLeftIcon onClick={ handleRightClick } className="chevron-right" />
      </BoxCarrousel>

      </BoxProjects>
    </Container>
  )
}

export default Projects;
