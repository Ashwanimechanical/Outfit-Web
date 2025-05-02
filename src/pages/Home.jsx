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

// Dummy image URLs
const jeansImageUrl = jeans;
const tshirtImageUrl = tshirt;
const dressImageUrl = dress;
const pantImageUrl = pant;

// Keyframes for rotating rings
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Styled Components for the Hero Section
const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #080808;
`;

const JoinNowButton = styled.button`
  width: 185px;
  height: 44px;
  position: absolute;
  top: 10px;
  right: 40px;
  background-color: #ffffff1a;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s ease;
  z-index: 3;
`;

const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  padding: 0 20px;
  max-width: 80%;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 32px;
  font-family: 'Mona Sans';
  line-height: 44px;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const LetsGoButton = styled.button`
  background-color: #00ff00;
  color: black;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 25px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #00b300;
  }
  @media (max-width: 480px) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
`;

// Styled Components for the Rings
const Ring = styled.div`
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(240, 230, 230, 0.52);
  animation: ${rotate} 20s linear infinite;
`;

const OuterRing = styled(Ring)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.6) rotate(30deg);
  width: 100vh;
  height: 60vh;
  animation-duration: 40s;
`;

const MiddleRing = styled(Ring)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.2) rotate(-20deg);
  width: 80vh;
  height: 48vh;
  animation-duration: 30s;
`;

const InnerRing = styled(Ring)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8) rotate(10deg);
  width: 60vh;
  height: 36vh;
  animation-duration: 20s;
`;

// Styled Components for the Floating Images
const FloatingImage = styled.img`
  position: absolute;
  background-color:#3F3F46;
  border-radius: 50%;
  box-shadow: 0px 4px 15pxrgb(28, 27, 27);
  user-select: none;
`;

const DressImage = styled(FloatingImage)`
  width: 48px;
  top: 20%;
  left: 10%;
  transform: rotate(-10deg);
  @media (max-width: 480px) {
    width: 20vh;
    top: 10%;
    left: 5%;
  }
`;

const JeansImage = styled(FloatingImage)`
  width: 48px;
  top: 30%;
  right: 15%;
  transform: rotate(20deg);
  @media (max-width: 480px) {
    width: 24vh;
    top: 25%;
    right: 10%;
  }
`;

const HatImage = styled(FloatingImage)`
  width: 48px;
  bottom: 25%;
  left: 25%;
  transform: rotate(15deg);
  @media (max-width: 480px) {
    width: 18vh;
    bottom: 20%;
    left: 20%;
  }
`;

const ShoesImage = styled(FloatingImage)`
 width: 48px;
  bottom: 10%;
  right: 5%;
  radius: 50%;
  border: 1px solid rgba(255,255,255,0,1);
  transform: rotate(-25deg);
  @media (max-width: 480px) {
    width: 26vh;
    bottom: 5%;
    right: 0%;
  }
`;

// Styled Components for the "Style That Understands You" Section (Integrated)
const StyleSection = styled.div`
  background-color: #080808;
  color: white;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyleTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const StyleSubtitle = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 40px;
  text-align: center;
  max-width: 600px;
`;

const SeeHowItWorksButton = styled.button`
  background-color: #00ff00;
  color: black;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 30px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00b300;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-top: 60px;
`;

const FeatureCard = styled.div`
  background-color: #181818;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconWrapper = styled.div`
  background-color: #282828;
  border-radius: 50%;
  padding: 15px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: #bbb;
`;

const HomePage = () => {
  return (
    <div>
      <HeroContainer>
        <JoinNowButton>Join Now</JoinNowButton>
        <OuterRing />
        <MiddleRing />
        <InnerRing />

        <HeroContentWrapper>
          <Heading>
            There are too many <br /> mediocre things in life, <br />
            Your Outfit shouldn't be one of them!
          </Heading>

          <LetsGoButton>Let's Go!</LetsGoButton>
        </HeroContentWrapper>

        <JeansImage src={jeansImageUrl} alt="jeans" />
        <HatImage src={tshirtImageUrl} alt="tshirt" />
        <DressImage src={dressImageUrl} alt="dress" />
        <ShoesImage src={pantImageUrl} alt="pant" />
      </HeroContainer>

      {/* "Style That Understands You" Section Integrated Here */}
      <StyleSection>
        <img src={star} alt="star" style={{ marginBottom: '20px', height: '110px', width: 'auto', color: '#00ff00' }} />
        <StyleTitle>Style That Understands You.</StyleTitle>
        <StyleSubtitle>
          OutfitQ is your AI stylist that curates outfits based on{' '} <br />
          <b>YOU</b> - your vibe, body, mood & moment.
        </StyleSubtitle>
        <SeeHowItWorksButton>See How It Works</SeeHowItWorksButton>
        <StyleTitle style={{ marginTop: '80px', marginBottom: '20px' }}>There's Something For <br /> Everyone Here.</StyleTitle>
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
      {/* <ExploreCategories /> */}
    </div>
  );
};

export default HomePage;
