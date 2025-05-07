import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // 👈 add this

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

// Progress bar
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

const BodyShapeOption = styled.div`
  background: #111;
  border-radius: 12px;
  padding: 0.8rem 1.2rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: 1px solid #333;
`;

const OptionText = styled.span`
  font-size: 1rem;
`;

const RadioButtonOutline = styled.div`
  width: 18px;
  height: 18px;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RadioButtonInner = styled.div`
  width: 10px;
  height: 10px;
  background-color: #b4ff00;
  border-radius: 50%;
  display: ${({ selected }) => (selected ? "block" : "none")};
`;

// Button
const Button = styled.button`
  background: #b4ff00;
  border: 2px solid black;
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

const OnBoardThree = () => {
  const [step, setStep] = useState(0);
  const [selectedShape, setSelectedShape] = useState(null);
  const navigate = useNavigate();

  const handleShapeSelect = (shape) => {
    setSelectedShape(shape);
  };
  const handleNext = () => {
    
    navigate("/onboardfour"); 
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
                  <Step key={i} active={i <= step} />
                ))}
            </StepBar>
            <StepLabel>{step + 1} on 6</StepLabel>
          </ProgressContainer>

          <div>
            <label style={{ color: "#ccc", fontSize: "0.9rem", marginBottom: "0.5rem", display: "block" }}>
              Select Your Body Shape
            </label>
            <BodyShapeOption onClick={() => handleShapeSelect("Inverted Triangle")}>
              <OptionText>Inverted Triangle</OptionText>
              <RadioButtonOutline>
                <RadioButtonInner selected={selectedShape === "Inverted Triangle"} />
              </RadioButtonOutline>
            </BodyShapeOption>

            <BodyShapeOption onClick={() => handleShapeSelect("Apple")}>
              <OptionText>Apple</OptionText>
              <RadioButtonOutline>
                <RadioButtonInner selected={selectedShape === "Apple"} />
              </RadioButtonOutline>
            </BodyShapeOption>

            <BodyShapeOption onClick={() => handleShapeSelect("Triangle")}>
              <OptionText>Triangle</OptionText>
              <RadioButtonOutline>
                <RadioButtonInner selected={selectedShape === "Triangle"} />
              </RadioButtonOutline>
            </BodyShapeOption>

            <BodyShapeOption onClick={() => handleShapeSelect("Hourglass")}>
              <OptionText>Hourglass</OptionText>
              <RadioButtonOutline>
                <RadioButtonInner selected={selectedShape === "Hourglass"} />
              </RadioButtonOutline>
            </BodyShapeOption>

            <BodyShapeOption onClick={() => handleShapeSelect("Rectangle")}>
              <OptionText>Rectangle</OptionText>
              <RadioButtonOutline>
                <RadioButtonInner selected={selectedShape === "Rectangle"} />
              </RadioButtonOutline>
            </BodyShapeOption>
          </div>

          <Button onClick={handleNext}>
            Next <FiArrowRight />
          </Button>
        </Container>
      </Main>
    </Wrapper>
  );
};

export default OnBoardThree;