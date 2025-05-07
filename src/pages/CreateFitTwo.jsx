import React from 'react';
import styled from 'styled-components';
import { TfiWrite } from 'react-icons/tfi';
import { FaLightbulb } from 'react-icons/fa';
import { BiLink } from 'react-icons/bi';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { FiPlus, FiMinus, FiChevronDown } from 'react-icons/fi';

const Wrapper = styled.div`
  background: linear-gradient(45deg, rgb(31, 70, 28), rgb(19, 20, 19), rgb(28, 29, 30));
  min-height: 100vh;
  width: 100vw;
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
`;

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
`;

const ProfileBubble = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #a3e635;
  color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 1rem;
  background-color: #1a1a1a;
  padding: 1.2rem;
  border-radius: 0.75rem;
  align-items: center;
`;

const DescriptionInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.8rem;
  color: #d1d5db;
  margin-bottom: 0.2rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const Input = styled.input`
  background-color: #0f0f0f;
  border: 1px solid #4b5563;
  border-radius: 0.5rem;
  color: white;
  padding: 0.6rem;
  font-size: 0.9rem;
  width: 100%;
  outline: none;
`;

const SelectMethodBox = styled.div`
  background-color: #374151;
  border-radius: 0.5rem;
  color: #a3e635;
  font-size: 0.9rem;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: bold;
`;

const CreateButton = styled.button`
  background: linear-gradient(90deg, #84cc16, #a3e635);
  color: black;
  padding: 0.7rem 1.2rem;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.9rem;
`;

const MethodsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
`;

const MethodCard = styled.div`
  background-color: #262626;
  border-radius: 0.5rem;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333333;
  }
`;

const IconWrapper = styled.div`
  font-size: 1.8rem;
  color: #a3e635;
  margin-bottom: 0.5rem;
`;

const MethodLabel = styled.span`
  font-weight: bold;
  color: white;
  text-align: center;
`;

const OutcomesSection = styled.div`
  background-color: #1a1a1a;
  border-radius: 0.75rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OutcomesLabel = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  color: #d1d5db;
`;

const OutcomesControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ControlButton = styled.button`
  background-color: #0f0f0f;
  color: white;
  border: none;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
`;

const SeasonDropdown = styled.div`
  background-color: #1a1a1a;
  border-radius: 0.75rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #d1d5db;
`;

const SeasonSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: white;
`;

const CreateFitTwo = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Create Outfit</Title>
          <ProfileBubble>H</ProfileBubble>
        </Header>

        <TopSection>
          <DescriptionInput>
            <Label>
              <TfiWrite size={16} /> Description*
            </Label>
            <Input type="text" placeholder="Describe what you want to create" />
          </DescriptionInput>
          <SelectMethodBox>
            <FaLightbulb size={16} /> Choose a method to create outfit.
          </SelectMethodBox>
          <CreateButton>Create →</CreateButton>
        </TopSection>

        <MethodsGrid>
          <MethodCard>
            <IconWrapper>
              <TfiWrite />
            </IconWrapper>
            <MethodLabel>Enter Description</MethodLabel>
          </MethodCard>
          <MethodCard>
            <IconWrapper>
              <BiLink />
            </IconWrapper>
            <MethodLabel>Enter Link</MethodLabel>
          </MethodCard>
          <MethodCard>
            <IconWrapper>
              <AiOutlineCloudUpload />
            </IconWrapper>
            <MethodLabel>Upload photo</MethodLabel>
          </MethodCard>
        </MethodsGrid>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <OutcomesSection>
            <OutcomesLabel>
              Outcomes
              <span style={{ fontSize: '0.7rem' }}>Add number of outcomes u want</span>
            </OutcomesLabel>
            <OutcomesControl>
              <ControlButton>
                <FiPlus />
              </ControlButton>
              <span>4</span>
              <ControlButton>
                <FiMinus />
              </ControlButton>
            </OutcomesControl>
          </OutcomesSection>

          <SeasonDropdown>
            Season
            <SeasonSelect>
              Select season u wanna wear it in. <FiChevronDown />
            </SeasonSelect>
          </SeasonDropdown>
        </div>
      </Container>
    </Wrapper>
  );
};

export default CreateFitTwo;