import { getNameConstants } from '../constants';

const setName = (data = '') => {
  return { type: getNameConstants.SET_NAME, data };
};

export const getNameActions = {
  setName,
};

export default getNameActions;
