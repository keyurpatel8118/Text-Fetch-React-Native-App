import {INCREMENT_STEP, RESET_STEP} from '../actions/types';

const initialState = 1;

export default function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_STEP:
      return action.payload + 1;
    case RESET_STEP:
      return action.payload;
    default:
      return state;
  }
}
