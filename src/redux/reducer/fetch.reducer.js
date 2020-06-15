import { fetchConstants } from '../constants';

const initialState = {
  pokemon: [],
};

export const fetch = (state = initialState, action) => {
  switch (action.type) {
    case fetchConstants.SET_DATA:
      return { ...state, pokemon: action.data };
    default:
      return { ...state };
  }
};

export default fetch;
