import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  results: [],
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter((el) => el.id !== action.id);
  return updateObject(state, {
    results: updatedArray,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_RESULT:
      return updateObject(state, {
        // concat gives out new array, push mutates the old array
        results: state.results.concat({
          value: action.result,
          id: new Date(),
        }),
      });

    case actionType.DELETE_RESULT:
      return deleteResult(state, action);

    default:
      return state;
  }
};

export default reducer;
