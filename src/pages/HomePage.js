import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  const changeToVendorsPage = () => {
    history.push("/vendors");
  };

  const handleGoToTestPage = () => {
    history.push("/test");
  };

  const handleCreateAVendor = () => {
    history.push("/vendor/add");
  };
  return (
    <Container>
      <h1>HomePage</h1>
      <button onClick={changeToVendorsPage}>All Vendor</button>
      <button onClick={handleCreateAVendor}>Create A Vendor</button>
      <button onClick={handleGoToTestPage}>Go to test page</button>
    </Container>
  );
};

export default HomePage;
