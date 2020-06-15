import { getNameConstants } from '../constants';

const initialState = {
  name: '',
};

export const getName = (state = initialState, action) => {
  switch (action.type) {
    case getNameConstants.SET_NAME:
      return { ...state, name: action.data };
    default:
      return { ...state };
  }
};

export default getName;
