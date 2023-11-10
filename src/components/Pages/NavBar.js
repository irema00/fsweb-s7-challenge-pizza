import React from "react";
import "./HomePage.css";
import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

function NavBar() {
  const Header = styled.div`
    height: 8rem;
    background-color: #ce2829;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
    color: #fff;
  `;
  const NavLink = styled(RouterNavLink)`
    display:flex;
    cursor: pointer;
    text-style: none;
    color:white;
    text-decoration: none;  
    font-family:"Barlow", serif;
   width: 100%;
    }
  `;
  const NavBtn = styled.div`
    padding-left: 1rem;
    display: flex;
    justify-content: flex-end;
  `;

  return (
    <Header>
      <h3>Teknolojik Yemekler</h3>
      <NavBtn>
        <NavLink to="/">Home</NavLink>-<NavLink to="/pizza">Options</NavLink>-
        <NavLink to="/pizza">Order Now</NavLink>
      </NavBtn>
    </Header>
  );
}

export default NavBar;
