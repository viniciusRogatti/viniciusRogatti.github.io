import { CloseMenu, HeaderStyle, ImgProfile, Menu, MenuOpen, NavbarStyle, NavLinks } from '../styles/NavBar';
import SwitchTheme from './SwithTheme';
import me from '../assets/images/me.jpeg';
import SocialMedias from '../styles/SocialMedias';
import { RiMenu3Line, RiCloseFill } from 'react-icons/ri';
import { useState } from 'react';
import { menuVariants, navLinkVariants } from '../services/helpers/const';
import { arrayOfSocialMidias, navLinks } from '../services/data';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  
  return (
    <HeaderStyle>

      <NavbarStyle>

        <ImgProfile src={me} alt="Profile-Pic" />

        <NavLinks>
          {navLinks.map((navlink, index) => (
            <li key={`navLink-id-${index}`}>
              <a href={`#${navlink.toLocaleLowerCase()}`} onClick={() => setToggleMenu(false)}>{navlink}</a>
            </li>
          ))}
        </NavLinks>

        <SocialMedias className='header'>
          { arrayOfSocialMidias.map((social) => (
              <a key={social.id} href={social.link} target="_blank" rel="noreferrer">
                <social.icon />
              </a>
          ))}
        </SocialMedias>

        <Menu>
          <SwitchTheme />
          <RiMenu3Line onClick={() => { setToggleMenu(true) }} className="menuIcon"/>
        </Menu>

        <CloseMenu
          initial="hidden"
          animate={toggleMenu ? "visible" : "hidden"}
          variants={menuVariants}
        />

        <MenuOpen
          variants={navLinkVariants}
          animate={toggleMenu ? "visible" : "hidden"}
        >
          <RiCloseFill onClick={() => setToggleMenu(false)}/>
          {navLinks.map((navlink, index) => (
            <li key={index}>
              <a href={`#${navlink.toLocaleLowerCase()}`} onClick={() => setToggleMenu(false)}>{navlink}</a>
            </li>
          ))}
        </MenuOpen>

      </NavbarStyle>

    </HeaderStyle>
  );
};

export default Navbar;
