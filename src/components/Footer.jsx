import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #000;
  color: #b3b3b3;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* Enable wrapping for smaller screens */
  font-size: 0.8rem;

  @media (max-width: 600px) {
    flex-direction: column; /* Stack elements vertically */
    align-items: center; /* Center items in the column */
    padding: 15px; /* Reduce padding on smaller screens */
  }
`;

const CopyrightText = styled.p`
  margin-left: 100px;
  order: 1;
  font-size: 0.9rem;

  @media (max-width: 600px) {
    text-align: center;
    margin-bottom: 10px;
    margin-left: 0; /* Remove left margin on smaller screens */
    order: 2; /* Move copyright below links when stacked */
    width: 100%;
  }
`;

const LinkList = styled.ul`
  margin-right: 50px;
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  gap: 20px;
  order: 2;

  @media (max-width: 600px) {
    justify-content: center; /* Keep links centered */
    margin-right: 0;
    margin-bottom: 20px;
    order: 1;
    flex-wrap: wrap; /* Allow links to wrap if they don't fit */
    gap: 10px; /* Reduce the gap between links on smaller screens */
  }
`;

const LinkItem = styled.li`
  margin-right: 20px;
  font-size: 0.9rem;

  @media (max-width: 600px) {
    margin-right: 10px; /* Reduce right margin between items on smaller screens */
  }
`;

const FooterLink = styled.a`
  color: #b3b3b3;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
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