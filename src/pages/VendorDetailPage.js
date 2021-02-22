import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import vendorActions from "../redux/actions/vendor.actions";

import Album from "../components/Album";

const VendorDetailPage = () => {
  const { id } = useParams();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  console.log(id);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(vendorActions.getAVendor(id));
    }
  }, [dispatch, id, isAuthenticated]);
  return (
    // <Container maxWidth="sm">
    <Album />
    // </Container>
  );
};

export default VendorDetailPage;
