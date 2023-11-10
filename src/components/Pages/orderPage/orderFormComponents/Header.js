import { NavLink as RouterNavLink } from "react-router-dom";
import styled from "styled-components";
import React from "react";

const HeaderContainer = styled.div`
  height: 10rem;
  background-color: #ce2829;
  justify-content: center;
  alighn-content: center;
  display: flex;
  color: #fff;
  overflow: hidden;
`;

const Title = styled.h3`
  font-family: "Londrina Solid", sans-serif;
  color: white;
  font-weight: normal;
  margin-top: 20px;
  font-size: 3rem;
  display: flex;
  align-self: center;
  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;
const Nav = styled.nav`
  display: flex;
  list-style-type: none;

  gap: 0.5rem;
  @media (max-width: 500px) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;
const Container = styled.nav`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  align-items: flex-start;
`;
const NavLink = styled(RouterNavLink)`
  display: flex;
  cursor: pointer;
  text-style: none;
  color: white;
  text-decoration: none;
  font-family: "Barlow", serif;
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
  &:nth-child(3) {
    font-weight: bold;
  }
`;
function Header() {
  return (
    <>
      <HeaderContainer>
        <Container>
          <Title>Teknolojik Yemekler</Title>{" "}
          <Nav>
            <NavLink to="/"> Home - </NavLink>
            <NavLink to="/pizza"> Options - </NavLink>
            <NavLink to="/pizza"> Order Now</NavLink>
          </Nav>
        </Container>
      </HeaderContainer>
    </>
  );
}
export default Header;
