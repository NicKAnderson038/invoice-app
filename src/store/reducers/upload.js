import * as actionTypes from "../actionKeys/actionTypes";
import { updateObject } from "../util/utility";

const initialState = {
  totalInvoiceAmount: null,
  percentageAmount: null,
  wireTransferFlag: false
};

const totalInvoiceResult = (state, action) => {
  let finalTotal;
  let num = parseFloat(action.totalInvoiceResult);
  let calc = (num * 3.5) / 100;
  let total = num - calc;
  state.wireTransferFlag ? (finalTotal = total - 25) : (finalTotal = total);
  const updatedState = {
    totalInvoiceAmount: finalTotal,
    percentageAmount: calc
  };
  return updateObject(state, updatedState);
};

const toggleTotalInvoiceResult = (state, action) => {
  let finalTotal;
  action.toggleTotalInvoiceResult
    ? (finalTotal = state.totalInvoiceAmount - 25)
    : (finalTotal = state.totalInvoiceAmount + 25);
  const updatedState = {
    totalInvoiceAmount: finalTotal,
    wireTransferFlag: action.toggleTotalInvoiceResult
  };
  return updateObject(state, updatedState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOTAL_INVOICE:
      return totalInvoiceResult(state, action);
    case actionTypes.TOGGLE_TOTAL_INVOICE:
      return toggleTotalInvoiceResult(state, action);
    default:
      return state;
  }
};

export default reducer;
