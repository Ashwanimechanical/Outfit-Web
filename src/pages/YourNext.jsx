import React from 'react';
 import styled from 'styled-components';
 import yellowcloth from '../assets/yellowcloth.png';
 import blackcloth5 from '../assets/blackcloth5.png';

 const Section = styled.div`
  background-color: #000000;
  color: white;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
 `;

 const ImageSliderContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
  overflow-x: auto; /* Enable horizontal scrolling for smaller screens */
  -webkit-overflow-scrolling: touch; /* For smooth scrolling on iOS */
  padding: 10px 0; /* Add some padding around the images */
 `;

 const SliderImageWrapper = styled.div`
  background-color: #181818; /* Dark background for the rounded corners */
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  flex-shrink: 0; /* Prevent images from shrinking */
 `;

 const SliderImage = styled.img`
  width: 150px; /* Adjust as needed to match the image size in the screenshot */
  height: auto;
  display: block;
 `;

 const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
 `;

 const Subtitle = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 40px;
  max-width: 600px;
 `;

 const LetsGoButton = styled.button`
  background-color: #00ff00;
  color: black;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
   background-color: #00b300;
  }
 `;

 const Footer = styled.div`
  font-size: 1rem;
  color: #888;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
 `;

 const YourNext = () => {
  return (
   <Section>
    <ImageSliderContainer>
     <SliderImageWrapper>
      <SliderImage src={yellowcloth} alt="Outfit 1" />
     </SliderImageWrapper>
     <SliderImageWrapper>
      <SliderImage src={blackcloth5} alt="Outfit 2" />
     </SliderImageWrapper>
     <SliderImageWrapper>
      <SliderImage src={yellowcloth} alt="Outfit 3" />
     </SliderImageWrapper>
     <SliderImageWrapper>
      <SliderImage src={blackcloth5} alt="Outfit 4" />
     </SliderImageWrapper>
     <SliderImageWrapper>
      <SliderImage src={yellowcloth} alt="Outfit 5" />
     </SliderImageWrapper>
     <SliderImageWrapper>
      <SliderImage src={blackcloth5} alt="Outfit 6" />
     </SliderImageWrapper>
     <SliderImageWrapper>
      <SliderImage src={yellowcloth} alt="Outfit 7" />
     </SliderImageWrapper>
     <SliderImageWrapper>
      <SliderImage src={blackcloth5} alt="Outfit 8" />
     </SliderImageWrapper>
    </ImageSliderContainer>
    <Title>Your Next Outfit Is Just Click Away!</Title>
    <Subtitle>Style inspo, shopping, and a personal stylist - all in one place</Subtitle>
    <LetsGoButton>Let's Go!</LetsGoButton>
   </Section>
  );
 };

 export default YourNext;