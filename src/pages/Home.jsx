import React from 'react';
import { styled, keyframes } from 'styled-components';
import jeans from "../assets/jeans.png";
import tshirt from "../assets/tshirt.png";
import dress from "../assets/dress.png";
import pant from "../assets/pant.png";
import star from '../assets/star.png';
import Vector from '../assets/Vector.svg';
import Frame from '../assets/Frame.svg';
import Star from '../assets/Star.svg';
import reset  from '../assets/reset.svg';
import ExploreCategories from './ExploreCategories';
import YourNext from './YourNext';


const jeansImageUrl = jeans;
const tshirtImageUrl = tshirt;
const dressImageUrl = dress;
const pantImageUrl = pant;


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


const HeroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #080808;
  padding-top: 100px; 
  padding-bottom: 80px; 

  @media (min-width: 769px) {
    padding-top: 220px; 
    padding-bottom: 190px; 
`;

const JoinNowButton = styled.button`
  display: none; 
  width: 120px;
  height: 36px;
  position: absolute;
  top: 15px;
  right: 15px;
  background-color:rgba(255, 255, 255, 0.23);
  color: white;
  padding: 8px 15px;
  border: 1px solid rgba(255, 255, 255, 0.23);
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
  z-index: 3;

  @media (min-width: 769px) {
    display: block; /* Shown on desktop */
    width: 185px;
    height: 44px;
    top: 40px;
    right: 50px;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 20px;
  }
`;

const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  padding: 0 20px;
  max-width: 100%;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 26px; 
  font-family: 'Mona Sans';
  line-height: 34px;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  span {
    color: #b4ff00;
  }
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);

  @media (min-width: 769px) {
    font-size: 32px;
    line-height: 44px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  }
`;

const LetsGoButton = styled.button`

  background-color:#B2EE32;
  width: 150px; 
  height: 40px; 
  color: black;
  padding: 0.7rem 1.8rem; 
  border: none;
  border-radius: 10px;
  font-size: 0.9rem; 
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
  margin-top: 1.2rem;

  &:hover {
    background-color: #00b300;
  }
  @media (min-width: 769px) {
    width: 180px;
    height: 50px;
    padding: 1rem 2.5rem;
    border-radius: 15px;
    font-size: 1.2rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    margin-top: 1.5rem;
  }
`;


const Ring = styled.div`
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(240, 230, 230, 0.52);
  animation: ${rotate} 20s linear infinite;
`;

const OuterRing = styled(Ring)`
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.6);
  width: 70vw;
  height: 42vw;
  animation-duration: 40s;

  @media (min-width: 769px) {
    top: 0;
    left: 0;
    transform: translate(-50%, -50%) scale(1.6) rotate(30deg);
    width: 100vh;
    height: 60vh;
  }
`;

const MiddleRing = styled(Ring)`
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.45); 
  width: 55vw;
  height: 33vw;
  animation-duration: 30s;

  @media (min-width: 769px) {
    top: 20%;
    left: 35%;
    transform: translate(-50%, -50%) scale(1.2) rotate(-20deg);
    width: 80vh;
    height: 48vh;
  }
`;

const InnerRing = styled(Ring)`
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.3); 
  width: 40vw;
  height: 24vw;
  animation-duration: 20s;
  bigerRing
`;

const BigerRing = styled(Ring)`
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.5); 
  width: 60vw;
  height: 36vw;
  animation-duration: 20s;
  bigerRing

  @media (min-width: 769px) {
    top: 20%;
    left: 30%;
    transform: translate(-50%, -50%) scale(0.8) rotate(10deg);
    width: 100vh;
    height: 60vh;
  }
`;


const FloatingImage = styled.img`
  position: absolute;
  background-color:#3F3F46;
  border-radius: 50%;
  box-shadow: 0px 2px 8px rgb(28, 27, 27);
  user-select: none;
`;

const DressImage = styled(FloatingImage)`
  width: 8vw; 
  top: 10%;
  left: 15%;
  transform: rotate(-10deg);
  @media (min-width: 769px) {
    width: 48px;
    top: 20%;
    left: 20%;
    box-shadow: 0px 4px 15pxrgb(28, 27, 27);
  }
`;

const JeansImage = styled(FloatingImage)`
  width: 9vw; 
  top: 12%;
  right: 15%;
  transform: rotate(20deg);
  @media (min-width: 769px) {
    width: 48px;
    top: 20%;
    right: 20%;
    box-shadow: 0px 4px 15pxrgb(28, 27, 27);
  }
`;

const HatImage = styled(FloatingImage)`
  width: 7vw; 
  bottom: 10%;
  left: 20%;
  transform: rotate(15deg);
  @media (min-width: 769px) {
    width: 48px;
    bottom: 25%;
    left: 25%;
    box-shadow: 0px 4px 15pxrgb(28, 27, 27);
  }
`;

const ShoesImage = styled(FloatingImage)`
 width: 10vw; 
  bottom: 8%;
  right: 20%;
  border: 1px solid rgba(255,255,255,0,1);
  transform: rotate(-25deg);
  @media (min-width: 769px) {
    width: 48px;
    bottom: 20%;
    right: 15%;
    box-shadow: 0px 4px 15pxrgb(28, 27, 27);
  }
`;


const StyleSection = styled.div`
  background-color: #080808;
  color: white;
  padding: 50px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    padding: 80px 20px;
  }
`;

const StyleTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 15px;
  text-align: center;
  @media (min-width: 769px) {
    font-size: 54px;
    margin-bottom: 20px;
  }
`;

const StyleSubtitle = styled.p`
  font-size: 20px;
  color: #ccc;
  margin-bottom: 30px;
  text-align: center;
  max-width: 90%;
  line-height: 1.4;
  span {
    color: #b4ff00;
  }
  @media (min-width: 769px) {
    font-size: 24px;
    max-width: 600px;
    margin-bottom: 40px;
  }
`;

const SeeHowItWorksButton = styled.button`
  width: 170px;
  height: 48px;
  background-color: #B2EE32;
  color: black;
  padding: 12px 25px;
  border: none;
  border-radius: 15px;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 30px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00b300;
  }
  @media (min-width: 769px) {
    width: 203px;
    height: 65px;
    font-size: 1rem;
    padding: 15px 30px;
    border-radius: 20px;
    margin-top: 30px;
    margin-bottom: 40px;
  }
`;

const StyleTitle2 = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 15px;
  text-align: center;
  line-height: 1.3;
  @media (min-width: 769px) {
    font-size: 32px;
    margin-bottom: 20px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  max-width: 90%;
  margin-top: 40px;
  @media (min-width: 769px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    max-width: 1200px;
    margin-top: 60px;
  }
`;

const FeatureCard = styled.div`
  background-color:rgba(161, 161, 161, 0.14);
  width: 100%;
  height: auto;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconWrapper = styled.div`
  size: 24px;
  border-radius: 50%;
  padding: 12px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeatureTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 6px;
`;

const FeatureDescription = styled.p`
  font-size: 0.8rem;
  color: #bbb;
  line-height: 1.3;
`;

const HomePage = () => {
  return (
    <div>
      <HeroContainer>
        <JoinNowButton>Join Now</JoinNowButton>
        <OuterRing />
        <MiddleRing />
        <InnerRing />
        <BigerRing />

        <HeroContentWrapper>
          <Heading>
            There are too many <br /> mediocre things in life, <br />
            Your <span>Outfit</span> shouldn't be one of them!
          </Heading>

          <LetsGoButton>Let's Go!</LetsGoButton>
        </HeroContentWrapper>

        <JeansImage src={jeansImageUrl} alt="jeans" />
        <HatImage src={tshirtImageUrl} alt="tshirt" />
        <DressImage src={dressImageUrl} alt="dress" />
        <ShoesImage src={pantImageUrl} alt="pant" />
      </HeroContainer>

      
      <StyleSection>
        <img src={star} alt="star" style={{ marginBottom: '20px', height: '110px', width: 'auto', color: '#00ff00' }} />
        <StyleTitle>Style That Understands You.</StyleTitle>
        <StyleSubtitle>
          OutfitQ is your AI stylist that curates outfits based on{' '} <br />
          <span>YOU</span> - your vibe, body, mood & moment.
        </StyleSubtitle>
        <SeeHowItWorksButton>See How It Works</SeeHowItWorksButton>
        <StyleTitle2 style={{ marginTop: '80px', marginBottom: '20px' }}>There's Something For <br /> Everyone Here.</StyleTitle2>
        <FeaturesGrid>
          <FeatureCard>
            <IconWrapper>
              <img src={Vector} alt="Heart" style={{ height: '30px', width: 'auto', color: '#00ff00' }} />
            </IconWrapper>
            <FeatureTitle>Personalized Styling</FeatureTitle>
            <FeatureDescription>
              Outfits made for your age, tone, body type, mood, and the moment.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper>
              <img src={Frame} alt="User Group" style={{ height: '30px', width: 'auto', color: '#00ff00' }} />
            </IconWrapper>
            <FeatureTitle>Gender-Inclusive</FeatureTitle>
            <FeatureDescription>
              We style everyone, every body, every identity.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper>
              <img src={Star} alt="Star" style={{ height: '30px', width: 'auto', color: '#00ff00' }} />
            </IconWrapper>
            <FeatureTitle>Occasion-Based Looks</FeatureTitle>
            <FeatureDescription>
              Looks for work, party, date night, or chill Sundays.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper>
              <img src={reset} alt="Refresh" style={{ height: '30px', width: 'auto', color: '#00ff00' }} />
            </IconWrapper>
            <FeatureTitle>Style Learning</FeatureTitle>
            <FeatureDescription>
              The more you vibe with us, the better we get at styling you.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
        
      </StyleSection>
      <ExploreCategories />
      <YourNext/>
    </div>
  );
};

export default HomePage;
