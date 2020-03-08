import {INCREMENT_STEP, RESET_STEP} from './types';

export const incrementStep = currentStep => dispatch => {
  dispatch({
    type: INCREMENT_STEP,
    payload: currentStep,
  });
};

export const resetStep = () => dispatch => {
  dispatch({
    type: RESET_STEP,
    payload: 1,
  });
};
