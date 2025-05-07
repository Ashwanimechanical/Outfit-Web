import React, { useState } from "react";
import styled from "styled-components";
import { FiPlus, FiHome, FiPlay, FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // 👈 add this

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(45deg,rgb(31, 70, 28),rgb(19, 20, 19),rgb(28, 29, 30));
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


const InputWrapper = styled.div`
  background: #111;
  border-radius: 12px;
  padding: 1.2rem 1rem;
  margin: 2rem 0 1.5rem;
  border: 1px solid #333;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  color: white;
  font-size: 1rem;

  &::placeholder {
    color: #888;
  }
`;


const Checkbox = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: #ccc;
  margin-bottom: 2rem;

  input {
    margin-right: 8px;
  }

  a {
    color: #b4ff00;
    margin: 0 4px;
    text-decoration: none;
  }
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

const OnBoard = () => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); 

  const handleNext = () => {
    
    navigate("/onboardone"); // 👈 
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

          <InputWrapper>
            <Input
              type="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrapper>

          <Checkbox>
            <input type="checkbox" />
            I agree to <a href="#">Terms & Conditions</a> and{" "}
            <a href="#">Privacy Policy</a>
          </Checkbox>

          <Button onClick={handleNext}>
            Let’s Go <FiPlus />
          </Button>
        </Container>
      </Main>
    </Wrapper>
  );
};

export default OnBoard;
