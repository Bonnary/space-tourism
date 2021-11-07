import styled from "styled-components";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import MenuIcon from "./MenuIcon";
import React, { useState } from 'react'
import Menu from "./Menu";


export default function Header({ home, destination, crew, technology }) {
  const [Click, setClick] = useState(false);


  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <Line />
        <TextContainer>
          {home ? (
            <TextWrapper>
              <Text to="/">00 home</Text>
            </TextWrapper>
          ) : (
            <Text to="/">00 home</Text>
          )}

          {destination ? (
            <TextWrapper>
              <Text to="destination">01 destination</Text>
            </TextWrapper>
          ) : (
            <Text to="destination">01 destination</Text>
          )}

          {crew ? (
            <TextWrapper>
              <Text to="">02 crew</Text>
            </TextWrapper>
          ) : (
            <Text to="">02 crew</Text>
          )}

          {technology ? (
            <TextWrapper>
              <Text to="">03 technology</Text>
            </TextWrapper>
          ) : (
            <Text to="">03 technology</Text>
          )}
        </TextContainer>
        <MenuIcon Click={Click} setClick={setClick} />
        <Menu Click={Click} setClick={setClick} />
      </Wrapper>
    </Container>
  );
}

const Container = styled.nav`
  margin: 2.7rem 0 0 3.5rem;
  position: fixed;

  @media (max-width: 1025px) {
    margin: 2.7rem 0 0 1.5rem;
  }

`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  height: 96px;
  align-items: center;

  @media (max-width: 1025px) {
    grid-template-columns: 1fr 1.6fr;
  }

  @media (max-width: 770px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const Logo = styled.img``;

const Line = styled.div`
  height: 1px;
  position: absolute;
  width: 680px;
  left: 167px;
  background: rgba(255, 255, 255, 0.5);
  @media (max-width: 1025px) {
    display: none;
  }
`;
const TextContainer = styled.div`
  display: flex;
  gap: 3rem;
  padding: 2rem 2rem 0 2rem;
  background: linear-gradient(
    13deg,
    rgba(208, 214, 249, 0.5) 23%,
    rgba(0, 0, 0, 0.5) 100%
  );
  backdrop-filter: blur(8px);

  @media (max-width: 770px) {
    display: none;
  }
`;

const TextWrapper = styled.div`
  border-bottom: 3px solid white;
  padding-bottom: 2rem;
`;
const Text = styled(Link)`
  font-size: var(--nav-text);
  font-family: var(--des);
  text-transform: uppercase;
  display: flex;
  gap: 1rem;
  color: white;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
`;
