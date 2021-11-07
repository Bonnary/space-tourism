import React from "react";
import styled from "styled-components";
import desktop from "../assets/home/background-home-desktop.jpg";
import tablet from "../assets/home/background-home-tablet.jpg";
import mobile from "../assets/home/background-home-mobile.jpg";

export default function Hero() {
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <TopDes>so, you want to trvel to </TopDes>
          <Title>Space</Title>
          <Des>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Des>
        </TextWrapper>
        <ButtonWrapper>
          <Explore>explore</Explore>
        </ButtonWrapper>
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

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 10rem;
  width: 100%;
  height: 100%;

  @media (max-width: 1025px) {
    gap: 1rem;
  }
`;

const Title = styled.h1`
  font-family: var(--title);
  font-size: var(--heading-1);
  color: white;
  text-transform: uppercase;

  @media (max-width: 770px) {
    font-size: var(--heading-2);
  }
`;

const TopDes = styled.p`
  font-family: var(--des);
  font-size: var(--heading-5);
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 3px;

  @media (max-width: 770px) {
    font-size: var(--dev-text);
  }
`;

const Des = styled.p`
  font-family: var(--des);
  font-size: var(--des-text);
  color: var(--text);
  width: 60%;
  line-height: 2rem;

  @media (max-width: 1025px) {
    text-align: center;
    font-size: var(--sub-2);
  }

  @media (max-width: 770px) {
    text-align: center;
    font-size: var(--sub-2);
    width: 90%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  width: 100%;
  height: 100%;
  @media (max-width: 1025px) {
    align-items: flex-start;
    justify-content: center;
  }
`;

const Explore = styled.button`
  background-color: white;
  border-radius: 50%;
  width: 274px;
  height: 274px;
  font-size: var(--heading-4);
  font-family: var(--title);
  text-transform: uppercase;
  border: none;
  align-items: center;
  /* margin-left: 20rem; */

  @media (max-width: 770px) {
    width: 150px;
    height: 150px;
    font-size: var(--heading-5);
  }
`;
