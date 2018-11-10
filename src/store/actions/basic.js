import * as actionTypes from "../actionKeys/actionTypes";

export const basicResult = val => {
  return {
    type: actionTypes.BASIC,
    basicResult: val
  };
};

// const networkHelper = val => {
//   return {
//     type: actionTypes.NETWORK_CHECK,
//     timeResult: val
//   };
// };

// export const networkCheck = () => {
//   return dispatch => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then(() => {
//         dispatch(networkHelper(true));
//       })
//       .catch(error => {
//         dispatch(networkHelper(false));
//         console.error(error);
//       });
//   };
// };
