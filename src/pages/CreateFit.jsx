import React from 'react';
import styled from 'styled-components';
import { FiPlus, FiChevronDown } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { IoShareOutline } from 'react-icons/io5';
// Import the icon for the "Description" 
// import { FiTag } from 'react-icons/fi';
// Import the icon for the "Select method" field 
// import { FiSettings } from 'react-icons/fi';
// import createfit2 from '../assets/createfit2.svg';
// import createfit1 from '../assets/createfit1.svg';
// import createfit3 from '../assets/createfit3.svg';

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(45deg, rgb(31, 70, 28), rgb(19, 20, 19), rgb(28, 29, 30));
  background-size: 300% 300%;
  overflow: hidden;
  color: white;
  padding: 1.5rem;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
`;

const ProfileBubble = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #a3e635;
  color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1rem;
`;

const InputSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 1rem;
  background-color: #1a1a1a;
  padding: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 1.5rem;
  align-items: center; 
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.2rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #d1d5db;
`;

const InputWithIcon = styled.div`
  display: flex;
  align-items: center;
  background-color: #0f0f0f;
  border: 1px solid #4b5563;
  border-radius: 0.5rem;
  color: white;
  padding: 0.4rem 0.6rem;
`;

const IconWrapper = styled.div`
  margin-right: 0.5rem;
  color: #a3e635; 
`;

const Input = styled.input`
  width: 100%;
  background: none;
  border: none;
  color: white;
  font-size: 0.9rem;
  padding: 0.2rem 0;
  outline: none;
`;

const SelectMethodBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #0f0f0f;
  border: 1px solid #4b5563;
  border-radius: 0.5rem;
  color: #d1d5db;
  font-size: 0.9rem;
  padding: 0.4rem 0.6rem;
`;

const CreateButton = styled.button`
  background: linear-gradient(90deg, #84cc16, #a3e635);
  color: black;
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  font-size: 0.9rem;
  justify-self: end; 

  &:hover {
    opacity: 0.9;
  }
`;

const Filters = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const FilterPill = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: #1a1a1a;
  padding: 0.4rem 0.8rem;
  border-radius: 9999px;
  cursor: pointer;
  font-size: 0.85rem;
`;

const OutcomeControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #0f0f0f;
  border-radius: 9999px;
  padding: 0.2rem 0.5rem;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
`;

const ImageCard = styled.div`
  background-color: #262626;
  border-radius: 0.75rem;
  overflow: hidden;
  position: relative;
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const DetailCard = styled(ImageCard)`
  display: flex;
  flex-direction: column;
`;

const DetailCardTop = styled.div`
  position: relative;
  padding: 0.5rem;
`;

const SaveButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const BrandName = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: #f3f4f6;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const BuyButton = styled.button`
  background: linear-gradient(90deg, #84cc16, #a3e635);
  color: black;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.8rem;
  border: none;

  &:hover {
    opacity: 0.9;
  }
`;

const LookImageWrapper = styled.div`
  position: relative;
`;

const Actions = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

const CreateFit = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Create Outfit</Title>
          <ProfileBubble>H</ProfileBubble>
        </Header>

        <InputSection>
          <InputGroup>
            <Label>Description*</Label>
            <InputWithIcon>
              {/* {FiTag && <IconWrapper><FiTag size={16} /></IconWrapper>} */}
              <Input type="text" defaultValue="Outfit for sangeet night." placeholder="Outfit for sangeet night." />
            </InputWithIcon>
          </InputGroup>

          <InputGroup>
            <Label>Select method</Label>
            <SelectMethodBox>
              {/* {FiSettings && <IconWrapper><FiSettings size={16} /></IconWrapper>} */}
              Choose a method to create outfit.
            </SelectMethodBox>
          </InputGroup>

          <CreateButton>Create →</CreateButton>
        </InputSection>

        <Filters>
          <FilterPill>
            <span>Outcomes</span>
            <OutcomeControl>
              {/* {RiClipboardLine && <RiClipboardLine size={16} color="white" />} */}
              <IconButton>
                <FiPlus size={16} color="white" />
              </IconButton>
              <span>2</span>
              <IconButton>
                <FiPlus size={16} color="white" style={{ transform: 'rotate(45deg)' }} />
              </IconButton>
            </OutcomeControl>
          </FilterPill>

          <FilterPill>
            <span>Season</span>
            <FiChevronDown size={16} color="white" />
          </FilterPill>
        </Filters>

        <Gallery>
          <ImageCard>
            <StyledImg src="https://via.placeholder.com/200/cccccc/ffffff?Text=Outfit+1" alt="Outfit 1" />
          </ImageCard>

          <DetailCard>
            <DetailCardTop>
              <BrandName>NS76 Studio</BrandName>
              <SaveButton>
                <FaRegHeart size={14} /> Save
              </SaveButton>
            </DetailCardTop>
            <LookImageWrapper>
              <StyledImg src="https://via.placeholder.com/200/e0e0e0/000000?Text=Outfit+2" alt="Outfit 2" />
              <Actions>
                <ActionButton>
                  <FaRegHeart size={18} />
                </ActionButton>
                <ActionButton>
                  <IoShareOutline size={18} />
                </ActionButton>
              </Actions>
            </LookImageWrapper>
            <BuyButton>Buy look</BuyButton>
          </DetailCard>

          <ImageCard>
            <StyledImg src="https://via.placeholder.com/200/c0c0c0/ffffff?Text=Outfit+3" alt="Outfit 3" />
          </ImageCard>

          <ImageCard>
            <StyledImg src="https://via.placeholder.com/200/d3d3d3/000000?Text=Outfit+4" alt="Outfit 4" />
          </ImageCard>
        </Gallery>
      </Container>
    </Wrapper>
  );
};

export default CreateFit;