import React from 'react';
import styled from 'styled-components';
import { User } from 'lucide-react';
import backcloth from '../assets/blackcloth.png';
import backcloth1 from '../assets/blackcloth1.png';
import backcloth2 from '../assets/blackcloth2.png';

const Section = styled.div`
  background-color: #080808;
  color: white;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #ccc;
  margin-bottom: 30px;
  text-align: center;
`;

const CategoryButton = styled.button`
  width: 266px;
  height: 74px; 
  background-color: ${(props) => (props.isActive ? '#00ff00' : '#181818')};
  color: #FFFFFF;
  border: 1px solid rgba(13, 14, 0, 0.92);
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  margin: 5px;
  
  align-items: center;
  gap: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:rgba(140, 179, 0, 0.38);
  }
`;

const CategoriesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
`;

const OutfitSlider = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
 
  position: relative;
`;

const OutfitImageWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
`;

const OutfitImage = styled.img`
  width: 200px;
  height: auto;
  display: block;
`;

const SliderButton = styled.button`
  background: none;
  border: 1px solid white;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 10px;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
  }

  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &.left {
    left: -50px;
  }

  &.right {
    right: -50px;
  }

  svg {
    height: 20px;
    width: auto;
    fill: white; /* Adjust fill color as needed */
  }
`;

const ExploreMoreButton = styled.button`
  background-color: #B2EE32;
  width: 221px;
  height: 62px;
  color: black;
  border: none;
  border-radius: 20px;
  padding: 15px 30px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 40px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00b300;
  }
`;

const SeeItSection = styled.div`
  margin-top: 40px;
  text-align: center;
  margin-bottom: 40px;
`;

const SeeItTitle = styled.h3`
  font-size: 38px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const SeeItSubtitle = styled.p`
  font-size: 18px;
  color: #ccc;
  margin-bottom: 20px;
`;

const LinkInputContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 547px;
  height:52px;
  radius: 15px;
 
`;

const LinkInput = styled.input`
  background-color:rgba(71, 62, 62, 0.44);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 0.9rem;
  flex-grow: 1;

  &::placeholder {
    color: #ccc;
  }
`;

const GenerateButton = styled.button`
  width: 170px;
  height: 52px;
  background-color: #B2EE32;
  color: black;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00b300;
  }
`;
const SectionHIW = styled.section`
  padding: 60px 20px;
  color: white;
  text-align: center;
  position: relative;
`;

const TitleHIW = styled.h2`
  font-size: 38px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const StepsContainerHIW = styled.div`
  background:rgba(61, 55, 55, 0.14);
  border-radius: 16px;
  padding: 10px 20px;
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
  position: relative;
`;

const StepCardHIW = styled.div`
  padding: 20px 0;
  
  position: relative;
  transition: background 0.3s, border-left 0.3s;

  &:first-child {
    background:rgb(42, 44, 42);
    border-left: 4px solid #b3ff3a;
    border-radius: 8px;
    padding-left: 12px;
  }

  &:not(:first-child):hover {
    background:rgb(42, 45, 42);
    border-left: 4px solid #b3ff3a;
    border-radius: 8px;
    padding-left: 12px;
    cursor: pointer;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const StepContentHIW = styled.div``;

const StepTitleHIW = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin-bottom: 8px;
`;

const StepDescriptionHIW = styled.p`
  font-size: 14px;
  color: #bbbbbb;
`;

const BuildOutfitButtonHIW = styled.button`
  width: 203px;
  height: 62px;
  margin-top: 15px;
  padding: 12px 24px;
  background-color: #B2EE32;
  color: #000;
  font-weight: bold;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #a0f832;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: -130px;
  background-color: #1c2b18;
  border-radius: 50%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #b3ff3a;
    width: 48px;
    height: 48px;
  }
`;

const ExploreCategories = () => {
  const categories = [
    { name: 'Special Occasions', icon: () => (<span style={{ fontSize: '1.2em' }}>✨</span>) },
    { name: 'Summer Fits', icon: () => (<span style={{ fontSize: '1.2em' }}>🌻</span>), isActive: true },
    { name: 'Workwear', icon: () => (<span style={{ fontSize: '1.2em' }}>💼</span>) },
    { name: 'Chill & Active', icon: () => (<span style={{ fontSize: '1.2em' }}>🧘</span>) },
    { name: 'Everyday Casual', icon: () => (<span style={{ fontSize: '1.2em' }}>👖</span>) },
    { name: 'Statement Looks', icon: () => (<span style={{ fontSize: '1.2em' }}>💪</span>) },
  ];

  
  const LeftArrowSVG = (
    <svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"/>
    </svg>
  );

  
  const RightArrowSVG = (
    <svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
    </svg>
  );

  return (
    <Section>
      <Title>Explore Categories</Title>
      <Subtitle>Your moodboard, made real</Subtitle>
      <CategoriesRow>
        {categories.map((category) => (
          <CategoryButton key={category.name} isactive={category.isActive}>
            {category.icon && category.icon()}
            {category.name}
          </CategoryButton>
        ))}
      </CategoriesRow>

      <OutfitSlider>
        <SliderButton className="left">
          {LeftArrowSVG}
        </SliderButton>
        <OutfitImageWrapper>
          <OutfitImage src={backcloth} alt="Outfit 1" />
        </OutfitImageWrapper>
        <OutfitImageWrapper>
          <OutfitImage src={backcloth1} alt="Outfit 2" />
        </OutfitImageWrapper>
        <OutfitImageWrapper>
          <OutfitImage src={backcloth2} alt="Outfit 3" />
        </OutfitImageWrapper>
        <SliderButton className="right">
          {RightArrowSVG}
        </SliderButton>
      </OutfitSlider>

      <ExploreMoreButton>Explore More Outfits</ExploreMoreButton>

      <SeeItSection>
        <SeeItTitle>See it. Link it. Wear it. <span style={{ opacity: 0.7 }}>🔗</span></SeeItTitle>
        <SeeItSubtitle>Spotted a look you love? Snap it. Link it. Slay it.</SeeItSubtitle>
        <LinkInputContainer>
          <LinkInput type="text" placeholder="Enter the link..." />
          <GenerateButton>Generate</GenerateButton>
        </LinkInputContainer>
      </SeeItSection>

      <SectionHIW>
      <TitleHIW>How It Works?</TitleHIW>
      <StepsContainerHIW>
        <IconWrapper>
          <User />
        </IconWrapper>

        <StepCardHIW>
          <StepContentHIW>
            <StepTitleHIW>Tell Us About You</StepTitleHIW>
            <StepDescriptionHIW>
              Enter quick inputs: Your age, skin tone, body type, gender identity, style vibe.
            </StepDescriptionHIW>
          </StepContentHIW>
        </StepCardHIW>

        <StepCardHIW>
          <StepContentHIW>
            <StepTitleHIW>Pick The Moment</StepTitleHIW>
            <StepDescriptionHIW>
              Choose what you're dressing for: College, Chill and lounge, Work, Parties, Active/Sports.
            </StepDescriptionHIW>
          </StepContentHIW>
        </StepCardHIW>

        <StepCardHIW>
          <StepContentHIW>
            <StepTitleHIW>Define Your Style</StepTitleHIW>
            <StepDescriptionHIW>
              Minimal? Maximal? Moody? Softcore? We Got You.
            </StepDescriptionHIW>
          </StepContentHIW>
        </StepCardHIW>

        <StepCardHIW>
          <StepContentHIW>
            <StepTitleHIW>AI Does Its Magic</StepTitleHIW>
            <StepDescriptionHIW>
              Your Outfit. Your Vibe. Auto-Styled.
            </StepDescriptionHIW>
          </StepContentHIW>
        </StepCardHIW>

        <StepCardHIW>
          <StepContentHIW>
            <StepTitleHIW>Save, Share, Repeat</StepTitleHIW>
            <StepDescriptionHIW>
              Save to your lookbook, share with your group chat, re-roll with 1 tap if you're not vibing, bookmark faves and see style history.
            </StepDescriptionHIW>
          </StepContentHIW>
        </StepCardHIW>
      </StepsContainerHIW>

      
    </SectionHIW>
    <BuildOutfitButtonHIW>Build Outfit Now!</BuildOutfitButtonHIW>
    </Section>
  );
};

export default ExploreCategories;