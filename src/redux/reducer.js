import { createReducer } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('phonebook/filter');

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default filter;
