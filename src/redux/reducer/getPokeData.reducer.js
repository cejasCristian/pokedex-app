import { getPokeDataConstants } from '../constants';

const initialState = {
  pokeData: {},
};

export const getPokeData = (state = initialState, action) => {
  switch (action.type) {
    case getPokeDataConstants.SET_POKEDATA:
      return { ...state, pokeData: action.data };
    default:
      return { ...state };
  }
};

export default getPokeData;
