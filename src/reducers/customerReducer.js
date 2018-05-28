import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function customerReducer(
  state = initialState.products,
  action
) {
  debugger;
  switch (action.type) {
    case types.LIST_ALL_CUSTOMERS_SUCCESS:
      return action.payload;
    case types.EDIT_CUSTOMER_SUCCESS:
      return [...state];
    case types.ADD_CUSTOMER_SUCCESS:
      return [...state];
    case types.DELETE_CUSTOMER_SUCCESS:
      return [...state];
    default:
      return state;
  }
}
