import { motion } from "framer-motion";
import styled from "styled-components";

const HeaderStyle = styled(motion.header)`
  position: fixed;
  max-width: 100vw;
  width: 100%;
  height: 100px;
  top: 0;
  left: 0;
  z-index: 10;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  box-shadow: rgba(41, 41, 41, 0.342) 0px 30px 20px -1px;

  &.active {
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(10px);
  }
`;

const NavbarStyle = styled.div`
  position: relative;
  max-width: 1224px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
  }
`;

const ImgProfile = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  cursor: pointer;

  li {
    @media screen and (max-width: 800px) {
      display: none;
      list-style: none;
    }
    a {
      color: ${props => props.theme.secondaryColor};
      font-size: 1.5rem;
      transition: all 0.3s ease;
      text-decoration: none;
    }
  }

`;

const Menu = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  background: ${props => props.theme.background};

  svg {
    width: 40px;
    height: 40px;
  }

  .menuIcon {
    display: none;
  }

  @media screen and (max-width: 800px) {
    margin-right: 0.5rem;

    .menuIcon {
    display: block;
  }
  }

`;

const CloseMenu = styled(motion.div)`
  background: ${props => props.theme.background};
  width: 4rem;
  height: 4rem;
  position: fixed;
  right: 0;
  top: 0;
  border-radius: 50%;
`;


const MenuOpen = styled(motion.div)`
  color: ${props => props.theme.color};
  position: fixed;
  top: 2rem;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  svg {
    cursor: pointer;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 1.5rem;
    right: 1rem;
  }
  li {
    list-style: none;
    margin-top: 1rem;

    a {
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 500;
      color: ${props => props.theme.color};
      font-size: 1.5rem;
      transition: all 0.3s ease;
    }
  }
`;


export { HeaderStyle, NavbarStyle, ImgProfile, NavLinks, Menu, CloseMenu, MenuOpen };
