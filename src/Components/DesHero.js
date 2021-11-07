import React from "react";
import styled from "styled-components";
import desktop from "../assets/destination/background-destination-desktop.jpg";
import tablet from "../assets/destination/background-destination-tablet.jpg";
import mobile from "../assets/destination/background-destination-mobile.jpg";
import Planet from "./Planet";
export default function DesHero() {
  return (
    <Container>
      <Wrapper>
        <PlanetWrapper>
          <TextWrapper>
            <Number>01</Number>
            <Text>Pick your destination</Text>
            <PlanetContainer>
                <Planet />
            </PlanetContainer>
          </TextWrapper>
        </PlanetWrapper>
      </Wrapper>
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
  gap: 3rem;
  margin-top: 10rem;
  width: 100%;
  height: 100%;
`;

const TextWrapper = styled.div`
display: flex;
gap: 2rem;
`

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

const PlanetContainer = styled.div`
width: 450px;
height: 450px;
`