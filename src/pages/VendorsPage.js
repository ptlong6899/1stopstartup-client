import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../redux/actions/auth.actions";

import vendorActions from "../redux/actions/vendor.actions";

import { CardView } from "react-card-with-image";
import "react-card-with-image/dist/index.css";
import { useHistory } from "react-router-dom";
import MediaCard from "./TestPage";
import { Button, Grid } from "@material-ui/core";
import PublicNavbar from "../components/PublicNavbar";

const VendorsPage = () => {
  const dispatch = useDispatch();
  const vendors = useSelector((state) => state.vendor.vendors);

  let items = [];

  if (vendors[1]) {
    console.log("for run");
    for (let i = 0; i < vendors.length; i++) {
      items.push({
        id: `${i + 1}`,
        header: `${vendors[i].vendorData.description.header}`,
        description: `${vendors[i].vendorData.description.content}`,
        image: `${vendors[i].author.avatarUrl}`,
        _id: `${vendors[i]._id}`,
      });
    }
  }

  // useEffect(() => {}, [dispatch]);
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

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && accessToken.startsWith("Bearer ")) {
      dispatch(authActions.getCurrentUser(accessToken));
      dispatch(vendorActions.getAllVendors());
    } else {
      dispatch(authActions.logout());
    }
  }, [dispatch]);

  return (
    <>
      <PublicNavbar />
      <Container>
        <Col>
          <Row>
            <h1 className="mb-5 mt-3">Vendors</h1>
          </Row>

          {vendors[1] ? (
            <Grid container spacing={1}>
              {vendors.map((vendor, index) => {
                return (
                  <Grid item xs={12} sm={4}>
                    <MediaCard vendor={vendor} key={index} />
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <></>
          )}
          <div className="d-flex flex-row justify-content-around mt-4 mb-5">
            <Button
              variant="contained"
              color="primary"
              onClick={changeToVendorsPage}
            >
              All Vendor
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleCreateAVendor}
            >
              Create A Vendor
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleGoToTestPage}
            >
              Go to test page
            </Button>
          </div>
        </Col>
      </Container>
    </>
  );
};

export default VendorsPage;
