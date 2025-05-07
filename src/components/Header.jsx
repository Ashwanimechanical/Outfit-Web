import React from 'react';
import { styled } from 'styled-components';
import {  Home, PlusCircle, Play, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 100vh;
  background-color: rgba(38, 65, 45, 0.23);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  transition: width 0.3s ease;
  overflow: hidden;
  border-right: 1px solid #2d2d2d;
  z-index: 1000;

  @media (max-width: 768px) {
    display: none; /* Hide the default navbar on smaller screens */
  }
`;

const MobileNavIcon = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  display: none; /* Hidden by default on larger screens */
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  z-index: 1001; /* Ensure it's above the navbar if it were visible */

  span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: #b3b3b3;
    transition: all 0.3s ease;
  }

  &.open span:nth-child(1) {
    transform: translateY(10px) rotate(45deg);
  }

  &.open span:nth-child(2) {
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: translateY(-10px) rotate(-45deg);
  }

  @media (max-width: 768px) {
    display: flex; /* Show the icon on smaller screens */
  }
`;

const MobileNavItems = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(38, 65, 45, 0.9); /* Adjust opacity as needed */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999; /* Below the icon */
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  &.open {
    opacity: 1;
    visibility: visible;
  }
`;

const MobileNavItem = styled.div`
  margin-bottom: 30px;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
`;

const LogoContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    display: none; /* Optionally hide the logo on mobile */
  }
`;

const Logo = styled.img`
  width: 45px;
  height: auto;
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    display: none; /* Hide the default nav items on smaller screens */
  }
`;

const NavItem = styled.div`
  margin-bottom: 30px;
  color: #b3b3b3;
  cursor: pointer;
  transition: color 0.2s ease;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 8px 0;

  &:hover {
    color: white;
  }

  &.active {
    color: white;
    background-color: #333333;
    border-radius: 8px;
  }
`;

const Navbar = () => {
  const [activeItem, setActiveItem] = React.useState('home');
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const handleMobileNavItemClick = (path, itemName) => {
    navigate(path);
    setActiveItem(itemName);
    setIsMobileNavOpen(false); // Close the mobile nav after clicking
  };

  return (
    <>
      <NavbarContainer>
        <LogoContainer>
          <Logo src={logo} alt="Website Logo" />
        </LogoContainer>
        <NavItems>
          <NavItem
            className={activeItem === 'home' ? 'active' : ''}
            onClick={() => {
              setActiveItem('home');
              navigate('/');
            }}
          >
            <Home size={24} />
          </NavItem>

          <NavItem
            className={activeItem === 'plus' ? 'active' : ''}
            onClick={() => {
              setActiveItem('plus');
              navigate('/onboard'); //  OnBoard page
            }}
          >
            <PlusCircle size={24} />
          </NavItem>

          <NavItem
            className={activeItem === 'play' ? 'active' : ''}
            onClick={() => {
              setActiveItem('play');
              navigate('/play');
            }}
          >
            <Play size={24} />
          </NavItem>

          <NavItem
            className={activeItem === 'down' ? 'active' : ''}
            onClick={() => {
              setActiveItem('down');
              navigate('/downloads');
            }}
          >
            <ChevronDown size={24} />
          </NavItem>
        </NavItems>
      </NavbarContainer>

      <MobileNavIcon onClick={toggleMobileNav} className={isMobileNavOpen ? 'open' : ''}>
        <span></span>
        <span></span>
        <span></span>
      </MobileNavIcon>

      <MobileNavItems className={isMobileNavOpen ? 'open' : ''}>
        <MobileNavItem onClick={() => handleMobileNavItemClick('/', 'home')}>
          Home
        </MobileNavItem>
        <MobileNavItem onClick={() => handleMobileNavItemClick('/onboard', 'plus')}>
          Onboard
        </MobileNavItem>
        <MobileNavItem onClick={() => handleMobileNavItemClick('/play', 'play')}>
          Play
        </MobileNavItem>
        <MobileNavItem onClick={() => handleMobileNavItemClick('/downloads', 'down')}>
          Downloads
        </MobileNavItem>
      </MobileNavItems>
    </>
  );
};

export default Navbar;
