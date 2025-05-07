import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";

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

const CodeInputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const CodeInput = styled.input`
  width: 4rem;
  height: 4rem;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid #333;
  color: #eee;
  font-size: 2rem;
  text-align: center;
  padding: 0;
  font-family: "Arial", sans-serif;
  
  /* Hide the input's up and down arrows */
  -moz-appearance: textfield; /* Firefox */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  appearance: textfield; /* Standard */
`;

const Message = styled.p`
  color: #ccc;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  text-align: center;
`;
const Messages = styled.p`
  color: white;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 3rem;
  text-align: center;
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

const OnBoardSix = () => {
  const [step, setStep] = useState(1); 
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

  const handleCodeChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value.slice(0, 1); 
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

  const handleVerification = () => {
    const enteredCode = code.join("");
    console.log("Verifying code:", enteredCode);
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

          <Messages>
          Please verify your email
          </Messages>
          <CodeInputContainer>
            {code.map((digit, index) => (
              <CodeInput
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleCodeChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ))}
          </CodeInputContainer>
          <Message>
            Enter 6-digit code sent to you on xxxxxxx@gmail.com
          </Message>

          <Button onClick={handleVerification}>
            Let's Go <FiArrowRight />
          </Button>
        </Container>
      </Main>
    </Wrapper>
  );
};

export default OnBoardSix;
