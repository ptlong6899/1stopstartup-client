import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import PublicNavbar from "../components/PublicNavbar";

const HomePage = () => {
  return (
    <>
      <PublicNavbar />

      <Container>
        <h1>HomePage</h1>
      </Container>
    </>
  );
};

export default HomePage;
