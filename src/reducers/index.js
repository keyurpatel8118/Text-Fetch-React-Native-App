import {combineReducers} from 'redux';
import IncrementReducer from './incrementReducer';

export default combineReducers({
  increment: IncrementReducer,
});
