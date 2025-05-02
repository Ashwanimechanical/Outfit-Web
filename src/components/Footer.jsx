import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #000; /* Black background */
  color: #b3b3b3; /* Light gray text */
  padding: 20px;
  display: flex;
  justify-content: space-between; /* Push content to the edges */
  align-items: center; /* Vertically center items */
  flex-wrap: wrap; /* Allow items to wrap on smaller screens */
  font-size: 0.8rem; /* Smaller font size */
`;

const CopyrightText = styled.p`
  margin: 0; 
  margin-right: 0; 
  order: 1; /* Ensure copyright is first in source order for accessibility */
  @media (max-width: 600px) {
    text-align: center; /* Center on small screens */
    margin-bottom: 10px; /* Add space below on small screens */
    order: 3; /* Move copyright to bottom on small screens */
    width: 100%;
  }
`;

const LinkList = styled.ul`
  list-style: none; /* Remove bullet points */
  display: flex; /* Use flexbox for horizontal layout */
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
  gap: 20px; /* Add some gap between links */
  order: 2; /* Links are second in source order */
  @media (max-width: 600px) {
    justify-content: center; /* Center links on small screens */
  }
`;

const LinkItem = styled.li`
  /* No specific styling needed, but you could add hover effects here */
`;

const FooterLink = styled.a`
  color: #b3b3b3; /* Light gray link color */
  text-decoration: none; /* Remove underline */
  &:hover {
    text-decoration: underline; /* Add underline on hover for better UX */
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightText>
        © 2005 Outfit. A product of Colladome Private Limited. All Rights Reserved.
      </CopyrightText>
      <LinkList>
        <LinkItem>
          <FooterLink href="#">Contact</FooterLink>
        </LinkItem>
        <LinkItem>
          <FooterLink href="#">Blogs</FooterLink>
        </LinkItem>
        <LinkItem>
          <FooterLink href="#">Terms</FooterLink>
        </LinkItem>
          <LinkItem>
          <FooterLink href="#">Cookies</FooterLink>
        </LinkItem>
        <LinkItem>
          <FooterLink href="#">Privacy</FooterLink>
        </LinkItem>
      </LinkList>
    </FooterContainer>
  );
};

export default Footer;
