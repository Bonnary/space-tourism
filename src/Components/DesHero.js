import React, { useState } from "react";
import styled from "styled-components";
import desktop from "../assets/destination/background-destination-desktop.jpg";
import tablet from "../assets/destination/background-destination-tablet.jpg";
import mobile from "../assets/destination/background-destination-mobile.jpg";
import Planet from "./Planet";
import Data from "./Data";
import europa from "../assets/3D-texture/europa.jpg";

export default function DesHero() {
  const [Index, setIndex] = useState(0);
  return (
    <Container>
      {Data.map((data) => (
        <Wrapper key={data.id}>
          <PlanetWrapper>
            <TextWrapper>
              <Number>01</Number>
              <Text>Pick your destination</Text>
            </TextWrapper>
            <Detail>(The 3D planet is rendering in the moment)</Detail>
            <PlanetContainer>
              <Planet index={Index} />
            </PlanetContainer>
          </PlanetWrapper>
          <DetailWrapper>
            <ButtonWrapper>
              <PlanetButtonWrapper className={Index === 0 && "show"}>
                <PlanetButton onClick={() => setIndex(0)}>Moon</PlanetButton>
              </PlanetButtonWrapper>
              <PlanetButtonWrapper className={Index === 1 && "show"}>
                <PlanetButton onClick={() => setIndex(1)}>Mars</PlanetButton>
              </PlanetButtonWrapper>
              <PlanetButtonWrapper className={Index === 2 && "show"}>
                <PlanetButton onClick={() => setIndex(2)}>europa</PlanetButton>
              </PlanetButtonWrapper>
              <PlanetButtonWrapper className={Index === 3 && "show"}>
                <PlanetButton onClick={() => setIndex(3)}>titan</PlanetButton>
              </PlanetButtonWrapper>
            </ButtonWrapper>
            <PlanetTitle>{data.title[Index]}</PlanetTitle>
            <DetailText>{data.des[Index]}</DetailText>
            <Line />
            <BottomTextWrapper>
              <BottomTextContainer>
                <BottomText>AVG. DISTANCE</BottomText>
                <BottomNumber>{data.distence[Index]}</BottomNumber>
              </BottomTextContainer>
              <BottomTextContainer>
                <BottomText>Est. travel time</BottomText>
                <BottomNumber>{data.time[Index]}</BottomNumber>
              </BottomTextContainer>
            </BottomTextWrapper>
            {/* <DetailText>AVG. DISTANCE</DetailText> */}
          </DetailWrapper>
        </Wrapper>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${desktop});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1025px) {
    background: url(${tablet});
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media (max-width: 770px) {
    background: url(${mobile});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;

  @media (max-width: 1025px) {
    grid-template-columns: 1fr;
  }
`;

const PlanetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  width: 100%;
  height: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const Number = styled.h1`
  font-family: var(--des);
  font-size: var(--dev-text);
  color: var(--text);
`;

const Text = styled.p`
  font-family: var(--des);
  font-size: var(--dev-text);
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const Detail = styled.p`
  font-size: var(--nav-text);
  font-family: var(--des);
  color: var(--text);
  opacity: 0.5;
`;

const PlanetContainer = styled.div`
  width: 300px;
  height: 300px;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-top: 8rem;

  @media (max-width: 1025px) {
    align-items: center;
    margin-top: 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const PlanetButtonWrapper = styled.div`
  border: none;

  &.show {
    border-bottom: 3px solid white;
    padding-bottom: 8px;
  }
`;
const PlanetButton = styled.p`
  font-size: var(--nav-text);
  font-family: var(--des);
  color: white;
  text-transform: uppercase;
  cursor: pointer;
`;

const PlanetTitle = styled.p`
  font-size: var(--heading-1);
  font-family: var(--title);
  color: white;
  text-transform: uppercase;
  @media (max-width: 770px) {
    font-size: var(--heading-2);
  }
`;

const DetailText = styled.p`
  font-size: var(--nav-text);
  font-family: var(--des);
  color: var(--text);
  width: 60%;
  @media (max-width: 1025px) {
    width: 50%;
    text-align: center;
  }

  @media (max-width: 770px) {
    width: 100%;
    text-align: center;
  }
`;

const Line = styled.div`
  height: 1px;
  width: 444px;
  background: white;
  opacity: 0.3;

  @media (max-width: 770px) {
    width: 327px;
  }
`;

const BottomTextWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  width: 60%;

  @media (max-width: 770px) {
    width: 100%;
  }
`;

const BottomTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const BottomText = styled.p`
  font-size: var(--sub-2);
  font-family: var(--des);
  color: var(--text);
  text-transform: uppercase;
`;

const BottomNumber = styled.p`
  font-size: var(--heading-5);
  font-family: var(--title);
  color: white;
  text-transform: uppercase;
`;
