import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
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

const DropdownWrapper = styled.div`
  background: #111;
  border-radius: 12px;
  padding: 1.2rem 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid #333;
  color: #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const DropdownPlaceholder = styled.div`
  font-size: 1rem;
`;




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

const OnBoardTwo = () => {
  const [step, setStep] = useState(0);
  const [gender, setGender] = useState("Select your gender");
  const [ageRange, setAgeRange] = useState("Select your age range");
  const [ethnicity, setEthnicity] = useState("Select your ethnicity");
  const navigate = useNavigate(); 

  const handleNext = () => {
    
    navigate("/onboardthree"); 
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
              I Identify as
            </label>
            <DropdownWrapper onClick={() => console.log("Gender dropdown clicked")}>
              <DropdownPlaceholder>{gender}</DropdownPlaceholder>
              <FiChevronDown size={18} />
            </DropdownWrapper>
          </div>

          <div>
            <label style={{ color: "#ccc", fontSize: "0.9rem", marginBottom: "0.5rem", display: "block" }}>
              I am in my
            </label>
            <DropdownWrapper onClick={() => console.log("Age range dropdown clicked")}>
              <DropdownPlaceholder>{ageRange}</DropdownPlaceholder>
              <FiChevronDown size={18} />
            </DropdownWrapper>
          </div>

          <div>
            <label style={{ color: "#ccc", fontSize: "0.9rem", marginBottom: "0.5rem", display: "block" }}>
              I am an
            </label>
            <DropdownWrapper onClick={() => console.log("Ethnicity dropdown clicked")}>
              <DropdownPlaceholder>{ethnicity}</DropdownPlaceholder>
              <FiChevronDown size={18} />
            </DropdownWrapper>
          </div>

          

          <Button onClick={handleNext}>
            Next <FiArrowRight />
          </Button>
        </Container>
      </Main>
    </Wrapper>
  );
};

export default OnBoardTwo;