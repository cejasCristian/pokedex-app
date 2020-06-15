import { getPokeDataConstants } from '../constants';

const setPokeData = (data = {}) => {
  return { type: getPokeDataConstants.SET_POKEDATA, data };
};

export const getPokeDataActions = {
  setPokeData,
};

export default getPokeDataActions;
