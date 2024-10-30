import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  const handleMenuToggle = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#skills", text: "Skills" },
    { href: "#experience", text: "Experience" },
    { href: "#projects", text: "Projects" },
    { href: "#education", text: "Education" },
  ];

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span> Portfolio</Span>
          </a>
        </NavLogo>
        
        <MobileIcon onClick={handleMenuToggle}>
          <FaBars />
        </MobileIcon>

        <NavItems>
          {navLinks.map(({ href, text }) => (
            <NavLink key={text} href={href} onClick={handleLinkClick}>{text}</NavLink>
          ))}
        </NavItems>

        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            {navLinks.map(({ href, text }) => (
              <MobileLink key={text} href={href} onClick={handleLinkClick}>{text}</MobileLink>
            ))}
            <GitHubButton style={{
              padding: '10px 16px',
              background: theme.primary,
              color: 'white',
              width: 'max-content'
            }} href={Bio.github} target="_blank">
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
