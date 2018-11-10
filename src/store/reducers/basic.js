import * as actionTypes from "../actionKeys/actionTypes";
import { updateObject } from "../util/utility";

const initialState = {
  basicData: 100
};

const basicResult = (state, action) => {
  const updatedState = {
    basicData: action.basicResult
  };
  return updateObject(state, updatedState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BASIC:
      return basicResult(state, action);
    default:
      return state;
  }
};

export default reducer;
