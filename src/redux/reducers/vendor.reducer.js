import * as types from "../constants/vendor.constants";
const initialState = {
  vendors: [],
  loading: false,
};

const vendorReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_VENDORS_REQUEST:
    case types.GET_VENDOR_REQUEST:
    case types.CREATE_A_VENDORS_REQUEST:
      return { ...state, loading: true };
    case types.GET_VENDORS_SUCCESS:
      return {
        ...state,
        vendors: payload.vendors,
        totalPages: payload.totalPages,
        loading: false,
      };
    case types.GET_VENDOR_SUCCESS:
      return {
        ...state,
        vendors: payload,
        loading: false,
      };
    case types.CREATE_A_VENDORS_SUCCESS:
      return {
        ...state,
        currentVendor: {
          vendorData: payload.vendorData,
          layout: payload.layout,
        },
        author: payload.author,
      };

    case types.GET_VENDORS_FAILURE:
    case types.GET_VENDOR_FAILURE:
    case types.CREATE_A_VENDORS_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default vendorReducer;
