import * as types from "../constants/vendor.constants";
import api from "../../apiService";
// import { toast } from "react-toastify";

const getAllVendors = () => async (dispatch) => {
  dispatch({ type: types.GET_VENDORS_REQUEST, payload: null });
  try {
    const res = await api.get("/vendors");
    dispatch({ type: types.GET_VENDORS_SUCCESS, payload: res.data.data });
    console.log(res.data.data.vendors);
  } catch (error) {
    console.log(error);
    dispatch({ type: types.GET_VENDORS_FAILURE, payload: error });
  }
};

const getAVendor = (id) => async (dispatch) => {
  dispatch({ type: types.GET_VENDOR_REQUEST, payload: null });
  try {
    const res = await api.get(`/vendors/${id}`);
    dispatch({ type: types.GET_VENDOR_SUCCESS, payload: res.data.data });
    // console.log(res.data.data);
  } catch (error) {
    console.log(error);
    dispatch({ type: types.GET_VENDOR_FAILURE, payload: error });
  }
};

const createVendor = (formData) => async (dispatch) => {
  dispatch({ type: types.CREATE_A_VENDORS_REQUEST, payload: null });
  try {
    const res = await api.post("/vendors", formData);
    dispatch({ type: types.CREATE_A_VENDORS_SUCCESS, payload: res.data.data });
    console.log(res.data.data.vendors);
  } catch (error) {
    console.log(error);
    dispatch({ type: types.CREATE_A_VENDORS_FAILURE, payload: error });
  }
};

const vendorActions = {
  getAllVendors,
  createVendor,
  getAVendor,
};
export default vendorActions;
