import * as actionTypes from "../actionKeys/actionTypes";

export const totalInvoiceResult = val => {
  return {
    type: actionTypes.TOTAL_INVOICE,
    totalInvoiceResult: val
  };
};

export const toggleTotalInvoiceResult = val => {
  return {
    type: actionTypes.TOGGLE_TOTAL_INVOICE,
    toggleTotalInvoiceResult: val
  };
};
