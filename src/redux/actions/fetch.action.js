import { fetchConstants } from '../constants';

const setData = (data = []) => {
  return { type: fetchConstants.SET_DATA, data };
};

export const fetchActions = {
  setData,
};

export default fetchActions;
