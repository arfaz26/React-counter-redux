import * as actionType from "../actions/actionTypes";

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_RESULT:
      return {
        ...state,
        // concat gives out new array, push mutates the old array
        results: state.results.concat({
          value: action.result,
          id: new Date(),
        }),
      };

    case actionType.DELETE_RESULT:
      const updatedArray = state.results.filter((el) => el.id !== action.id);
      return {
        ...state,
        results: updatedArray,
      };

    default:
      return state;
  }
};

export default reducer;
