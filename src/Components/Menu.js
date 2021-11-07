import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Menu({ Click }) {
  return (
    <Container className={Click && "active"}>
      <TextWrapper>
        <Text to="">00 home</Text>
        <Text to="">01 destination</Text>
        <Text to="">02 crew</Text>
        <Text to="">03 technology</Text>
      </TextWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  height: 100vh;
  background: linear-gradient(
    328deg,
    rgba(208, 214, 249, 0.9) 23%,
    rgba(0, 0, 0, 0.9) 100%
  );
  position: fixed;
  top: 0;
  right: -300px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;

  &.active {
    right: 0;
  }
`;

const TextWrapper = styled.ul`
display: grid;
  gap: 2rem;
`;

const Text = styled(Link)`
  font-size: var(--des-text);
  font-family: var(--des);
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  font-weight: bold;
  letter-spacing: 3px;
`;
