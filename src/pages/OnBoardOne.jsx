import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowRight, FiPlus } from "react-icons/fi";
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

const UploadWrapper = styled.div`
  background: #1a1a1a;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #333;
`;

const ChooseFileButton = styled.label`
  background: #222;
  color: #eee;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  font-size: 1rem;
  display: inline-block;

  input[type="file"] {
    display: none;
  }
`;

const UploadPlaceholder = styled.div`
  flex-grow: 1;
  color: #888;
  font-size: 1rem;
`;

const UploadIcons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const IconWrapper = styled.div`
  background: #222;
  border-radius: 8px;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eee;
  cursor: pointer;
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

const OnBoardOne = () => {
  const [step, setStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState("");
  const navigate = useNavigate(); 

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file.name);
    } else {
      setSelectedFile("");
    }
  };
  const handleNext = () => {
   
    navigate("/onboardtwo"); 
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

        <h2>Upload Your Photo</h2>
        <UploadWrapper>
          <ChooseFileButton>
            Choose File
            <input type="file" onChange={handleFileChange} />
          </ChooseFileButton>
          <UploadPlaceholder>{selectedFile || "No file chosen"}</UploadPlaceholder>
          <UploadIcons>
            <IconWrapper>
              <FiPlus size={20} />
            </IconWrapper>
            <IconWrapper>
              <BiImageAdd size={20} />
            </IconWrapper>
          </UploadIcons>
        </UploadWrapper>

        <Button onClick={handleNext}>
          Next <FiArrowRight />
        </Button>
      </Container>
      </Main>
    </Wrapper>
  );
};

export default OnBoardOne;