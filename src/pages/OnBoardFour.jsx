import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowRight, FiUpload } from "react-icons/fi";
import { BiImageAdd } from "react-icons/bi";
import { useNavigate } from "react-router-dom"; 

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
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 0.8rem;
  margin-bottom: 0.6rem;
  border: 1px solid #333;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  color: #eee;
  font-size: 1rem;

  &::placeholder {
    color: #888;
  }
`;

const SizeDropdownWrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 0.8rem;
  margin-bottom: 0.6rem;
  border: 1px solid #333;
  color: #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const SizeDropdownPlaceholder = styled.div`
  font-size: 1rem;
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

const OnBoardFour = () => {
    const [step, setStep] = useState(3); 
    const [heightCm, setHeightCm] = useState("");
    const [heightFt, setHeightFt] = useState("");
    const [heightInch, setHeightInch] = useState("");
    const [topSize, setTopSize] = useState("Select your size");
    const [waistSize, setWaistSize] = useState("Select your waist size");
    const navigate = useNavigate();

    const handleNext = () => {
        // You can add validation here
        navigate("/onboardfive"); // 👈 
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
          <StepLabel>{step} on 6</StepLabel>
        </ProgressContainer>

       
        <div>
            <label style={{ color: "#ccc", fontSize: "0.9rem", marginBottom: "0.5rem", display: "block" }}>
              Enter Your Height
            </label>
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.6rem" }}>
              <InputWrapper style={{ flex: 1 }}>
                <Input
                  type="number"
                  placeholder="Enter height in cm"
                  value={heightCm}
                  onChange={(e) => setHeightCm(e.target.value)}
                />
              </InputWrapper>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <InputWrapper style={{ width: "50px" }}>
                  <Input
                    type="number"
                    placeholder="ft"
                    value={heightFt}
                    onChange={(e) => setHeightFt(e.target.value)}
                  />
                </InputWrapper>
                <InputWrapper style={{ width: "50px" }}>
                  <Input
                    type="number"
                    placeholder="inch"
                    value={heightInch}
                    onChange={(e) => setHeightInch(e.target.value)}
                  />
                </InputWrapper>
              </div>
            </div>
          </div>

          <div>
            <label style={{ color: "#ccc", fontSize: "0.9rem", marginBottom: "0.5rem", display: "block" }}>
              Enter your top size
            </label>
            <SizeDropdownWrapper onClick={() => console.log("Top size dropdown clicked")}>
              <SizeDropdownPlaceholder>{topSize}</SizeDropdownPlaceholder>
              <FiArrowRight size={18} />
            </SizeDropdownWrapper>
          </div>

          <div>
            <label style={{ color: "#ccc", fontSize: "0.9rem", marginBottom: "0.5rem", display: "block" }}>
              Enter your waist size
            </label>
            <SizeDropdownWrapper onClick={() => console.log("Waist size dropdown clicked")}>
              <SizeDropdownPlaceholder>{waistSize}</SizeDropdownPlaceholder>
              <FiArrowRight size={18} />
            </SizeDropdownWrapper>
          </div>

          <Button onClick={handleNext}>
            Next <FiArrowRight />
          </Button>
      </Container>
      </Main>
    </Wrapper>
  );
};

export default OnBoardFour;