import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; 

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(45deg, rgb(31, 70, 28), rgb(19, 20, 19), rgb(28, 29, 30));
  background-size: 300% 300%;
  overflow: hidden;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Container = styled.div`
  width: 600px;
  max-width: 90%;
`;

const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: bold;
  line-height: 1.3;
  margin-bottom: 1.6rem;

  span {
    color: #b4ff00;
  }
`;


const ProgressContainer = styled.div`
  margin-bottom: 1rem;
`;

const StepBar = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 5px;
`;

const Step = styled.div`
  flex: 1;
  height: 6px;
  border-radius: 4px;
  background: ${({ active }) => (active ? "#b4ff00" : "#333")};
`;

const StepLabel = styled.div`
  font-size: 0.9rem;
  color: #ccc;
`;

const SkinToneSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 6px;
  margin-bottom: 2rem;
`;

const SkinToneButton = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 25%;
  background-color: ${({ color }) => color};
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.2s ease;

  &:hover,
  &.selected {
    border-color:rgb(176, 250, 2);
  }
`;

const Button = styled.button`
  background: #b4ff00;
  border: none;
  border-radius: 50px;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.9rem 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: 0.2s ease;

  &:hover {
    background: #d4ff2e;
  }
`;

const OnBoardFive = () => {
  const [step, setStep] = useState(4); 
  const [selectedSkinTone, setSelectedSkinTone] = useState(null);
  const navigate = useNavigate();

  const skinTones = [
    "#F8F0E3",
    "#F4E3CF",
    "#F0D5AB",
    "#E8C796",
    "#E0B982",
    "#D8AB6E",
    "#D09D5A",
    "#C88F46",
    "#C08132",
    "#B8731E",
    "#B0650A",
    "#A85700",
    "#A04900",
    "#983B00",
    "#902D00",
    "#881F00",
    "#801100",
    "#780300",
    "#700000",
    "#680000",
    "#600000",
    "#580000",
  ];

  const handleSkinToneSelect = (color) => {
    setSelectedSkinTone(color);
  };
  const handleNext = () => {
    
    navigate("/onboardsix"); // 👈 
  };

  return (
    <Wrapper>
      <Main>
        <Container>
          <Title>
            Welcome To Your Personalized <span>Outfit</span> Curator AI
          </Title>

          <ProgressContainer>
            <StepBar>
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <Step key={i} active={i < step} />
                ))}
            </StepBar>
            <StepLabel>{step + 1} on 6</StepLabel>
          </ProgressContainer>

          <div>
            <label style={{ color: "#ccc", fontSize: "0.9rem", marginBottom: "1rem", display: "block" }}>
              Select Skin Tone
            </label>
            <SkinToneSelector>
              {skinTones.map((color) => (
                <SkinToneButton
                  key={color}
                  color={color}
                  onClick={() => handleSkinToneSelect(color)}
                  className={selectedSkinTone === color ? "selected" : ""}
                />
              ))}
            </SkinToneSelector>
          </div>

          <Button onClick={handleNext}>
            Next <FiArrowRight />
          </Button>
        </Container>
      </Main>
    </Wrapper>
  );
};

export default OnBoardFive;
