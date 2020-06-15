import { combineReducers } from 'redux';
import { fetch } from './fetch.reducer';
import { getName } from './getName.reducer';
import { getPokeData } from './getPokeData.reducer';

const rootReducer = combineReducers({
  fetch,
  getName,
  getPokeData,
});

export default rootReducer;
