import styled, { css } from 'styled-components';
import { FaUser, FaPhoneAlt, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import { ReactComponent as GitHub } from '../../assets/svg/github-brands.svg';
import { ReactComponent as Linkedin } from '../../assets/svg/linkedin-3.svg';
import { ReactComponent as Sun } from '../../assets/svg/sun-icon.svg';
import { ReactComponent as Moon } from '../../assets/svg/moon-icon.svg';
import { ReactComponent as chevronLeftIcon } from '../../assets/svg/chevron-left-icon.svg';
import { ReactComponent as JsIcon } from '../../assets/svg/javaScript.svg';
import { ReactComponent as ReactIcon } from '../../assets/svg/react.svg';
import { ReactComponent as CssIcon } from '../../assets/svg/css3.svg';
import { ReactComponent as HtmlIcon } from '../../assets/svg/html5.svg';
import { ReactComponent as ReduxIcon } from '../../assets/svg/redux.svg';
import { ReactComponent as TsIcon } from '../../assets/svg/typescript.svg';
import { ReactComponent as GitIcon } from '../../assets/svg/git.svg';
import { ReactComponent as JestIcon } from '../../assets/svg/jest.svg';
import { ReactComponent as NodeJsIcon } from '../../assets/svg/nodeJs.svg';
import { ReactComponent as ExpressIcon } from '../../assets/svg/express.svg';
import { ReactComponent as DockerIcon } from '../../assets/svg/docker.svg';
import { ReactComponent as MySqlIcon } from '../../assets/svg/mySql.svg';
import { ReactComponent as SequelizeIcon } from '../../assets/svg/sequelize.svg';
import { ReactComponent as BashIcon } from '../../assets/svg/bash.svg';
import { ReactComponent as NpmIcon } from '../../assets/svg/npm.svg';
import { ReactComponent as NextJsIcon } from '../../assets/svg/nextJs.svg';
import { ReactComponent as MochaIcon } from '../../assets/svg/mocha.svg';

import StyledComp from '../../assets/images/styled-components.png';
import ReactRouter from '../../assets/images/react-route.png';
import TestingLibrary from '../../assets/images/octopus-64x64.png'

const socialIconsCss = css`
  width: 28px;
  height: 28px;
  fill: ${props => props.theme.color};
  color: ${props => props.theme.color};
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.4s ease;

  &:hover {
    opacity: 1;
  }
`;


const iconsContactsCss = css`
  fill: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.secondaryColor};
`

const themeCss = css`
  width: 28px;
  height: 28px;
  color: ${props => props.theme.color};
`

const iconsSkillsCss = css`
  width: 5rem;
  height: 5rem;
  border-radius: 8px;

  @media screen and (max-width: 500px) {
    width: 50px;
    height: 50px;
  }
`;

export const ChevronLeftIcon = styled(chevronLeftIcon)`
  width: 100px;
  height: 100px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    width: 50px;
    height: 50px;
  }

  path {
    fill: ${props => props.theme.color};
  }
`;

export const html5Icon = styled(HtmlIcon)`${iconsSkillsCss}`;
export const css3Icon = styled(CssIcon)`${iconsSkillsCss}`;
export const jsIcon = styled(JsIcon)`${iconsSkillsCss}`;
export const reactIcon = styled(ReactIcon)`${iconsSkillsCss}`;
export const reduxIcon = styled(ReduxIcon)`${iconsSkillsCss}`;
export const tsIcon = styled(TsIcon)`${iconsSkillsCss}`;
export const gitIcon = styled(GitIcon)`${iconsSkillsCss}`;
export const jestIcon = styled(JestIcon)`${iconsSkillsCss}`;
export const nodeJsIcon = styled(NodeJsIcon)`${iconsSkillsCss}`;
export const expressIcon = styled(ExpressIcon)`${iconsSkillsCss}`;
export const mySqlIcon = styled(MySqlIcon)`${iconsSkillsCss}`;
export const dockerIcon = styled(DockerIcon)`${iconsSkillsCss}`;
export const sequelizeIcon = styled(SequelizeIcon)`${iconsSkillsCss}`;
export const bashIcon = styled(BashIcon)`${iconsSkillsCss}`;
export const npmIcon = styled(NpmIcon)`${iconsSkillsCss}`;
export const nextJsIcon = styled(NextJsIcon)`${iconsSkillsCss}`;
export const mochaIcon = styled(MochaIcon)`${iconsSkillsCss}`;

export const styledCompIcon = styled.div`
  ${iconsSkillsCss};
  background-image: url(${StyledComp});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const reactRouteIcon = styled.div`
  ${iconsSkillsCss};
  background-image: url(${ReactRouter});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const tetingLibraryIcon = styled.div`
  ${iconsSkillsCss};
  background-image: url(${TestingLibrary});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;


export const nameIcon = styled(FaUser)`${socialIconsCss}`;
export const tellIcon = styled(FaPhoneAlt)`${socialIconsCss}`;
export const emailIcon = styled(FaPaperPlane)`${socialIconsCss}`;

export const marketIcon = styled(FaMapMarkerAlt)`${iconsContactsCss}`;
export const paperPlaneIcon = styled(FaPaperPlane)`${iconsContactsCss}`;
export const phoneIcon = styled(FaPhoneAlt)`${iconsContactsCss}`;

export const GitHubIcon = styled(GitHub)`${socialIconsCss}`;
export const LinkedinIcon = styled(Linkedin)`${socialIconsCss}`;
export const SunIcon = styled(Sun)`${themeCss}`;
export const MoonIcon = styled(Moon)`${themeCss}`;