import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Nav = styled.div`
  display: flex;

  a {
    color: black;
    text-decoration: none;
  }

  > :not(:last-child) {
    margin-right: 10px;
  }
`;

export default function Navbar() {
  return (
    <>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/products">Products</Link>
      </Nav>
    </>
  );
}
