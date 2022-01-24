import * as actions from './actions';
import { createReducer, combineReducers } from '@reduxjs/toolkit';

const itemsReducer = createReducer([], {
  [actions.addItem]: (state, action) => [...state, action.payload],
  [actions.deletItem]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filterReducer = createReducer('', {
  [actions.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({ items: itemsReducer, filter: filterReducer });
