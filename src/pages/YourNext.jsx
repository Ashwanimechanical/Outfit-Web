import React from 'react';
 import styled from 'styled-components';
 import yellowcloth from '../assets/yellowcloth.png';
 import blackcloth5 from '../assets/blackcloth5.png';

 const Section = styled.div`
  min-width: 100%;
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
  overflow-x: auto; 
  -webkit-overflow-scrolling: touch; 
  padding: 10px 0; 
 `;

 const SliderImageWrapper = styled.div`
  background-color: #181818; 
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  flex-shrink: 0; /* Prevent images from shrinking */
 `;

 const SliderImage = styled.img`
  width: 140px; 
  height: auto;
  display: block;
 `;

 const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  line-height:1.1;
 `;

 const Subtitle = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 40px;
  max-width: 600px;

  
 `;

 const LetsGoButton = styled.button`
  width: 203px;
  height: 62px;
  background-color: #B2EE32;
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
    <Title>Your Next Outfit Is Just <br />Click Away!</Title>
    <Subtitle>Style inspo, shopping, and a personal stylist - all in one place</Subtitle>
    <LetsGoButton>Let's Go!</LetsGoButton>
   </Section>
  );
 };

 export default YourNext;