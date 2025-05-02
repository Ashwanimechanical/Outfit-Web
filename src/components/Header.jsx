import React from 'react';
import { styled } from 'styled-components';
import { QrCode, Home, PlusCircle, Play, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.svg';

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 100vh;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  transition: width 0.3s ease;
  overflow: hidden;
  border-right: 1px solid #2d2d2d;
  z-index: 1000;
`;

const LogoContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Logo = styled.img`
  width: 40px;
  height: auto;
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-start;
  width: 100%;
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

  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo src={logo} alt="Website Logo" />
      </LogoContainer>
      <NavItems>
        <NavItem
          className={activeItem === 'home' ? 'active' : ''}
          onClick={() => setActiveItem('home')}
        >
          <Home size={24} />
        </NavItem>
        <NavItem
          className={activeItem === 'plus' ? 'active' : ''}
          onClick={() => setActiveItem('plus')}
        >
          <PlusCircle size={24} />
        </NavItem>
        <NavItem
          className={activeItem === 'play' ? 'active' : ''}
          onClick={() => setActiveItem('play')}
        >
          <Play size={24} />
        </NavItem>
        <NavItem
          className={activeItem === 'down' ? 'active' : ''}
          onClick={() => setActiveItem('down')}
        >
          <ChevronDown size={24} />
        </NavItem>
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
